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
    <div id="clothing" className={s.my}>
      {!isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
          <p className={s.sectionOverview}>
            Upcycled clothing. <br /> We give products a new life - we
            reconstruct secondary materials into a unique object. <br />
            Each thing is unique.
          </p>
          <button onClick={openModal} className={s.button}>
            Learn More
          </button>
        </div>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
          <p className={s.sectionOverview}>
            Upcycled clothing. <br /> We give products a new life - we
            reconstruct secondary materials into a unique object. <br />
            Each thing is unique.
          </p>
          <button onClick={closeModal} className={s.button}>
            Close
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

export default MayerUmarovEN;
