import React, { useState } from "react";
import s from "../Prices/Prices.module.css";

function MayerUmarovEN() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={s.my}>
      {!isModalOpen && (
        <>
          <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
          <p className={s.sectionOverview}>
            Upcycled clothes. <br />
            We give products a new life – we reconstruct secondary materials
            into one unique item. <br /> Each thing is a single copy.
          </p>
          <button onClick={openModal} className={s.button}>
            Learn More
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
          <p className={s.sectionOverview}>
            Upcycled clothes. <br />
            We give products a new life – we reconstruct secondary materials
            into one unique item. <br /> Each thing is a single copy.
          </p>
          <button onClick={closeModal} className={s.button}>
            Close
          </button>
          <div>
            {" "}
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

export default MayerUmarovEN;
