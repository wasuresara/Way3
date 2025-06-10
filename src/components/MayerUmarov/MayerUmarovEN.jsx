import React, { useState } from "react";
import s from "./MayerUmarov.module.css"; // Import styles as modules

function MayerUmarovEN() {
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
            Upcycled clothes. <br />
            We give products a new life – we reconstruct secondary materials
            into one unique item. <br /> Each thing is a single copy.
          </p>
          <button onClick={openModal} className={s.button}>
            learn more
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
