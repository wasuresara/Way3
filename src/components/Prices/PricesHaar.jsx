import React, { useState } from "react";
import s from "./Prices.module.css";

function PricesHaar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="prices" className={s.fullBox}>
      {!isModalOpen && (
        <>
          <h2 className={s.sectionTitle}>Friseurdienstleistungen</h2>
          <p className={s.sectionOverview}>
            Unsere Meister sind Profis mit langjähriger Erfahrung, die Ihnen
            helfen werden, einen Haarschnitt zu finden, der Ihre Individualität
            und Schönheit unterstreicht.
          </p>
          <button onClick={openModal} className={s.button}>
            Preisübersicht
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Friseurdienstleistungen</h2>
          <p className={s.sectionOverview}>
            Unsere Meister sind Profis mit langjähriger Erfahrung, die Ihnen
            helfen werden, einen Haarschnitt zu finden, der Ihre Individualität
            und Schönheit unterstreicht.
          </p>
          <button onClick={closeModal} className={s.button}>
            Schließen
          </button>
          <div className={s.tableContainer}>
            <label>Preis</label>
            <table>

            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricesHaar;
