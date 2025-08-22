import React, { useState } from "react";
import s from "../Prices/Prices.module.css"; // Імпортуємо стилі як модулі
import MayerUmarovGif from "../About/gif1.gif";
function MayerUmarov() {
  return (
      <div id="clothing" className={s.container}>
        <div>
          <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
          <img src={MayerUmarovGif} alt="MayerUmarovGif" className={s.PricesGif2}/>
          <p className={s.sectionOverview}>
            Upcycelte Kleidung. <br /> Wir geben Produkten ein neues Leben - wir
            rekonstruieren Sekundärmaterialien zu einem einzigartigen
            Gegenstand. <br />
            Jedes Ding ist ein Unikat.
        </p>  
        </div>
    </div>
  );
}

export default MayerUmarov;
