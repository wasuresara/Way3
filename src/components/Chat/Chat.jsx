import { useEffect, useRef, useState } from "react";
import { t } from "../../i18n";
import s from "./Chat.module.css";

const LINK_LABELS = {
  treatwell: {
    de: "Bei Treatwell buchen",
    en: "Book on Treatwell",
    uk: "Записатися на Treatwell",
    ru: "Записаться на Treatwell",
    pl: "Umów się w Treatwell",
  },
  maps: {
    de: "Karte öffnen",
    en: "Open the map",
    uk: "Відкрити карту",
    ru: "Открыть карту",
    pl: "Otwórz mapę",
  },
  email: {
    de: "E-Mail schreiben",
    en: "Email us",
    uk: "Написати листа",
    ru: "Написать письмо",
    pl: "Napisz e-mail",
  },
};

function safeHref(raw) {
  const value = String(raw || "")
    .trim()
    .replace(/[),.;]+$/, "");
  if (/^mailto:/i.test(value)) {
    const address = value.slice(7).split("?")[0];
    if (/^[^\s<>]+@[^\s<>]+\.[^\s<>]+$/.test(address))
      return `mailto:${address}`;
    return null;
  }
  try {
    const url = new URL(value);
    if (url.protocol === "http:" || url.protocol === "https:") return url.href;
  } catch {
    return null;
  }
  return null;
}

