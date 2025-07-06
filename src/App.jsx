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

// New component to handle language-specific content rendering
function LanguageSpecificContent({ language }) {
  const isEnglish = language === "en";

  return (
    <div className="Wrapper">
      {isEnglish ? <AboutEN /> : <About />}
      <Links />
      {isEnglish ? <PricesHaarEN /> : <PricesHaar />}
      {isEnglish ? <PricesManiEN /> : <PricesMani />}
      {isEnglish ? <MayerUmarovEN /> : <MayerUmarov />}
      {isEnglish ? <StaffEN /> : <Staff />}
      {isEnglish ? <About2EN /> : <About2 />}
      <Links />
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

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div>
      <Analytics />
      <div>
        <div className="buttonBox">
          <button
            onClick={() => handleLanguageChange("en")}
            className={`LanguageSwitcher ${language === "en" ? "active" : ""}`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("de")}
            className={`LanguageSwitcher ${language === "de" ? "active" : ""}`}
          >
            Deutsch
          </button>
          <p className="mText">Mo-Sa 10:00-19:00 Uhr</p>
        </div>
        {/* Render content based on selected language */}
        <LanguageSpecificContent language={language} />
      </div>
    </div>
  );
}

export default App;
