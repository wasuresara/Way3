import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import React from "react";
import About from "./components/About/About";
import AboutEN from "./components/About/AboutEN";
import AboutFR from "./components/About/AboutFR";
import AboutES from "./components/About/AboutES";
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
import StaffEN from "./components/Staff/StaffEN";
import StaffFR from "./components/Staff/StaffFR";
import StaffES from "./components/Staff/StaffES";
import PricesMani from "./components/Prices/PricesMani";
import PricesManiEN from "./components/Prices/PricesManiEN";
import PricesManiFR from "./components/Prices/PricesManiFR";
import PricesManiES from "./components/Prices/PricesManiES";
import PricesHaar from "./components/Prices/PricesHaar";
import PricesHaarEN from "./components/Prices/PricesHaarEN";
import PricesHaarFR from "./components/Prices/PricesHaarFR";
import PricesHaarES from "./components/Prices/PricesHaarES";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import MayerUmarov from "./components/MayerUmarov/MayerUmarov";
import MayerUmarovEN from "./components/MayerUmarov/MayerUmarovEN";

function LanguageSpecificContent({ language, scrollToSection }) {
  const isGerman = language === "de";
  const isFrench = language === "fr";
  const isSpanish = language === "es";

  return (
    <div className="Wrapper">
      {isGerman ? (
        <About />
      ) : isFrench ? (
        <AboutFR />
      ) : isSpanish ? (
        <AboutES />
      ) : (
        <AboutEN />
      )}
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
      {isGerman ? <MayerUmarov /> : <MayerUmarovEN />}
      <section className="SpaceSection"></section>
      {isGerman ? (
        <Staff />
      ) : isFrench ? (
        <StaffFR />
      ) : isSpanish ? (
        <StaffES />
      ) : (
        <StaffEN />
      )}
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

function App() {
  const [language, setLanguage] = useState(() => {
    // Get saved language preference or default to 'de'
    return localStorage.getItem("language") || "de";
  });

  const isGerman = language === "de";
  const isFrench = language === "fr";
  const isSpanish = language === "es";

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

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
          </nav>
          <nav>
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
          </nav>
        </div>

        <LanguageSpecificContent
          language={language}
          scrollToSection={scrollToSection}
        />
      </div>
    </div>
  );
}

export default App;
