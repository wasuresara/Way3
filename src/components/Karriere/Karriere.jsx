import React from "react";
import s from "./Karriere.module.css";
import { jobListings } from "./Stellenangebote";

function Karriere({ language = "de" }) {
  // Language-specific content
  const getTitle = () => {
    switch (language) {
      case "en": return "Job Opportunities";
      case "fr": return "Offres d'Emploi";
      case "es": return "Ofertas de Trabajo";
      default: return "Stellenangebote";
    }
  };

  const getApplyButtonText = () => {
    switch (language) {
      case "en": return "Apply Now";
      case "fr": return "Postuler";
      case "es": return "Aplicar";
      default: return "per Email bewerben";
    }
  };

  const getJobTitle = (job) => {
    switch (language) {
      case "en": return job.titleEN;
      case "fr": return job.titleFR;
      case "es": return job.titleES;
      default: return job.title;
    }
  };

  const getJobSalary = (job) => {
    switch (language) {
      case "en": return job.salaryEN;
      case "fr": return job.salaryFR;
      case "es": return job.salaryES;
      default: return job.salary;
    }
  };

  const getJobDescription = (job) => {
    switch (language) {
      case "en": return job.descriptionEN;
      case "fr": return job.descriptionFR;
      case "es": return job.descriptionES;
      default: return job.description;
    }
  };

  return (
    <div id="karriere" className={s.container}>
      <h2 className={s.sectionTitle}>{getTitle()}</h2>
      
      <div className={s.jobList}>
        {jobListings.map((job) => (
          <div 
            key={job.id} 
            className={s.jobItem}
          >
            <div className={s.jobHeader}>
              <h3 className={s.jobTitle}>{getJobTitle(job)}</h3>
              <div className={s.jobMeta}>
                <span className={s.jobLocation}>{job.location}</span>
                {/* <span className={s.jobSalary}>{getJobSalary(job)}</span> */}
              </div>
            </div>
            
            <div className={s.jobDescription}>
              <p>{getJobDescription(job)}</p>
              <a href="mailto:info@theway.berlin" className={s.button}>{getApplyButtonText()}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Karriere;