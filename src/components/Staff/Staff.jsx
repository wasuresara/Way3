import React, { useState } from "react";
import s from "./Staff.module.css";
import SvitlanaPhoto from "./Svitlana.jpeg";
import JuliePhoto from "./Julie.jpeg";
import MichelinePhoto from "./Michaline.jpeg";
import AlinaPhoto from "./Alina.jpeg";
import TeamGif from "../Staff/IMG_3225.jpg";

function Staff() {
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
          <h2 className={s.sectionTitle}>Unser Team</h2>
          <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/>
          <p className={s.sectionOverview}>staff overview</p>
          <button onClick={openModal} className={s.button}>
            Unser Team
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Unser Team</h2>
          <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/>
          <p className={s.sectionOverview}>staff overview</p>
          <button onClick={closeModal} className={s.button}>
            Schließen
          </button>
          <div className={s.TableContainer}>
            <div className={s.personBox}>
              <img src={SvitlanaPhoto} alt="Svitlana Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Svitlana</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Haarschnitt</li>
                  <li className={s.tags}>Haare färben</li>
                  <li className={s.tags}>All-inclusive-Dienstleistungen</li>
                  <li className={s.tags}>Barbering</li>
                  <li className={s.tags}>Deutsch</li>
                  <li className={s.tags}>Englisch</li>
                  <li className={s.tags}>Ukrainisch</li>
                </ul>
                <p className={s.about}>
                  Ich bin Svitlana, eine Friseurmeisterin mit über 20 Jahren
                  Erfahrung. Für mich ist das nicht nur ein Beruf – es ist mein
                  Weg. Im Salon The Way kreiere ich Stil und Komfort für jeden
                  Kunden. Herrenhaarschnitte, Bartpflege, Gesichtsenthaarung,
                  Damenhaarschnitte und verschiedene Färbetechniken – alles, um
                  Ihre Einzigartigkeit zu betonen. Vertrauen Sie mir, und
                  gemeinsam finden wir Ihren perfekten Look!
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={JuliePhoto} alt="Julie Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Julie</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Friseurmitleidenschaft</li>
                  <li className={s.tags}>Haarschnitt</li>
                  <li className={s.tags}>Hochsteckfrisuren</li>
                  <li className={s.tags}>Haarpflege</li>
                  <li className={s.tags}>Haarfarbe</li>
                  <li className={s.tags}>Lange haare</li>
                  <li className={s.tags}>Salonqualität</li>
                  <li className={s.tags}>Deutsch</li>
                </ul>
                <p className={s.about}>
                  Ich bin Julie und Liebe meine Arbeit als Friseurmeisterin seit
                  über zwanzig Jahren. Bei The Way dreht sich alles um Ihr
                  perfektes Haar! Als erfahrene Friseurmeisterin biete ich Ihnen
                  individuelle Beratung, präzise Schnitte und trendbewusste
                  Stylings – ganz nach Ihren Wünschen. Ob klassische Eleganz,
                  moderne Farbtechniken oder ein neuer Look für besondere
                  Anlässe – ich nehme mir Zeit für Sie und Ihr Haar. Ich freue
                  mich auf ihren Besuch!
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={MichelinePhoto} alt="Micheline Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Micheline</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Französisch</li>
                  <li className={s.tags}>Englisch</li>
                  <li className={s.tags}>Maniküre</li>
                  <li className={s.tags}>Nagelverlängerung</li>
                </ul>
                <p className={s.about}>
                  Hallo! Mein Name ist Micheline und ich komme aus Frankreich.
                  Ich bin leidenschaftliche Nagelkünstlerin und praktiziere
                  schon seit über 10 Jahren. Meine Ausbildung habe ich in
                  Frankreich bei renommierten Ausbildern mit unterschiedlichem
                  Hintergrund absolviert. Ich liebe es, extreme Längen mit
                  gewagten, künstlerischen Formen zu sublimieren, genauso wie
                  ich es liebe, kurze, klassische, natürliche Nagelformen zu
                  machen, die französische Eleganz widerspiegeln.
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img src={AlinaPhoto} alt="Alina Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Alina</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Maniküre</li>
                  <li className={s.tags}>Pediküre</li>
                  <li className={s.tags}>Nagelverlängerung</li>
                  <li className={s.tags}>Ukrainisch</li>
                  <li className={s.tags}>Englisch</li>
                </ul>
                <p className={s.about}>
                  Hallo! Ich bin Alina – Nagelstylistin mit 6 Jahren Erfahrung.
                  Ich liebe es, schöne und saubere Ergebnisse zu liefern – ob
                  klassischer French, gepflegter Naturnagel-Look oder
                  Nagelverlängerung. Bei mir bekommst du genau das, was dir
                  gefällt: stilvoll, haltbar und professionell.
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img  alt="Juliana Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Juliana</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Maniküre</li>
                  <li className={s.tags}>Kreative Designs</li>
                  <li className={s.tags}>Hair Styling</li>
                  <li className={s.tags}>Spanisch</li>
                  <li className={s.tags}>Englisch</li>
                </ul>
                <p className={s.about}>
                  Hallo! Mein Name ist Juliana und ich komme aus Kolumbien.
                  Seit 6 Jahren widme ich mich leidenschaftlich der Maniküre
                  und habe mich auf alternative und kreative Designs spezialisiert,
                  die die Persönlichkeit und den einzigartigen Stil jeder Person
                  widerspiegeln. Es begeistert mich, mit Formen, Farben und Texturen
                  zu experimentieren und so jedes Nagelset in ein kleines Kunstwerk zu verwandeln.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Staff;
