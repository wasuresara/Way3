import React, { useState } from "react";
import s from "./Staff.module.css";
import SvitlanaPhoto from "./Svitlana.jpeg";
import MichelinePhoto from "./Michaline.jpeg";
import JuliannaPhoto from "./Julianna1.jpg";
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
          <p className={s.sectionOverview}>Bei The Way bietet unser erfahrenes Team maßgeschneiderte, hochwertige Dienstleistungen, um Ihren Stil und Ihre Individualität zu unterstreichen. Hier ist ein Überblick über unsere talentierten Fachkräfte:</p>
          <button onClick={openModal} className={s.button}>
            Unser Team
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Unser Team</h2>
          <img src={TeamGif} alt="TeamGif" className={s.PricesGif}/>
          <p className={s.sectionOverview}>Bei The Way bietet unser erfahrenes Team maßgeschneiderte, hochwertige Dienstleistungen, um Ihren Stil und Ihre Individualität zu unterstreichen. Hier ist ein Überblick über unsere talentierten Fachkräfte:</p>
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
              <img src={JuliannaPhoto} alt="Juliana Photo" className={s.teamMemberImage} />
              <div className={s.textSection}>
                <h2 className={s.nameText}>Juliana</h2>
                <ul>
                  <li className={s.tags}>She/Her</li>
                  <li className={s.tags}>Maniküre</li>
                  <li className={s.tags}>Kreative Designs</li>
                  <li className={s.tags}>Hair Styling</li>
                  <li className={s.tags}>Haarschnitt</li>
                  <li className={s.tags}>Spanisch</li>
                  <li className={s.tags}>Englisch</li>
                </ul>
                <p className={s.about}>
                  Ich habe 6 Jahre Erfahrung im Nageldesign und 4 Jahre im Bereich
                  Haarstyling. Meine Spezialisierung liegt auf alternativen
                  Haarschnitten und Styles, mit dem Ziel, die Individualität
                  jedes Menschen zu betonen. Außerdem setze ich meine Kreativität
                  gerne in Nail Art und Make-up ein und biete so einen umfassenden
                  Service, der Technik, Stil und eine persönliche Note vereint.
                </p>
              </div>
            </div>
            <div className={s.personBox}>
              <img  alt="Julie Photo" className={s.teamMemberImage} />
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Staff;
