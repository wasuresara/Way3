import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import React from "react";
import About from "./components/About/About";
import About2 from "./components/About2/About2";
import About2EN from "./components/About2/About2EN";
import About2FR from "./components/About2/About2FR";
import About2ES from "./components/About2/About2ES";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";
import FooterEN from "./components/Footer/FooterEN";
import FooterFR from "./components/Footer/FooterFR";
import FooterES from "./components/Footer/FooterES";
import LinksModal from "./components/LinksModal/LinksModal";
import LinksModalEN from "./components/LinksModal/LinksModalEN";
import LinksModalFR from "./components/LinksModal/LinksModalFR";
import LinksModalES from "./components/LinksModal/LinksModalES";
import Staff from "./components/Staff/Staff";
import PricesMani from "./components/Prices/PricesMani";
import PricesManiEN from "./components/Prices/PricesManiEN";
import PricesManiFR from "./components/Prices/PricesManiFR";
import PricesManiES from "./components/Prices/PricesManiES";
import PricesHaar from "./components/Prices/PricesHaar";
import PricesHaarEN from "./components/Prices/PricesHaarEN";
import PricesHaarFR from "./components/Prices/PricesHaarFR";
import PricesHaarES from "./components/Prices/PricesHaarES";
import Karriere from "./components/Karriere/Karriere";
import { Toaster } from "react-hot-toast";
import { useState, useEffect, useRef } from "react";
import MayerUmarov from "./components/MayerUmarov/MayerUmarov";
import MayerUmarovEN from "./components/MayerUmarov/MayerUmarovEN";
import MayerUmarovFR from "./components/MayerUmarov/MayerUmarovFR";
import MayerUmarovES from "./components/MayerUmarov/MayerUmarovES";

function LanguageSpecificContent({ language, scrollToSection }) {
  const isGerman = language === "de";
  const isFrench = language === "fr";
  const isSpanish = language === "es";

  return (
    <div className="Wrapper">
      <About language={language} />
      <Links language={language} scrollToSection={scrollToSection} />
      {isGerman ? (
        <PricesHaar scrollToSection={scrollToSection} />
      ) : isFrench ? (
        <PricesHaarFR scrollToSection={scrollToSection} />
      ) : isSpanish ? (
        <PricesHaarES scrollToSection={scrollToSection} />
      ) : (
        <PricesHaarEN scrollToSection={scrollToSection} />
      )}
      <section className="SpaceSection"></section>
      {isGerman ? (
        <PricesMani scrollToSection={scrollToSection} />
      ) : isFrench ? (
        <PricesManiFR scrollToSection={scrollToSection} />
      ) : isSpanish ? (
        <PricesManiES scrollToSection={scrollToSection} />
      ) : (
        <PricesManiEN scrollToSection={scrollToSection} />
      )}
      <section className="SpaceSection"></section>
      {isGerman ? (
        <MayerUmarov />
      ) : isFrench ? (
        <MayerUmarovFR />
      ) : isSpanish ? (
        <MayerUmarovES />
      ) : (
        <MayerUmarovEN />
      )}
      <section className="SpaceSection"></section>
      <Staff language={language} />
      <section className="SpaceSection"></section>
      {isGerman ? (
        <About2 />
      ) : isFrench ? (
        <About2FR />
      ) : isSpanish ? (
        <About2ES />
      ) : (
        <About2EN />
      )}
      <Links language={language} scrollToSection={scrollToSection} />
      {isGerman ? (
        <LinksModal />
      ) : isFrench ? (
        <LinksModalFR />
      ) : isSpanish ? (
        <LinksModalES />
      ) : (
        <LinksModalEN />
      )}
      <Toaster position="bottom-center" reverseOrder={false} />
      <section className="SpaceSection"></section>
      <Karriere language={language} />
      {isGerman ? (
        <Footer />
      ) : isFrench ? (
        <FooterFR />
      ) : isSpanish ? (
        <FooterES />
      ) : (
        <FooterEN />
      )}
    </div>
  );
}

