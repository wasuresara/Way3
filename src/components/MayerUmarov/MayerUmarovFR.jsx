import React from "react";
import s from "../Prices/Prices.module.css";
import MayerUmarovGif from "../About/gif1.gif";

function MayerUmarovFR() {
  return (
    <div id="clothing" className={s.container}>
      <div>
        <h2 className={s.sectionTitle}>MAYER. UMAROV</h2>
        <img
          src={MayerUmarovGif}
          alt="MayerUmarovGif"
          className={s.PricesGif2}
        />
        <p className={s.sectionOverview}>
          Vêtements upcyclés. <br /> Nous donnons une nouvelle vie aux produits
          - nous reconstruisons des matériaux secondaires en un objet unique.{" "}
          <br />
          Chaque chose est unique.
        </p>
      </div>
    </div>
  );
}

export default MayerUmarovFR;
