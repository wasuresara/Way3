import s from "./Karriere.module.css";
import { jobListings } from "./Stellenangebote";
import { pick, t } from "../../i18n";

function Karriere({ language = "de" }) {
  return (
    <div id="karriere" className={s.container}>
      <h2 className={s.sectionTitle}>
        {t(language, {
          de: "Stellenangebote",
          en: "Job Opportunities",
          fr: "Offres d'Emploi",
          es: "Ofertas de Trabajo",
        })}
      </h2>

      <div className={s.jobList}>
        {jobListings.map((job) => (
          <div key={job.id} className={s.jobItem}>
            <div className={s.jobHeader}>
              <h3 className={s.jobTitle}>{pick(job, "title", language)}</h3>
              <div className={s.jobMeta}>
                <span className={s.jobLocation}>{job.location}</span>
              </div>
            </div>

            <div className={s.jobDescription}>
              <p>{pick(job, "description", language)}</p>
              <a href="mailto:info@theway.berlin" className={s.button}>
                {t(language, {
                  de: "per Email bewerben",
                  en: "Apply Now",
                  fr: "Postuler",
                  es: "Aplicar",
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
