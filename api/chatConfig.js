// Fast non-reasoning model. Docs: https://docs.x.ai/docs/models
// grok-4.7 reasons before any visible text and left /api/chat on an empty 200.
export const XAI_MODEL = "grok-4.20-0309-non-reasoning";

export const XAI_CHAT_URL = "https://api.x.ai/v1/chat/completions";

export const LIMITS = {
  windowMs: 10 * 60 * 1000,
  maxRequests: 20,
  maxMessageChars: 800,
  maxHistory: 8,
  maxTokens: 400,
  firstTokenMs: 25000,
};
