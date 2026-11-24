function textOf(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(textOf).join("");
  if (typeof value === "object") {
    if (typeof value.text === "string") return value.text;
    if (typeof value.content === "string") return value.content;
    if (Array.isArray(value.content)) return textOf(value.content);
  }
  return "";
}

export function textFromChunk(chunk) {
  if (!chunk || typeof chunk !== "object") return "";
  const choice = Array.isArray(chunk.choices) ? chunk.choices[0] : undefined;
  const sources = [
    choice?.delta?.content,
    choice?.delta?.text,
    choice?.text,
    choice?.message?.content,
    chunk.delta?.content,
    chunk.content,
    chunk.output_text,
    chunk.text,
  ];
  for (const source of sources) {
    const text = textOf(source);
    if (text) return text;
  }
  return "";
}

export function takeSseText(buffer) {
  const lines = buffer.split(/\r?\n/);
  const rest = lines.pop() ?? "";
  let text = "";
  let finished = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("data:")) continue;
    const data = trimmed.slice(5).trim();
    if (!data || data === "[DONE]") {
      if (data === "[DONE]") finished = true;
      continue;
    }
    try {
      const chunk = JSON.parse(data);
      text += textFromChunk(chunk);
      const reason = chunk.choices?.[0]?.finish_reason;
      if (reason) finished = true;
    } catch {
      // A split JSON line is kept in `rest` on the next read.
    }
  }
  return { text, rest, finished };
}