function App({ language: routeLanguage }) {
  const [language, setLanguage] = useState(() => {
    // Use route language if provided, otherwise get from localStorage or default to 'de'
    return routeLanguage || localStorage.getItem("language") || "de";
  });
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isGerman = language === "de";
  const isFrench = language === "fr";
  const isSpanish = language === "es";
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLanguageMenuOpen(false); // Close menu after selection
    
    // Navigate to the appropriate language route
    const path = lang === "de" ? "/" : `/${lang}`;
    window.location.href = path;
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  // SEO: update title/description/canonical per language
  useEffect(() => {
    const titles = {
      de: "Friseur Prenzlauer Berg | theWAY Berlin",
      en: "Hair Salon Prenzlauer Berg | theWAY Berlin",
      fr: "Coiffeur Prenzlauer Berg | theWAY Berlin",
      es: "Peluquería Prenzlauer Berg | theWAY Berlin",
    };
    const descriptions = {
      de: "Friseur in Berlin Prenzlauer Berg: Haarschnitt, Farbe, Balayage, Maniküre & mehr. Jetzt Termin buchen.",
      en: "Hair salon in Berlin Prenzlauer Berg: haircut, color, balayage, manicure & more. Book now.",
      fr: "Coiffeur à Berlin Prenzlauer Berg : coupe, couleur, balayage, manucure & plus. Réservez maintenant.",
      es: "Peluquería en Berlín Prenzlauer Berg: corte, color, balayage, manicura y más. Reserva ahora.",
    };

    document.title = titles[language] || titles.de;

    const ensureMeta = (name) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      return el;
    };

    ensureMeta("description").setAttribute("content", descriptions[language] || descriptions.de);

    const ensureOg = (prop) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      return el;
    };

    ensureOg("og:title").setAttribute("content", titles[language] || titles.de);
    ensureOg("og:description").setAttribute("content", descriptions[language] || descriptions.de);
    ensureOg("og:url").setAttribute("content", window.location.href);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const path = language === "de" ? "/" : `/${language}`;
    canonical.setAttribute("href", `${window.location.origin}${path}`);
  }, [language]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60; // Approximate height of the sticky header
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;
      const elementHeight = elementRect.height;
      const windowHeight = window.innerHeight;

      // Calculate position to center the section in the viewport
      const scrollPosition =
        elementTop - headerHeight - (windowHeight - elementHeight) / 5;

      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Analytics />
      <div>
        <div className="buttonBox">
          <nav>
             <button
               className="LanguageSwitcher"
               onClick={() => scrollToSection("home")}
             >
               {isGerman
                 ? "Hauptseite"
                 : isFrench
                   ? "Accueil"
                   : isSpanish
                     ? "Inicio"
                     : "Home"}
             </button>
             <button
               className="LanguageSwitcher"
               onClick={() => scrollToSection("prices")}
             >
               {isGerman
                 ? "Preise"
                 : isFrench
                   ? "Tarifs"
                   : isSpanish
                     ? "Precios"
                     : "Prices"}
             </button>
             <button
               className="LanguageSwitcher"
               onClick={() => scrollToSection("clothing")}
             >
               {isGerman
                 ? "Bekleidung"
                 : isFrench
                   ? "Vêtements"
                   : isSpanish
                     ? "Ropa"
                     : "Clothing"}
             </button>
             <button
               className="LanguageSwitcher"
               onClick={() => scrollToSection("team")}
             >
               {isGerman
                 ? "Team"
                 : isFrench
                   ? "Équipe"
                   : isSpanish
                     ? "Equipo"
                     : "Team"}
             </button>
             <button
               className="LanguageSwitcher"
               onClick={() => scrollToSection("karriere")}
             >
               {isGerman
                 ? "Karriere"
                 : isFrench
                   ? "Carrière"
                   : isSpanish
                     ? "Carrera"
                     : "Career"}
             </button>
           </nav>
          {!isMobile && (
            <nav className="language-nav">
              <div className="language-dropdown" ref={dropdownRef}>
                <button
                  onClick={() => handleLanguageChange("de")}
                  className={`LanguageSwitcher ${language === "de" ? "active" : ""}`}
                >
                  DE
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`LanguageSwitcher ${language === "en" ? "active" : ""}`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange("fr")}
                  className={`LanguageSwitcher ${language === "fr" ? "active" : ""}`}
                >
                  FR
                </button>
                <button
                  onClick={() => handleLanguageChange("es")}
                  className={`LanguageSwitcher ${language === "es" ? "active" : ""}`}
                >
                  ES
                </button>
              </div>
            </nav>
          )}
        </div>
        
        {isMobile && (
          <div className="mobile-language-container">
            <div className="language-dropdown" ref={dropdownRef}>
              <button
                className="LanguageSwitcher language-toggle"
                onClick={toggleLanguageMenu}
              >
                {language.toUpperCase()}
              </button>
              {isLanguageMenuOpen && (
                <div className="language-dropdown-menu">
                  <button
                    onClick={() => handleLanguageChange("de")}
                    className={`LanguageSwitcher ${language === "de" ? "active" : ""}`}
                  >
                    DE
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`LanguageSwitcher ${language === "en" ? "active" : ""}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange("fr")}
                    className={`LanguageSwitcher ${language === "fr" ? "active" : ""}`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => handleLanguageChange("es")}
                    className={`LanguageSwitcher ${language === "es" ? "active" : ""}`}
                  >
                    ES
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <LanguageSpecificContent
          language={language}
          scrollToSection={scrollToSection}
        />
      </div>
    </div>
  );
}

export default App;
