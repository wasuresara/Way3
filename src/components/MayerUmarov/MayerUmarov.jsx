import React, { useState } from "react";
import s from "./MayerUmarov.module.css"; // Імпортуємо стилі як модулі

function MayerUmarov() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={s.fullBox}>
      {!isModalOpen && (
        <>
          <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
          <p className={s.sectionOverview}>
            Upcycelte Kleidung. <br /> Wir geben Produkten ein neues Leben - wir
            rekonstruieren Sekundärmaterialien zu einem einzigartigen
            Gegenstand. <br />
            Jedes Ding ist ein Unikat.
          </p>
          <button onClick={openModal} className={s.button}>
            mehr erfahren
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
          <p className={s.sectionOverview}>
            Upcycelte Kleidung. <br /> Wir geben Produkten ein neues Leben - wir
            rekonstruieren Sekundärmaterialien zu einem einzigartigen
            Gegenstand. <br />
            Jedes Ding ist ein Unikat.
          </p>
          <button onClick={closeModal} className={s.button}>
            Schließen
          </button>
          <div className={s.contentSection}>
            <a
              href="https://www.instagram.com/mayer.umarov/"
              target="_blank"
              className={s.linkButton}
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MayerUmarov;
