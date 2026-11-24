import { useEffect, useState } from "react";
import { highlightCopy, loadHighlights } from "../../highlights";
import s from "./Highlights.module.css";

function formatDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;
  const date = new Date(
    Number(match[1]),
    Number(match[2]) - 1,
    Number(match[3]),
  );
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function HighlightCard({ item, language }) {
  const [imageOk, setImageOk] = useState(Boolean(item.imageUrl));
  const copy = highlightCopy(item, language);
  if (!copy.title) return null;

  return (
    <article className={s.card}>
      {item.imageUrl && imageOk ? (
        <img
          src={item.imageUrl}
          alt=""
          className={s.image}
          loading="lazy"
          decoding="async"
          onError={() => setImageOk(false)}
        />
      ) : null}
      <div className={s.body}>
        {item.date && <p className={s.date}>{formatDate(item.date)}</p>}
        <h3 className={s.title}>{copy.title}</h3>
        {copy.text ? <p className={s.text}>{copy.text}</p> : null}
        {item.link && (
          <a
            className={s.more}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        )}
      </div>
    </article>
  );
}

function Highlights({ language = "en" }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    let active = true;
    loadHighlights().then((next) => {
      if (active) setItems(next);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!items || items.length === 0) return null;

  return (
    <section className={s.section} aria-labelledby="highlights-title">
      <h2 id="highlights-title" className={s.sectionTitle}>
        Highlights
      </h2>
      <div className={s.list}>
        {items.map((item) => (
          <HighlightCard
            key={`${item.date}-${item.title}`}
            item={item}
            language={language}
          />
        ))}
      </div>
    </section>
  );
}

export default Highlights;
