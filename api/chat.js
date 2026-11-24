/* eslint-env node */
import { LIMITS, XAI_CHAT_URL, XAI_MODEL } from "./chatConfig.js";
import { takeSseText } from "./sse.js";
import {
  TIMEOUT_MESSAGE,
  buildSystemPrompt,
  detectMessageLanguage,
  normalizeLanguage,
} from "../src/salonFacts.js";

export const maxDuration = 30;

const hits = new Map();

const ABUSE =
  /ignore (all |any |the )?(previous|prior|above) (instructions|rules)|system prompt|jailbreak|developer mode|reveal (your|the) (prompt|instructions)/i;

const ALLOWED_ORIGINS = new Set([
  "https://theway.berlin",
  "https://www.theway.berlin",
]);

function json(body, status, request) {
  return withCors(
    new Response(JSON.stringify(body), {
      status,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }),
    request,
  );
}

function withCors(response, request) {
  const origin = request?.headers?.get("origin");
  if (!origin || !ALLOWED_ORIGINS.has(origin)) return response;
  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Vary", "Origin");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  return new Response(response.body, { status: response.status, headers });
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

export function OPTIONS(request) {
  return withCors(new Response(null, { status: 204 }), request);
}

export function GET(request) {
  return json(
    {
      configured: Boolean(process.env.XAI_API_KEY),
      turnstile: turnstileEnabled(),
    },
    200,
    request,
  );
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
    return json({ code: "bad_request" }, 400, request);
  }

  const history = cleanHistory(payload?.messages);
  if (history.error) return json({ code: history.error }, 400, request);
  if (ABUSE.test(history.messages.at(-1).content)) {
    return json({ code: "refused" }, 400, request);
  }

  const ip = clientIp(request);
  if (rateLimit(ip)) return json({ code: "rate_limited" }, 429, request);

  if (turnstileEnabled()) {
    const allowed = await turnstileOk(payload?.turnstileToken, ip);
    if (!allowed) return json({ code: "turnstile" }, 400, request);
  }

  if (!process.env.XAI_API_KEY) {
    return json({ code: "not_configured" }, 503, request);
  }

  const siteLanguage = normalizeLanguage(payload?.language ?? payload?.lang);
  const replyLanguage = detectMessageLanguage(
    history.messages.at(-1).content,
    siteLanguage,
  );
  const timeoutBody = {
    code: "timeout",
    message: TIMEOUT_MESSAGE[replyLanguage],
  };

  const controller = new AbortController();
  const abortTimer = setTimeout(() => controller.abort(), LIMITS.firstTokenMs);
  let upstream;
  try {
    upstream = await fetch(XAI_CHAT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.XAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: XAI_MODEL,
        stream: true,
        max_tokens: LIMITS.maxTokens,
        messages: [
          { role: "system", content: buildSystemPrompt(replyLanguage) },
          ...history.messages,
        ],
      }),
    });
  } catch {
    clearTimeout(abortTimer);
    return json(timeoutBody, 504, request);
  }

  if (!upstream.ok || !upstream.body) {
    clearTimeout(abortTimer);
    return json({ code: "upstream" }, 502, request);
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const reader = upstream.body.getReader();
  let pending = "";
  let first = "";
  let sawEnd = false;

  const deadline = Date.now() + LIMITS.firstTokenMs;
  try {
    while (!first && !sawEnd) {
      const remaining = deadline - Date.now();
      if (remaining <= 0) throw new Error("timeout");
      const { done, value } = await readWithDeadline(reader, remaining);
      if (done) {
        sawEnd = true;
        break;
      }
      pending += decoder.decode(value, { stream: true });
      const taken = takeSseText(pending);
      pending = taken.rest;
      first += taken.text;
      if (taken.finished) sawEnd = true;
    }
  } catch {
    clearTimeout(abortTimer);
    reader.cancel();
    return json(timeoutBody, 504, request);
  }

  if (!first) {
    clearTimeout(abortTimer);
    reader.cancel();
    return json(timeoutBody, 504, request);
  }

  if (sawEnd) {
    clearTimeout(abortTimer);
    reader.cancel();
    return withCors(
      new Response(first, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }),
      request,
    );
  }

  let upstreamFinished = false;
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(first));
    },
    async pull(controller) {
      if (upstreamFinished) {
        clearTimeout(abortTimer);
        controller.close();
        return;
      }
      const { done, value } = await reader.read();
      if (done) {
        upstreamFinished = true;
        clearTimeout(abortTimer);
        reader.cancel();
        controller.close();
        return;
      }
      pending += decoder.decode(value, { stream: true });
      const taken = takeSseText(pending);
      pending = taken.rest;
      if (taken.text) controller.enqueue(encoder.encode(taken.text));
      if (taken.finished) {
        upstreamFinished = true;
        clearTimeout(abortTimer);
        reader.cancel();
        controller.close();
      }
    },
    cancel() {
      clearTimeout(abortTimer);
      reader.cancel();
    },
  });

  return withCors(
    new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    }),
    request,
  );
}

function readWithDeadline(reader, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    reader.read().then(
      (result) => {
        clearTimeout(timer);
        resolve(result);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}