function fallbackLabel(href, language) {
  if (href.includes("treatwell")) return t(language, LINK_LABELS.treatwell);
  if (href.includes("instagram.com")) return "Instagram";
  if (href.includes("maps") || href.includes("goo.gl")) {
    return t(language, LINK_LABELS.maps);
  }
  if (href.startsWith("mailto:")) return t(language, LINK_LABELS.email);
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

function linkNode(href, label, key) {
  return (
    <a
      key={key}
      className={s.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

function linkBare(plain, language, nextKey) {
  const pattern =
    /(?:https?:\/\/[^\s<]+)|(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
  const parts = [];
  let last = 0;
  for (const match of plain.matchAll(pattern)) {
    if (match.index > last) parts.push(plain.slice(last, match.index));
    const raw = match[0];
    const href =
      raw.includes("@") && !raw.startsWith("http")
        ? safeHref(`mailto:${raw}`)
        : safeHref(raw);
    if (href)
      parts.push(linkNode(href, fallbackLabel(href, language), nextKey()));
    else parts.push(raw);
    last = match.index + raw.length;
  }
  if (last < plain.length) parts.push(plain.slice(last));
  return parts;
}

function renderRichText(text, language) {
  const nodes = [];
  const markdown = /\[([^\]\n]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let key = 0;
  const nextKey = () => key++;
  for (const match of text.matchAll(markdown)) {
    if (match.index > last) {
      nodes.push(...linkBare(text.slice(last, match.index), language, nextKey));
    }
    const href = safeHref(match[2]);
    if (href) nodes.push(linkNode(href, match[1], nextKey()));
    else nodes.push(match[0]);
    last = match.index + match[0].length;
  }
  nodes.push(...linkBare(text.slice(last), language, nextKey));
  return nodes;
}

const copy = {
  de: {
    open: "Chat öffnen",
    close: "Schließen",
    title: "theWAY",
    greeting:
      "Hallo! Fragen zu Leistungen, Preisen, Öffnungszeiten oder zur Stuhlmiete?",
    placeholder: "Ihre Frage",
    send: "Senden",
    notConfigured: "Der Chat ist noch nicht eingerichtet.",
    error:
      "Gerade klappt die Verbindung nicht. Bitte später noch einmal versuchen oder an info@theway.berlin schreiben.",
    refused: "Dazu kann ich nicht helfen. Fragen Sie mich gern zum Salon.",
    limited: "Zu viele Nachrichten. Bitte kurz warten.",
    tooLong: "Die Nachricht ist zu lang.",
    turnstile: "Die Prüfung ist fehlgeschlagen. Bitte erneut versuchen.",
    timeout: "Die Antwort dauert zu lange. Bitte erneut versuchen.",
    retry: "Erneut versuchen",
  },
  en: {
    open: "Open chat",
    close: "Close",
    title: "theWAY",
    greeting:
      "Hello! Questions about services, prices, hours, or chair rental?",
    placeholder: "Your question",
    send: "Send",
    notConfigured: "Chat is not configured yet.",
    error:
      "The connection is not working right now. Please try again later or write to info@theway.berlin.",
    refused: "I can't help with that. Please ask me about the salon.",
    limited: "Too many messages. Please wait a moment.",
    tooLong: "That message is too long.",
    turnstile: "The check failed. Please try again.",
    timeout: "The answer is taking too long. Please try again.",
    retry: "Try again",
  },
  uk: {
    open: "Відкрити чат",
    close: "Закрити",
    title: "theWAY",
    greeting: "Вітаємо! Питання про послуги, ціни, години чи оренду крісла?",
    placeholder: "Ваше питання",
    send: "Надіслати",
    notConfigured: "Чат ще не налаштовано.",
    error:
      "Зв'язок зараз не працює. Спробуйте пізніше або напишіть на info@theway.berlin.",
    refused: "Із цим я не допоможу. Запитайте, будь ласка, про салон.",
    limited: "Забагато повідомлень. Зачекайте трохи.",
    tooLong: "Повідомлення задовге.",
    turnstile: "Перевірка не пройшла. Спробуйте ще раз.",
    timeout: "Відповідь надто довго готується. Спробуйте ще раз.",
    retry: "Спробувати ще раз",
  },
  ru: {
    open: "Открыть чат",
    close: "Закрыть",
    title: "theWAY",
    greeting:
      "Здравствуйте! Вопросы об услугах, ценах, часах или аренде кресла?",
    placeholder: "Ваш вопрос",
    send: "Отправить",
    notConfigured: "Чат ещё не настроен.",
    error:
      "Связь сейчас не работает. Попробуйте позже или напишите на info@theway.berlin.",
    refused: "С этим я не помогу. Спросите, пожалуйста, о салоне.",
    limited: "Слишком много сообщений. Подождите немного.",
    tooLong: "Сообщение слишком длинное.",
    turnstile: "Проверка не прошла. Попробуйте ещё раз.",
    timeout: "Ответ готовится слишком долго. Попробуйте ещё раз.",
    retry: "Попробовать ещё раз",
  },
  pl: {
    open: "Otwórz czat",
    close: "Zamknij",
    title: "theWAY",
    greeting:
      "Dzień dobry! Pytania o usługi, ceny, godziny albo wynajem fotela?",
    placeholder: "Twoje pytanie",
    send: "Wyślij",
    notConfigured: "Czat nie jest jeszcze skonfigurowany.",
    error:
      "Połączenie teraz nie działa. Spróbuj później albo napisz na info@theway.berlin.",
    refused: "W tym nie pomogę. Zapytaj mnie proszę o salon.",
    limited: "Za dużo wiadomości. Poczekaj chwilę.",
    tooLong: "Wiadomość jest za długa.",
    turnstile: "Sprawdzenie nie powiodło się. Spróbuj ponownie.",
    timeout: "Odpowiedź trwa zbyt długo. Spróbuj ponownie.",
    retry: "Spróbuj ponownie",
  },
};

const errors = {
  not_configured: "notConfigured",
  rate_limited: "limited",
  too_long: "tooLong",
  refused: "refused",
  turnstile: "turnstile",
  upstream: "error",
  bad_request: "error",
  timeout: "timeout",
};

function chatUrl() {
  if (window.location.hostname === "theway.berlin") {
    return "https://www.theway.berlin/api/chat";
  }
  return "/api/chat";
}

function Chat({ language = "de" }) {
  const text = t(language, copy);
  const [open, setOpen] = useState(false);
  const [configured, setConfigured] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [canRetry, setCanRetry] = useState(false);
  const lastQuestion = useRef("");
  const logRef = useRef(null);
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
  const tokenRef = useRef("");

  useEffect(() => {
    let cancelled = false;
    fetch(chatUrl(), { redirect: "follow" })
      .then((res) => (res.ok ? res.json() : { configured: false }))
      .then((data) => {
        if (!cancelled) setConfigured(Boolean(data.configured));
      })
      .catch(() => {
        if (!cancelled) setConfigured(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!open || !siteKey) return undefined;
    let widgetId;
    let cancelled = false;
    const render = () => {
      if (cancelled || !window.turnstile) return;
      const holder = document.getElementById("way-turnstile");
      if (!holder) return;
      widgetId = window.turnstile.render(holder, {
        sitekey: siteKey,
        callback: (token) => {
          tokenRef.current = token;
        },
      });
    };
    if (window.turnstile) {
      render();
    } else {
      let script = document.querySelector("script[data-turnstile]");
      if (!script) {
        script = document.createElement("script");
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.dataset.turnstile = "1";
        document.head.appendChild(script);
      }
      script.addEventListener("load", render);
    }
    return () => {
      cancelled = true;
      if (widgetId != null) window.turnstile?.remove(widgetId);
    };
  }, [open, siteKey]);

  useEffect(() => {
    const node = logRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, open, configured]);

  const failLast = (content) => {
    setCanRetry(true);
    setMessages((current) => {
      const copyMessages = [...current];
      copyMessages[copyMessages.length - 1] = {
        role: "assistant",
        content,
        error: true,
      };
      return copyMessages;
    });
  };

  const sendText = async (content) => {
    if (!content || busy || configured === false) return;
    const prior = messages.filter(
      (message) => message.content && !message.pending && !message.error,
    );
    const next = [...prior, { role: "user", content }];
    lastQuestion.current = content;
    setCanRetry(false);
    setMessages([...next, { role: "assistant", content: "…", pending: true }]);
    setDraft("");
    setBusy(true);
    const controller = new AbortController();
    let gotToken = false;
    let answerDone = false;
    const timer = setTimeout(() => {
      if (!gotToken) controller.abort();
    }, 26000);
    const unlock = () => {
      answerDone = true;
      setBusy(false);
    };
    try {
      const res = await fetch(chatUrl(), {
        method: "POST",
        redirect: "follow",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          messages: next,
          turnstileToken: tokenRef.current,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const key = errors[data.code] || "error";
        failLast(data.message || text[key]);
        if (data.code === "not_configured") setConfigured(false);
        return;
      }
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let full = "";
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          full += decoder.decode(value, { stream: true });
          if (full.includes("\0")) {
            full = full.replaceAll("\0", "");
            gotToken = true;
            answerDone = true;
            const snapshot = full;
            setMessages((current) => {
              const copyMessages = [...current];
              copyMessages[copyMessages.length - 1] = {
                role: "assistant",
                content: snapshot,
              };
              return copyMessages;
            });
            unlock();
            controller.abort();
            break;
          }
          if (full) gotToken = true;
          const snapshot = full;
          setMessages((current) => {
            const copyMessages = [...current];
            copyMessages[copyMessages.length - 1] = {
              role: "assistant",
              content: snapshot,
            };
            return copyMessages;
          });
        }
      }
      if (full) unlock();
      else if (!answerDone) failLast(text.timeout);
    } catch {
      if (!answerDone) {
        failLast(gotToken ? text.error : text.timeout);
      }
    } finally {
      clearTimeout(timer);
      setBusy(false);
    }
  };

  const send = (event) => {
    event.preventDefault();
    sendText(draft.trim());
  };

  const retry = () => {
    sendText(lastQuestion.current);
  };

  return (
    <>
      {open && (
        <section className={s.panel} role="dialog" aria-label={text.title}>
          <div className={s.header}>
            <span>{text.title}</span>
            <button
              type="button"
              className={s.close}
              onClick={() => setOpen(false)}
            >
              {text.close}
            </button>
          </div>
          <div className={s.log} ref={logRef}>
            <p className={`${s.bubble} ${s.assistant}`}>{text.greeting}</p>
            {configured === false && (
              <p className={`${s.bubble} ${s.assistant}`}>
                {text.notConfigured}
              </p>
            )}
            {messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={`${s.bubble} ${message.role === "user" ? s.user : s.assistant}`}
              >
                {renderRichText(message.content, language)}
              </p>
            ))}
            {siteKey && <div id="way-turnstile" />}
          </div>
          <form className={s.form} onSubmit={send}>
            <input
              className={s.input}
              value={draft}
              maxLength={800}
              placeholder={text.placeholder}
              aria-label={text.placeholder}
              disabled={configured === false || busy}
              onChange={(event) => setDraft(event.target.value)}
            />
            <button
              className={s.send}
              type="submit"
              disabled={configured === false || busy}
            >
              {text.send}
            </button>
            {canRetry && (
              <button type="button" className={s.retry} onClick={retry}>
                {text.retry}
              </button>
            )}
          </form>
        </section>
      )}
      <button
        type="button"
        className={s.launcher}
        aria-expanded={open}
        aria-label={text.open}
        onClick={() => setOpen((value) => !value)}
      >
        Chat
      </button>
    </>
  );
}

export default Chat;
