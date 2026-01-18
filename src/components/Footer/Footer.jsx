import s from "./Footer.module.css";
import pricesStyles from "../Prices/Prices.module.css";

const Footer = () => {

  return (
    <div><p>
        <span className={s.version}>v1.5</span>
      </p>
      <a href="/dsgvo.html" className={pricesStyles.button}>Datenschutzerklärung</a>
      <a href="/impressum.html" className={pricesStyles.button}>Impressum</a>
    </div>
  );
};

export default Footer;
