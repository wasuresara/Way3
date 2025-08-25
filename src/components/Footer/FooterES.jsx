import s from "./Footer.module.css";
import pricesStyles from "../Prices/Prices.module.css";
const FooterES = () => {
  return (
    <div>
      <p className={s.text}>
      theWAY Friseur- und Nagelstudio eGbR <br />
      Seelower Str. 2<br />
      10439 Berlin <br />
      Telefon: 030 123456 <br />
      E-Mail: info@theway.berlin <br />
        
<br />
      Geschäftsführer: Svitlana Karpiuk <br />
      Handelsregister: GsR 2830 B <br />
        Umsatzsteuer-ID: DE454849959
        <span className={s.version}>ESv1.02</span>
      </p>
      <a href="/dsgvo.html" className={pricesStyles.button}>Política de Privacidad</a>
    </div>
  );
};

export default FooterES;
