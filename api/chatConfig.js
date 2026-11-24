// Current recommended xAI chat model: https://docs.x.ai/developers/models
export const XAI_MODEL = "grok-4.7";

export const XAI_CHAT_URL = "https://api.x.ai/v1/chat/completions";

export const LIMITS = {
  windowMs: 10 * 60 * 1000,
  maxRequests: 20,
  maxMessageChars: 800,
  maxHistory: 8,
  maxTokens: 400,
};
