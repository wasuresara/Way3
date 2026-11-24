# Salon chat

The chat is only on `/beta` (and `/en/beta`, `/uk/beta`, `/ru/beta`, `/pl/beta`). The normal home page does not include it. `/beta` sends `noindex`.

The browser calls `/api/chat` on the same host. On `theway.berlin` without `www` the widget calls `https://www.theway.berlin/api/chat` directly, because the apex address answers with a 307 to `www` and that redirect can drop a JSON POST. The function allows that browser origin.

The function calls xAI at `https://api.x.ai/v1/chat/completions`. The model id is `XAI_MODEL` in `api/chatConfig.js`: `grok-4.20-0309-non-reasoning`. It does not reason before the answer, so the first words are not held back. The salon facts are the stable start of the system prompt, and the reply language is added after them, so xAI can cache the facts. The key stays on the server.

If no answer text arrives within 25 seconds, the function returns an error in the language of the visitor's message. The widget shows that error and a retry button. The reply language follows the message, not only the site language.

## Add the key in Vercel

1. Open the project **wayberlin3** in the Vercel dashboard.
2. Go to **Settings** → **Environment Variables**.
3. Add `XAI_API_KEY` with a key from the [xAI console](https://console.x.ai/).
4. Enable it for Production and Preview if the preview should answer too.
5. Redeploy. A new deployment is required before the function sees the variable.

Until `XAI_API_KEY` is set, the widget says that chat is not configured yet.

Local preview uses the same rule. Export `XAI_API_KEY` in the shell before `npm run preview` if you want live answers.

## Limits

These limits are in `api/chatConfig.js`.

- 20 messages per IP address in 10 minutes.
- 800 characters per message.
- The last 8 user and assistant messages are sent. Older ones are dropped.
- Messages that ask to ignore the instructions, or to reveal the prompt, are refused without calling xAI.

The rate limit is stored in memory inside one running function. A new instance, or a second instance, does not share that count. The project does not use Vercel KV.

## Cloudflare Turnstile

Turnstile is off. To turn it on:

1. Set `TURNSTILE_ENABLED` to `true` on the server.
2. Set `TURNSTILE_SECRET_KEY` on the server.
3. Set `VITE_TURNSTILE_SITE_KEY` and redeploy so the widget is built with the site key.

The site key is public. The secret is not.
