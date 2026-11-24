import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import About from "./components/About/About";
import About2 from "./components/About2/About2";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";
import LinksModal from "./components/LinksModal/LinksModal";
import Staff from "./components/Staff/Staff";
import Prices from "./components/Prices/Prices";
import Karriere from "./components/Karriere/Karriere";
import MayerUmarov from "./components/MayerUmarov/MayerUmarov";
import { t } from "./i18n";
import { useMediaQuery } from "./hooks/useMediaQuery";

const LANGUAGES = ["de", "en", "fr", "es"];

const NAV_ITEMS = [
  {
    id: "home",
    label: { de: "Hauptseite", en: "Home", fr: "Accueil", es: "Inicio" },
  },
  {
    id: "prices",
    label: { de: "Preise", en: "Prices", fr: "Tarifs", es: "Precios" },
  },
  {
    id: "clothing",
    label: { de: "Bekleidung", en: "Clothing", fr: "Vêtements", es: "Ropa" },
  },
  {
    id: "team",
    label: { de: "Team", en: "Team", fr: "Équipe", es: "Equipo" },
  },
  {
    id: "karriere",
    label: { de: "Karriere", en: "Career", fr: "Carrière", es: "Carrera" },
  },
];

const SEO = {
  title: {
    de: "Friseur Prenzlauer Berg | theWAY Berlin",
    en: "Hair Salon Prenzlauer Berg | theWAY Berlin",
    fr: "Coiffeur Prenzlauer Berg | theWAY Berlin",
    es: "Peluquería Prenzlauer Berg | theWAY Berlin",
  },
  description: {
    de: "Friseur in Berlin Prenzlauer Berg: Haarschnitt, Farbe, Balayage, Maniküre & mehr. Jetzt Termin buchen.",
    en: "Hair salon in Berlin Prenzlauer Berg: haircut, color, balayage, manicure & more. Book now.",
    fr: "Coiffeur à Berlin Prenzlauer Berg : coupe, couleur, balayage, manucure & plus. Réservez maintenant.",
    es: "Peluquería en Berlín Prenzlauer Berg: corte, color, balayage, manicura y más. Reserva ahora.",
  },
};

function ensureMeta(selector, attribute, value) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [attr, attrValue] = attribute;
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
  return el;
}

function LanguageOptions({ language, onChange }) {
  return LANGUAGES.map((code) => (
    <button
      key={code}
      type="button"
      onClick={() => onChange(code)}
      className={`LanguageSwitcher${language === code ? " active" : ""}`}
    >
      {code.toUpperCase()}
    </button>
  ));
}

function App({ language: routeLanguage = "de" }) {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(routeLanguage);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    setLanguage(routeLanguage);
    localStorage.setItem("language", routeLanguage);
  }, [routeLanguage]);

  useEffect(() => {
    if (!isMobile) setIsLanguageMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (!isLanguageMenuOpen) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageMenuOpen]);

  useEffect(() => {
    const title = t(language, SEO.title);
    const description = t(language, SEO.description);
    document.title = title;
    document.documentElement.lang = language;

    ensureMeta(
      'meta[name="description"]',
      ["name", "description"],
      description,
    );
    ensureMeta('meta[property="og:title"]', ["property", "og:title"], title);
    ensureMeta(
      'meta[property="og:description"]',
      ["property", "og:description"],
      description,
    );
    ensureMeta(
      'meta[property="og:url"]',
      ["property", "og:url"],
      window.location.href,
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const path = language === "de" ? "/" : `/${language}`;
    canonical.setAttribute("href", `${window.location.origin}${path}`);
  }, [language]);

  const handleLanguageChange = (lang) => {
    setIsLanguageMenuOpen(false);
    if (lang === language) return;
    setLanguage(lang);
    navigate(lang === "de" ? "/" : `/${lang}`);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerHeight = 76;
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset;
    const scrollPosition =
      elementTop - headerHeight - (window.innerHeight - elementRect.height) / 5;

    window.scrollTo({
      top: Math.max(0, scrollPosition),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="buttonBox">
        <nav>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="LanguageSwitcher"
              onClick={() => scrollToSection(item.id)}
            >
              {t(language, item.label)}
            </button>
          ))}
        </nav>
        {!isMobile && (
          <nav className="language-nav">
            <div className="language-dropdown" ref={dropdownRef}>
              <LanguageOptions
                language={language}
                onChange={handleLanguageChange}
              />
            </div>
          </nav>
        )}
        {isMobile && (
          <div className="mobile-language-container">
            <div className="language-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="LanguageSwitcher language-toggle"
                onClick={() => setIsLanguageMenuOpen((open) => !open)}
                aria-expanded={isLanguageMenuOpen}
              >
                {language.toUpperCase()}
              </button>
              {isLanguageMenuOpen && (
                <div className="language-dropdown-menu">
                  <LanguageOptions
                    language={language}
                    onChange={handleLanguageChange}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="Wrapper">
        <About language={language} />
        <Links language={language} scrollToSection={scrollToSection} />
        <Prices language={language} scrollToSection={scrollToSection} />
        <section className="SpaceSection"></section>
        <MayerUmarov language={language} />
        <section className="SpaceSection"></section>
        <Staff language={language} />
        <section className="SpaceSection"></section>
        <About2 language={language} />
        <Links language={language} scrollToSection={scrollToSection} />
        <LinksModal language={language} />
        <Toaster position="bottom-center" reverseOrder={false} />
        <section className="SpaceSection"></section>
        <Karriere language={language} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
