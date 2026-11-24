import s from "./Karriere.module.css";
import { chairRentals } from "./Stellenangebote";
import { pick, t } from "../../i18n";

const enquirySubject = {
  de: "Anfrage Stuhlmiete",
  en: "Chair rental enquiry",
  uk: "Запит щодо оренди крісла",
  ru: "Заявка на аренду кресла",
  pl: "Zapytanie o wynajem fotela",
};

function Karriere({ language = "de" }) {
  const subject = encodeURIComponent(t(language, enquirySubject));
  return (
    <div id="karriere" className={s.container}>
      <h2 className={s.sectionTitle}>
        {t(language, {
          de: "Stuhl mieten",
          en: "Rent a chair",
          uk: "Оренда крісла",
          ru: "Аренда кресла",
          pl: "Wynajem fotela",
        })}
      </h2>

      <div className={s.jobList}>
        {chairRentals.map((place) => (
          <div key={place.id} className={s.jobItem}>
            <div className={s.jobHeader}>
              <h3 className={s.jobTitle}>{pick(place, "title", language)}</h3>
              <div className={s.jobMeta}>
                <span className={s.jobLocation}>{place.location}</span>
              </div>
            </div>

            <div className={s.jobDescription}>
              <p>{pick(place, "description", language)}</p>
              <a
                href={`mailto:info@theway.berlin?subject=${subject}`}
                className={s.button}
              >
                {t(language, {
                  de: "Anfrage per E-Mail",
                  en: "Enquire by email",
                  uk: "Запит електронною поштою",
                  ru: "Заявка по почте",
                  pl: "Zapytanie e-mailem",
                })}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Karriere;
