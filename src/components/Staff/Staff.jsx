import React, { useState } from "react";
import s from "./Staff.module.css";
import SvitlanaPhoto from "./Svitlana.jpeg";
import MichelinePhoto from "./Michaline.jpeg";
import JuliannaPhoto from "./Julianna1.jpg";
import MaratPhoto from "./Marat.jpeg"
import TeamGif from "../Staff/IMG_3225.jpg";
import { staffMembers } from "./StaffData";

function Staff({ language = "de" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Language-specific content
  const getTitle = () => {
    switch (language) {
      case "en": return "Our Team";
      case "fr": return "Notre équipe";
      case "es": return "Nuestro equipo";
      default: return "Unser Team";
    }
  };

  const getOverview = () => {
    switch (language) {
      case "en": return "At The Way, our skilled team delivers personalized, high-quality services to enhance your style and individuality. Here's a snapshot of our talented professionals:";
      case "fr": return "Chez The Way, notre équipe qualifiée propose des services personnalisés de haute qualité pour sublimer votre style et votre individualité. Voici un aperçu de nos talentueux professionnels :";
      case "es": return "En The Way, nuestro talentoso equipo ofrece servicios personalizados de alta calidad para realzar tu estilo e individualidad. Aquí tienes un resumen de nuestros profesionales destacados:";
      default: return "Bei The Way bietet unser erfahrenes Team maßgeschneiderte, hochwertige Dienstleistungen, um Ihren Stil und Ihre Individualität zu unterstreichen. Hier ist ein Überblick über unsere talentierten Fachkräfte:";
    }
  };

  const getButtonText = () => {
    switch (language) {
      case "en": return "Our Team";
      case "fr": return "Notre équipe";
      case "es": return "Nuestro equipo";
      default: return "Unser Team";
    }
  };

  const getCloseButtonText = () => {
    switch (language) {
      case "en": return "Close";
      case "fr": return "Fermer";
      case "es": return "Cerrar";
      default: return "Schließen";
    }
  };

  const getStaffMemberTags = (member) => {
    return member.tags[language] || member.tags.de;
  };

  const getStaffMemberDescription = (member) => {
    return member.description[language] || member.description.de;
  };

  const getImageSrc = (imageName) => {
    switch (imageName) {
      case "Svitlana.jpeg": return SvitlanaPhoto;
      case "Michaline.jpeg": return MichelinePhoto;
      case "Julianna1.jpg": return JuliannaPhoto;
      // case "Julie.jpeg": return JuliePhoto;
      case "Marat.jpeg": return MaratPhoto; // Placeholder
      default: return "";
    }
  };

  return (
    <div id="team">
      {!isModalOpen && (
        <>
          <h2 className={s.sectionTitle}>{getTitle()}</h2>
          {/* <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/> */}
          <p className={s.sectionOverview}>{getOverview()}</p>
          <button onClick={openModal} className={s.button}>
            {getButtonText()}
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>{getTitle()}</h2>
          {/* <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/> */}
          <p className={s.sectionOverview}>{getOverview()}</p>
          <button onClick={closeModal} className={s.button}>
            {getCloseButtonText()}
          </button>
          <div className={s.TableContainer}>
            {staffMembers.map((member) => (
              <div key={member.id} className={s.personBox}>
                <img 
                  src={getImageSrc(member.image)} 
                  alt={`${member.name} Photo`} 
                  className={s.teamMemberImage} 
                />
                <div className={s.textSection}>
                  <h2 className={s.nameText}>{member.name}</h2>
                  <ul>
                    <li className={s.tags}>{member.pronouns}</li>
                    {getStaffMemberTags(member).map((tag, index) => (
                      <li key={index} className={s.tags}>{tag}</li>
                    ))}
                  </ul>
                  <p className={s.about}>
                    {getStaffMemberDescription(member)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Staff;