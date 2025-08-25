import React, { useState } from "react";
import s from "./Staff.module.css";
import SvitlanaPhoto from "./Svitlana.jpeg";
import JuliePhoto from "./Julie.jpeg";
import MichelinePhoto from "./Michaline.jpeg";
import AlinaPhoto from "./Alina.jpeg";
import JuliannaPhoto from "./Julianna1.jpg";
import TeamGif from "../Staff/IMG_3225.jpg";

function StaffES() {
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
          <h2 className={s.sectionTitle}>Nuestro equipo</h2>
          <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/>
          <p className={s.sectionOverview}>resumen del equipo</p>
          <button onClick={openModal} className={s.button}>
            Nuestro equipo
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Nuestro equipo</h2>
          <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/>
          <p className={s.sectionOverview}>resumen del equipo</p>
          <button onClick={closeModal} className={s.button}>
            Cerrar
          </button>
          <div className={s.TableContainer}>
            <div className={s.personBox}>
              <img src={SvitlanaPhoto} alt="Foto de Svitlana" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Svitlana</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Corte de pelo</li>
                  <li className={s.tags}>Coloración</li>
                  <li className={s.tags}>Servicios todo incluido</li>
                  <li className={s.tags}>Barbería</li>
                  <li className={s.tags}>Alemán</li>
                  <li className={s.tags}>Inglés</li>
                  <li className={s.tags}>Ucraniano</li>
                </ul>
                <p className={s.about}>
                  Soy Svitlana, maestra peluquera con más de 20 años de
                  experiencia. Para mí, esto no es solo una profesión: es mi
                  camino. En el salón The Way creo estilo y comodidad para cada
                  cliente. Cortes de hombre, cuidado de barba, depilación facial,
                  cortes de mujer y diversas técnicas de coloración — todo para
                  resaltar tu singularidad. ¡Confía en mí y juntos encontraremos
                  tu look perfecto!
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={JuliePhoto} alt="Foto de Julie" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Julie</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Peluquera apasionada</li>
                  <li className={s.tags}>Corte de pelo</li>
                  <li className={s.tags}>Recogidos</li>
                  <li className={s.tags}>Cuidado del cabello</li>
                  <li className={s.tags}>Coloración</li>
                  <li className={s.tags}>Cabello largo</li>
                  <li className={s.tags}>Calidad de salón</li>
                  <li className={s.tags}>Alemán</li>
                </ul>
                <p className={s.about}>
                  Soy Julie y me encanta mi trabajo como maestra peluquera desde
                  hace más de veinte años. En The Way, todo gira en torno a tu
                  cabello perfecto. Como maestra peluquera con experiencia,
                  ofrezco asesoramiento personalizado, cortes precisos y peinados
                  a la moda — exactamente como lo deseas. Ya sea elegancia
                  clásica, técnicas modernas de color o un nuevo look para
                  ocasiones especiales — me tomo el tiempo para ti y tu cabello.
                  ¡Espero tu visita!
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={MichelinePhoto} alt="Foto de Micheline" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Micheline</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Francés</li>
                  <li className={s.tags}>Inglés</li>
                  <li className={s.tags}>Manicura</li>
                  <li className={s.tags}>Extensión de uñas</li>
                </ul>
                <p className={s.about}>
                  ¡Hola! Me llamo Micheline y soy de Francia. Soy una artista de
                  uñas apasionada y llevo practicando más de 10 años. Me formé en
                  Francia con instructores de renombre y orígenes diversos. Me
                  encanta sublimar longitudes extremas con formas audaces y
                  artísticas, y también crear formas cortas, clásicas y
                  naturales que reflejen la elegancia francesa.
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={AlinaPhoto} alt="Foto de Alina" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Alina</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Manicura</li>
                  <li className={s.tags}>Pedicura</li>
                  <li className={s.tags}>Extensión de uñas</li>
                  <li className={s.tags}>Ucraniano</li>
                  <li className={s.tags}>Inglés</li>
                </ul>
                <p className={s.about}>
                  ¡Hola! Soy Alina, estilista de uñas con 6 años de experiencia.
                  Me encanta ofrecer resultados bonitos y limpios — ya sea un
                  french clásico, un look natural bien cuidado o extensiones de
                  uñas. Conmigo obtienes exactamente lo que te gusta: con estilo,
                  duradero y profesional.
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={JuliannaPhoto} alt="Foto de Juliana" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Juliana</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Manicura</li>
                  <li className={s.tags}>Diseños creativos</li>
                  <li className={s.tags}>Peinado</li>
                  <li className={s.tags}>Corte de pelo</li>
                  <li className={s.tags}>Español</li>
                  <li className={s.tags}>Inglés</li>
                </ul>
                <p className={s.about}>
                  Tengo 6 años de experiencia en diseño de uñas y 4 años en el
                  área de peinado. Mi especialización se centra en cortes y
                  estilos alternativos, con el objetivo de resaltar la
                  individualidad de cada persona. Además, me encanta aplicar mi
                  creatividad en nail art y maquillaje, ofreciendo un servicio
                  integral que combina técnica, estilo y un toque personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffES;


