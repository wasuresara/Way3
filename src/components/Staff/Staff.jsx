import { useState } from "react";
import s from "./Staff.module.css";
import SvitlanaPhoto from "./Svitlana.jpeg";
import MichelinePhoto from "./Michaline.jpeg";
import JuliePhoto from "./Julie.jpeg";
import MaratPhoto from "./Marat.jpeg";
import { staffMembers } from "./StaffData";
import { t } from "../../i18n";

const photos = {
  "Svitlana.jpeg": SvitlanaPhoto,
  "Michaline.jpeg": MichelinePhoto,
  "Julie.jpeg": JuliePhoto,
  "Marat.jpeg": MaratPhoto,
};

function Staff({ language = "de" }) {
  const [isOpen, setIsOpen] = useState(false);
  const title = t(language, {
    de: "Unser Team",
    en: "Our Team",
    fr: "Notre équipe",
    es: "Nuestro equipo",
  });

  return (
    <div id="team">
      <h2 className={s.sectionTitle}>{title}</h2>
      <p className={s.sectionOverview}>
        {t(language, {
          de: "Bei The Way bietet unser erfahrenes Team maßgeschneiderte, hochwertige Dienstleistungen, um Ihren Stil und Ihre Individualität zu unterstreichen. Hier ist ein Überblick über unsere talentierten Fachkräfte:",
          en: "At The Way, our skilled team delivers personalized, high-quality services to enhance your style and individuality. Here's a snapshot of our talented professionals:",
          fr: "Chez The Way, notre équipe qualifiée propose des services personnalisés de haute qualité pour sublimer votre style et votre individualité. Voici un aperçu de nos talentueux professionnels :",
          es: "En The Way, nuestro talentoso equipo ofrece servicios personalizados de alta calidad para realzar tu estilo e individualidad. Aquí tienes un resumen de nuestros profesionales destacados:",
        })}
      </p>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={s.button}
      >
        {isOpen
          ? t(language, {
              de: "Schließen",
              en: "Close",
              fr: "Fermer",
              es: "Cerrar",
            })
          : title}
      </button>
      {isOpen && (
        <div className={s.TableContainer}>
          {staffMembers.map((member) => (
            <div key={member.id} className={s.personBox}>
              {photos[member.image] && (
                <img
                  src={photos[member.image]}
                  alt={`${member.name} Photo`}
                  className={s.teamMemberImage}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className={s.textSection}>
                <h2 className={s.nameText}>{member.name}</h2>
                <ul>
                  <li className={s.tags}>{member.pronouns}</li>
                  {(member.tags[language] || member.tags.de).map((tag) => (
                    <li key={tag} className={s.tags}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className={s.about}>
                  {member.description[language] || member.description.de}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Staff;
