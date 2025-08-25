import React, { useState } from "react";
import s from "./Staff.module.css";
import SvitlanaPhoto from "./Svitlana.jpeg";
import JuliePhoto from "./Julie.jpeg";
import MichelinePhoto from "./Michaline.jpeg";
import JuliannaPhoto from "./Julianna1.jpg";
import TeamGif from "../Staff/IMG_3225.jpg";

function StaffFR() {
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
          <h2 className={s.sectionTitle}>Notre équipe</h2>
          <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/>
          <p className={s.sectionOverview}>Chez The Way, notre équipe qualifiée propose des services personnalisés de haute qualité pour sublimer votre style et votre individualité. Voici un aperçu de nos talentueux professionnels :</p>
          <button onClick={openModal} className={s.button}>
            Notre équipe
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Notre équipe</h2>
          <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/>
          <p className={s.sectionOverview}>Chez The Way, notre équipe qualifiée propose des services personnalisés de haute qualité pour sublimer votre style et votre individualité. Voici un aperçu de nos talentueux professionnels :</p>
          <button onClick={closeModal} className={s.button}>
            Fermer
          </button>
          <div className={s.TableContainer}>
            <div className={s.personBox}>
              <img src={SvitlanaPhoto} alt="Photo de Svitlana" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Svitlana</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Coupe de cheveux</li>
                  <li className={s.tags}>Coloration</li>
                  <li className={s.tags}>Services tout compris</li>
                  <li className={s.tags}>Barbier</li>
                  <li className={s.tags}>Allemand</li>
                  <li className={s.tags}>Anglais</li>
                  <li className={s.tags}>Ukrainien</li>
                </ul>
                <p className={s.about}>
                  Je suis Svitlana, maître coiffeuse avec plus de 20 ans
                  d'expérience. Pour moi, ce n'est pas seulement un métier —
                  c'est ma voie. Au salon The Way, je crée du style et du
                  confort pour chaque client. Coupes pour hommes, entretien de
                  la barbe, épilation du visage, coupes pour femmes et diverses
                  techniques de coloration — tout pour mettre en valeur votre
                  singularité. Faites-moi confiance et, ensemble, nous trouverons
                  votre look parfait !
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={JuliePhoto} alt="Photo de Julie" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Julie</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Coiffeuse passionnée</li>
                  <li className={s.tags}>Coupe de cheveux</li>
                  <li className={s.tags}>Chignons</li>
                  <li className={s.tags}>Soin des cheveux</li>
                  <li className={s.tags}>Coloration</li>
                  <li className={s.tags}>Cheveux longs</li>
                  <li className={s.tags}>Qualité salon</li>
                  <li className={s.tags}>Allemand</li>
                </ul>
                <p className={s.about}>
                  Je suis Julie et j'aime mon métier de maître coiffeuse depuis
                  plus de vingt ans. Chez The Way, tout tourne autour de vos
                  cheveux parfaits ! En tant que maître coiffeuse expérimentée,
                  j'offre des conseils personnalisés, des coupes précises et un
                  coiffage tendance — exactement selon vos envies. Qu'il s'agisse
                  d'élégance classique, de techniques de coloration modernes ou
                  d'un nouveau look pour une occasion spéciale — je prends le
                  temps pour vous et vos cheveux. Au plaisir de vous accueillir !
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={MichelinePhoto} alt="Photo de Micheline" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Micheline</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Français</li>
                  <li className={s.tags}>Anglais</li>
                  <li className={s.tags}>Manucure</li>
                  <li className={s.tags}>Extension d'ongles</li>
                </ul>
                <p className={s.about}>
                  Bonjour ! Je m'appelle Micheline et je viens de France. Je
                  suis une prothésiste ongulaire passionnée et je pratique depuis
                  plus de 10 ans. Je me suis formée en France auprès de
                  formateurs renommés aux parcours variés. J'adore sublimer les
                  grandes longueurs avec des formes audacieuses et artistiques,
                  tout autant que créer des formes courtes, classiques et
                  naturelles qui reflètent l'élégance française.
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={JuliannaPhoto} alt="Photo de Juliana" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Juliana</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Manucure</li>
                  <li className={s.tags}>Designs créatifs</li>
                  <li className={s.tags}>Coiffure</li>
                  <li className={s.tags}>Coupe de cheveux</li>
                  <li className={s.tags}>Espagnol</li>
                  <li className={s.tags}>Anglais</li>
                </ul>
                <p className={s.about}>
                  J'ai 6 ans d'expérience en design d'ongles et 4 ans dans le
                  domaine du coiffage. Ma spécialisation se concentre sur les
                  coupes et styles alternatifs, dans le but de mettre en valeur
                  l'individualité de chaque personne. De plus, j'aime appliquer
                  ma créativité dans l'art des ongles et le maquillage, offrant
                  ainsi un service complet qui combine technique, style et une
                  touche personnelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffFR;


