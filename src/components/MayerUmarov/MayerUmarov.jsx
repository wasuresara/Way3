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
  uk: (
    <>
      Одяг з апсайклінгу. <br /> Ми даємо речам нове життя — перетворюємо
      вторинні матеріали на унікальний предмет. <br />
      Кожна річ існує в єдиному екземплярі.
    </>
  ),
  ru: (
    <>
      Одежда из апсайклинга. <br /> Мы даём вещам новую жизнь — превращаем
      вторичные материалы в уникальный предмет. <br />
      Каждая вещь существует в единственном экземпляре.
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
