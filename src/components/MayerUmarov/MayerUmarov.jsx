import s from "../Prices/Prices.module.css";
import photo from "./mu.jpeg";
import { t } from "../../i18n";

const copy = {
  de: (
    <>
      Upcycelte Kleidung. <br /> Wir geben Produkten ein neues Leben - wir
      rekonstruieren Sekundärmaterialien zu einem einzigartigen Gegenstand.{" "}
      <br />
      Jedes Ding ist ein Unikat.
    </>
  ),
  en: (
    <>
      Upcycled clothing. <br /> We give products a new life - we reconstruct
      secondary materials into a unique object. <br />
      Each thing is unique.
    </>
  ),
  fr: (
    <>
      Vêtements upcyclés. <br /> Nous donnons une nouvelle vie aux produits -
      nous reconstruisons des matériaux secondaires en un objet unique. <br />
      Chaque chose est unique.
    </>
  ),
  es: (
    <>
      Ropa reciclada. <br /> Damos nueva vida a los productos - reconstruimos
      materiales secundarios en un objeto único. <br />
      Cada cosa es única.
    </>
  ),
};

function MayerUmarov({ language = "de" }) {
  return (
    <div id="clothing" className={s.container}>
      <div>
        <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
        <img
          src={photo}
          alt="MAYER. UMAROV"
          className={s.PricesGif2}
          loading="lazy"
          decoding="async"
        />
        <p className={s.sectionOverview}>{t(language, copy)}</p>
      </div>
    </div>
  );
}

export default MayerUmarov;
