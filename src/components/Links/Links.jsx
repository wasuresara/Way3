import React from "react";
import s from "./Links.module.css";
const Links = () => {
  return (
    <div className={s.linksWrapper}>
      <a
        href="https://www.instagram.com/theway.berlin/"
        target="_blank"
        className={s.linkButton}
      >
        Instagram
      </a>

      {/* <a href="google.com" target="_blank" className={s.linkButton}>
        Telegram
      </a> */}

      <a
        href="https://maps.app.goo.gl/HUtTRPK7wKwGSPEC6"
        className={s.linkButton}
        target="_blank"
      >
        Maps
      </a>

      {/* <a href="" className={s.linkButton} target="_blank">
        Whatsapp
      </a> */}

      <a
        href="https://buchung.treatwell.de/ort/476314/menue/"
        className={s.linkButton}
        target="_blank"
      >
        Treatwell
      </a>
    </div>
  );
};

export default Links;
