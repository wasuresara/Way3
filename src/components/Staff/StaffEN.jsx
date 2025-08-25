import React, { useState } from "react";
import s from "./Staff.module.css";
import SvitlanaPhoto from "./Svitlana.jpeg";
import JuliePhoto from "./Julie.jpeg";
import MichelinePhoto from "./Michaline.jpeg";
import AlinaPhoto from "./Alina.jpeg";
import JuliannaPhoto from "./Julianna1.jpg";  
import TeamGif from "../Staff/IMG_3225.jpg";

function StaffEN() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="team">
      {!isModalOpen && (
        <>
          <h2 className={s.sectionTitle}>Our Team</h2>
          <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/>
          <p className={s.sectionOverview}>staff overview</p>
          <button onClick={openModal} className={s.button}>
            Our Team
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Our Team</h2>
          <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/>
          <p className={s.sectionOverview}>staff overview</p>
          <button onClick={closeModal} className={s.button}>
            Close
          </button>
          <div className={s.TableContainer}>
            <div className={s.personBox}>
              <img src={SvitlanaPhoto} alt="Svitlana Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Svitlana</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Haircut</li>
                  <li className={s.tags}>Hair Coloring</li>
                  <li className={s.tags}>All-inclusive Services</li>
                  <li className={s.tags}>Barbering</li>
                  <li className={s.tags}>German</li>
                  <li className={s.tags}>English</li>
                  <li className={s.tags}>Ukrainian</li>
                </ul>
                <p className={s.about}>
                  I am Svitlana, a master hairdresser with over 20 years of
                  experience. For me, this is not just a profession — it's my
                  path. At The Way salon, I create style and comfort for every
                  client. Men's haircuts, beard care, facial depilation,
                  women's haircuts, and various coloring techniques — all to
                  emphasize your uniqueness. Trust me, and together we'll find
                  your perfect look!
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={JuliePhoto} alt="Julie Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Julie</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Passionate Hairdresser</li>
                  <li className={s.tags}>Haircut</li>
                  <li className={s.tags}>Updos</li>
                  <li className={s.tags}>Hair Care</li>
                  <li className={s.tags}>Hair Color</li>
                  <li className={s.tags}>Long Hair</li>
                  <li className={s.tags}>Salon Quality</li>
                  <li className={s.tags}>German</li>
                </ul>
                <p className={s.about}>
                  I'm Julie and I have loved my work as a master hairdresser
                  for over twenty years. At The Way, everything revolves around
                  your perfect hair! As an experienced master hairdresser, I
                  offer personalized consultations, precise cuts, and
                  trend-conscious styling — exactly as you wish. Whether
                  classic elegance, modern color techniques, or a new look for
                  special occasions — I take time for you and your hair. I look
                  forward to your visit!
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={MichelinePhoto} alt="Micheline Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Micheline</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>French</li>
                  <li className={s.tags}>English</li>
                  <li className={s.tags}>Manicure</li>
                  <li className={s.tags}>Nail Extension</li>
                </ul>
                <p className={s.about}>
                  Hello! My name is Micheline and I come from France. I am a
                  passionate nail artist and have been practicing for over 10
                  years. I completed my training in France with renowned
                  instructors from diverse backgrounds. I love to sublimate
                  extreme lengths with bold, artistic shapes, just as much as I
                  love making short, classic, natural nail shapes that reflect
                  French elegance.
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={AlinaPhoto} alt="Alina Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Alina</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Manicure</li>
                  <li className={s.tags}>Pedicure</li>
                  <li className={s.tags}>Nail Extension</li>
                  <li className={s.tags}>Ukrainian</li>
                  <li className={s.tags}>English</li>
                </ul>
                <p className={s.about}>
                  Hello! I'm Alina – a nail stylist with 6 years of experience.
                  I love delivering beautiful and clean results – whether it's a
                  classic French, a well-groomed natural nail look, or nail
                  extensions. With me, you get exactly what you like: stylish,
                  durable, and professional.
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={JuliannaPhoto} alt="Juliana Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Juliana</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Manicure</li>
                  <li className={s.tags}>Creative Designs</li>
                  <li className={s.tags}>Hair Styling</li>
                  <li className={s.tags}>Haircut</li>
                  <li className={s.tags}>Spanish</li>
                  <li className={s.tags}>English</li>
                </ul>
                <p className={s.about}>
                  I have 6 years of experience in nail design and 4 years in
                  hair styling. My specialization focuses on alternative haircuts
                  and styles, with the goal of emphasizing each person's
                  individuality. Additionally, I love to apply my creativity in
                  nail art and makeup, offering a comprehensive service that
                  combines technique, style, and a personal touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffEN;
