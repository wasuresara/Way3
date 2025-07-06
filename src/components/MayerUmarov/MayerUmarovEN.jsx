import React, { useState } from "react";
import s from "../Prices/Prices.module.css";
import MayerUmarovGif from "../About/gif1.gif";

function MayerUmarovEN() {
  return (
    <div id="clothing" className={s.container}>
      <div>
        <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
        <img src={MayerUmarovGif} alt="MayerUmarovGif" className={s.PricesGif}/>
        <p className={s.sectionOverview}>
          Upcycled clothing. <br /> We give products a new life - we
          reconstruct secondary materials into a unique object. <br />
          Each thing is unique.
        </p>  
      </div>
    </div>
  );
}

export default MayerUmarovEN;
