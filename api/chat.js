/* eslint-env node */
import { LIMITS, XAI_CHAT_URL, XAI_MODEL } from "./chatConfig.js";
import { buildSystemPrompt, normalizeLanguage } from "../src/salonFacts.js";

export const maxDuration = 30;

const hits = new Map();

const ABUSE =
  /ignore (all |any |the )?(previous|prior|above) (instructions|rules)|system prompt|jailbreak|developer mode|reveal (your|the) (prompt|instructions)/i;

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function rateLimit(ip) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.start > LIMITS.windowMs) {
    hits.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMITS.maxRequests;
}

function turnstileEnabled() {
  return process.env.TURNSTILE_ENABLED === "true";
}

async function turnstileOk(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return false;
  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: ip,
  });
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body },
  );
  if (!res.ok) return false;
  const data = await res.json();
  return data.success === true;
}

export function GET() {
  return json({
    configured: Boolean(process.env.XAI_API_KEY),
    turnstile: turnstileEnabled(),
  });
}

function cleanHistory(messages) {
  if (!Array.isArray(messages) || messages.length === 0) {
    return { error: "bad_request" };
  }
  const cleaned = [];
  for (const message of messages) {
    if (!message || (message.role !== "user" && message.role !== "assistant")) {
      return { error: "bad_request" };
    }
    if (typeof message.content !== "string") return { error: "bad_request" };
    const content = message.content.trim();
    if (!content) return { error: "bad_request" };
    if (content.length > LIMITS.maxMessageChars) return { error: "too_long" };
    cleaned.push({ role: message.role, content });
  }
  const sliced = cleaned.slice(-LIMITS.maxHistory);
  if (sliced.at(-1).role !== "user") return { error: "bad_request" };
  return { messages: sliced };
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ code: "bad_request" }, 400);
  }

  const history = cleanHistory(payload?.messages);
  if (history.error) return json({ code: history.error }, 400);
  if (ABUSE.test(history.messages.at(-1).content)) {
    return json({ code: "refused" }, 400);
  }

  const ip = clientIp(request);
  if (rateLimit(ip)) return json({ code: "rate_limited" }, 429);

  if (turnstileEnabled()) {
    const allowed = await turnstileOk(payload?.turnstileToken, ip);
    if (!allowed) return json({ code: "turnstile" }, 400);
  }

  if (!process.env.XAI_API_KEY) {
    return json({ code: "not_configured" }, 503);
  }

  const language = normalizeLanguage(payload?.language);
  const upstream = await fetch(XAI_CHAT_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.XAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: XAI_MODEL,
      stream: true,
      max_tokens: LIMITS.maxTokens,
      messages: [
        { role: "system", content: buildSystemPrompt(language) },
        ...history.messages,
      ],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    return json({ code: "upstream" }, 502);
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const reader = upstream.body.getReader();
  let pending = "";

  const stream = new ReadableStream({
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) {
        controller.close();
        return;
      }
      pending += decoder.decode(value, { stream: true });
      const lines = pending.split("\n");
      pending = lines.pop() ?? "";
      let text = "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data:")) continue;
        const data = trimmed.slice(5).trim();
        if (!data || data === "[DONE]") continue;
        try {
          const chunk = JSON.parse(data);
          text += chunk.choices?.[0]?.delta?.content || "";
        } catch {
          // Ignore a partial or non-JSON keepalive line.
        }
      }
      if (text) controller.enqueue(encoder.encode(text));
    },
    cancel() {
      reader.cancel();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
