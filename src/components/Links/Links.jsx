import React from "react";
import s from "./Links.module.css";

const Links = ({ language, scrollToSection }) => {
  const getBookNowText = () => {
    switch (language) {
      case "de":
        return "Anfrag stellen";
      case "en":
        return "Make a request";
      case "fr":
        return "Faire une demande";
      case "es":
        return "Hacer una solicitud";
      default:
        return "Make a request";
    }
  };

  return (
    <div className={s.linksWrapper}>
      <a className={s.lgb} onClick={() => scrollToSection("linksModal")}>
        {getBookNowText()}
      </a>
      <a
        href="https://www.instagram.com/theway.berlin/"
        target="_blank"
        rel="noopener noreferrer"
        className={s.lgb}
      >
        Instagram
      </a>

      {/* <a href="" target="_blank" className={s.lgb}>
        Telegram
      </a>  */}

      <a
        href="https://maps.app.goo.gl/rhiztmrSESHvT2rU6"
        className={s.lgb}
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Maps
      </a>
      {/* 
      <a href="" className={s.lgb} target="_blank">
        Whatsapp
      </a> */}

      <a
        href="https://buchung.treatwell.de/ort/476314/menue/"
        className={s.lgb}
        target="_blank"
        rel="noopener noreferrer"
      >
        Treatwell
      </a>
    </div>
  );
};

export default Links;
