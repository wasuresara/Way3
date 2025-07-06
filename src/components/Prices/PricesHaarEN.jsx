import React, { useState } from "react";
import s from "./Prices.module.css";

function PricesHaarEN() {
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
          <h2 className={s.sectionTitle}>Hairdressing Services</h2>
          <p className={s.sectionOverview}>
            Our masters are professionals with many years of experience who will
            help you find a haircut that emphasizes your individuality and
            beauty.
          </p>
          <button onClick={openModal} className={s.button}>
            Price Overview
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Hairdressing Services</h2>
          <p className={s.sectionOverview}>
            Our masters are professionals with many years of experience who will
            help you find a haircut that emphasizes your individuality and
            beauty.
          </p>
          <button onClick={closeModal} className={s.button}>
            Close
          </button>
          <div className={s.tableContainer}>
            <label>Price</label>
          
          </div>
        </div>
      )}
    </div>
  );
}

export default PricesHaarEN;
