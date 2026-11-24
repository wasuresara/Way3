import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import About from "./components/About/About";
import Highlights from "./components/Highlights/Highlights";
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

const LANGUAGES = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "uk", label: "УКР", fullName: "Українська" },
  { code: "ru", label: "РУ", fullName: "Русский" },
];

const NAV_ITEMS = [
  {
    id: "home",
    label: { de: "Hauptseite", en: "Home", uk: "Головна", ru: "Главная" },
  },
  {
    id: "prices",
    label: { de: "Preise", en: "Prices", uk: "Ціни", ru: "Цены" },
  },
  {
    id: "clothing",
    label: { de: "Bekleidung", en: "Clothing", uk: "Одяг", ru: "Одежда" },
  },
  {
    id: "team",
    label: { de: "Team", en: "Team", uk: "Команда", ru: "Команда" },
  },
  {
    id: "karriere",
    label: { de: "Karriere", en: "Career", uk: "Кар'єра", ru: "Карьера" },
  },
];

const SEO = {
  title: {
    de: "Friseur Prenzlauer Berg | theWAY Berlin",
    en: "Hair Salon Prenzlauer Berg | theWAY Berlin",
    uk: "Перукарня Prenzlauer Berg | theWAY Berlin",
    ru: "Парикмахерская Prenzlauer Berg | theWAY Berlin",
  },
  description: {
    de: "Friseur in Berlin Prenzlauer Berg: Haarschnitt, Farbe, Balayage, Maniküre & mehr. Jetzt Termin buchen.",
    en: "Hair salon in Berlin Prenzlauer Berg: haircut, color, balayage, manicure & more. Book now.",
    uk: "Перукарня в Берліні, Prenzlauer Berg: стрижка, фарбування, балаяж, манікюр і не тільки. Запишіться зараз.",
    ru: "Парикмахерская в Берлине, Prenzlauer Berg: стрижка, окрашивание, балаяж, маникюр и не только. Запишитесь сейчас.",
  },
};

const OG_LOCALE = {
  de: "de_DE",
  en: "en_GB",
  uk: "uk_UA",
  ru: "ru_RU",
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
  return LANGUAGES.map((item) => (
    <button
      key={item.code}
      type="button"
      onClick={() => onChange(item.code)}
      className={`LanguageSwitcher language-option${language === item.code ? " active" : ""}`}
      aria-label={item.fullName}
      title={item.fullName}
    >
      {item.label}
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
    ensureMeta(
      'meta[property="og:locale"]',
      ["property", "og:locale"],
      OG_LOCALE[language] ?? OG_LOCALE.de,
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
                aria-label={
                  LANGUAGES.find((item) => item.code === language)?.fullName
                }
                title={
                  LANGUAGES.find((item) => item.code === language)?.fullName
                }
              >
                {LANGUAGES.find((item) => item.code === language)?.label}
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
        <Highlights language={language} />
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
