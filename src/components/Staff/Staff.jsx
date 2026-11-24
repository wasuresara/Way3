import { useState } from "react";
import s from "./Staff.module.css";
import SvitlanaPhoto from "./Svitlana.jpeg";
import MaratPhoto from "./Marat.jpeg";
import { staffMembers } from "./StaffData";
import { t } from "../../i18n";

const photos = {
  "Svitlana.jpeg": SvitlanaPhoto,
  "Marat.jpeg": MaratPhoto,
};

function Staff({ language = "de" }) {
  const [isOpen, setIsOpen] = useState(false);
  const title = t(language, {
    de: "Unser Team",
    en: "Our Team",
    uk: "Наша команда",
    ru: "Наша команда",
  });

  return (
    <div id="team">
      <h2 className={s.sectionTitle}>{title}</h2>
      <p className={s.sectionOverview}>
        {t(language, {
          de: "Bei The Way bietet unser erfahrenes Team maßgeschneiderte, hochwertige Dienstleistungen, um Ihren Stil und Ihre Individualität zu unterstreichen. Hier ist ein Überblick über unsere talentierten Fachkräfte:",
          en: "At The Way, our skilled team delivers personalized, high-quality services to enhance your style and individuality. Here's a snapshot of our talented professionals:",
          uk: "У The Way наша досвідчена команда створює індивідуальні послуги високої якості, щоб підкреслити ваш стиль і характер. Ось короткий портрет наших майстрів:",
          ru: "В The Way наша опытная команда создаёт индивидуальные услуги высокого качества, чтобы подчеркнуть ваш стиль и характер. Вот короткий портрет наших мастеров:",
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
              uk: "Закрити",
              ru: "Закрыть",
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
