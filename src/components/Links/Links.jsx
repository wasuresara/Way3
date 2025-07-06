import React from "react";
import s from "./Links.module.css";

const Links = () => {
  return (
    <div className={s.linksWrapper}>
      <a
        href="https://www.instagram.com/theway.berlin/"
        target="_blank"
        rel="noopener noreferrer"
        className={s.lgb}
      >
        Instagram
      </a>

      {/* <a href="google.com" target="_blank" className={s.linkButton}>
        Telegram
      </a> */}

      <a
        href="https://maps.app.goo.gl/rhiztmrSESHvT2rU6"
        className={s.lgb}
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Maps
      </a>

      {/* <a href="" className={s.linkButton} target="_blank">
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
      {/* 
      <button
        class={s.lgb}
        href="https://www.instagram.com/theway.berlin/"
        target="_blank"
      >
        Instagram
      </button> */}
    </div>
  );
};

export default Links;
