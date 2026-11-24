import { useEffect, useRef, useState } from "react";
import { t } from "../../i18n";
import s from "./Chat.module.css";

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
};

function Chat({ language = "de" }) {
  const text = t(language, copy);
  const [open, setOpen] = useState(false);
  const [configured, setConfigured] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef(null);
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
  const tokenRef = useRef("");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/chat")
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

  const send = async (event) => {
    event.preventDefault();
    const content = draft.trim();
    if (!content || busy || configured === false) return;
    const next = [...messages, { role: "user", content }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setDraft("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
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
        setMessages((current) => {
          const copyMessages = [...current];
          copyMessages[copyMessages.length - 1] = {
            role: "assistant",
            content: text[key],
          };
          return copyMessages;
        });
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
      if (!full) {
        setMessages((current) => {
          const copyMessages = [...current];
          copyMessages[copyMessages.length - 1] = {
            role: "assistant",
            content: text.error,
          };
          return copyMessages;
        });
      }
    } catch {
      setMessages((current) => {
        const copyMessages = [...current];
        copyMessages[copyMessages.length - 1] = {
          role: "assistant",
          content: text.error,
        };
        return copyMessages;
      });
    } finally {
      setBusy(false);
    }
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
                {message.content}
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
