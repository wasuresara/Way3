import s from "./Links.module.css";
import { t } from "../../i18n";

const links = [
  {
    href: "https://www.instagram.com/theway.berlin/",
    label: "Instagram",
  },
  {
    href: "https://maps.app.goo.gl/rhiztmrSESHvT2rU6",
    label: "Google Maps",
  },
  {
    href: "https://buchung.treatwell.de/ort/476314/menue/",
    label: "Treatwell",
  },
];

function Links({ language, scrollToSection }) {
  return (
    <div className={s.linksWrapper}>
      <a
        href="#linksModal"
        className={s.lgb}
        onClick={(event) => {
          event.preventDefault();
          scrollToSection("linksModal");
        }}
      >
        {t(language, {
          de: "Anfrage stellen",
          en: "Make a request",
          fr: "Faire une demande",
          es: "Hacer una solicitud",
        })}
      </a>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={s.lgb}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default Links;
