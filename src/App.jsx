import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import React from "react";
import About from "./components/About/About";
import AboutEN from "./components/About/AboutEN";
import About2 from "./components/About2/About2";
import About2EN from "./components/About2/About2EN";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";
import FooterEN from "./components/Footer/FooterEN";
import LinksModal from "./components/LinksModal/LinksModal";
import LinksModalEN from "./components/LinksModal/LinksModalEN";
import Staff from "./components/Staff/Staff";
import StaffEN from "./components/Staff/StaffEN";
import PricesMani from "./components/Prices/PricesMani";
import PricesManiEN from "./components/Prices/PricesManiEN";
import PricesHaar from "./components/Prices/PricesHaar";
import PricesHaarEN from "./components/Prices/PricesHaarEN";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import MayerUmarov from "./components/MayerUmarov/MayerUmarov";
import MayerUmarovEN from "./components/MayerUmarov/MayerUmarovEN";


function LanguageSpecificContent({ language, scrollToSection }) {
  const isEnglish = language === "en";

  return (
    <div className="Wrapper">
      {isEnglish ? <AboutEN /> : <About />}
      <Links isEnglish={isEnglish} scrollToSection={scrollToSection} /> 
      {isEnglish ? <PricesHaarEN scrollToSection={scrollToSection} /> : <PricesHaar scrollToSection={scrollToSection} />}
      {isEnglish ? <PricesManiEN scrollToSection={scrollToSection} /> : <PricesMani scrollToSection={scrollToSection} />}
      {isEnglish ? <MayerUmarovEN /> : <MayerUmarov />}
      {isEnglish ? <StaffEN /> : <Staff />}
      {isEnglish ? <About2EN /> : <About2 />}
      <Links isEnglish={isEnglish} scrollToSection={scrollToSection} />
      {isEnglish ? <LinksModalEN /> : <LinksModal />}
      <Toaster position="bottom-center" reverseOrder={false} />
      {isEnglish ? <FooterEN /> : <Footer />}
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState(() => {
    // Get saved language preference or default to 'de'
    return localStorage.getItem("language") || "de";
  });

  const isEnglish = language === "en";

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
      const scrollPosition = elementTop - headerHeight - (windowHeight - elementHeight) / 2;
      
      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
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
              onClick={() => scrollToSection('home')}
            >
              {isEnglish ? 'Home' : 'Hauptseite'}
            </button>
            <button 
              className="LanguageSwitcher"
              onClick={() => scrollToSection('prices')}
            >
              {isEnglish ? 'Prices' : 'Preise'}
            </button>
            <button 
              className="LanguageSwitcher"
              onClick={() => scrollToSection('clothing')}
            >
              {isEnglish ? 'Clothing' : 'Bekleidung'}
            </button>
            <button 
              className="LanguageSwitcher"
              onClick={() => scrollToSection('team')}
            >
              {isEnglish ? 'Team' : 'Team'}
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
          </nav>
        </div>

        <LanguageSpecificContent language={language} scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}

export default App;
