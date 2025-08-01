import React, { useState, useEffect } from "react";
import s from "./Prices.module.css";
import { nailServices } from "./pricesData";
import ManiGif from "../About/gif1.gif";

function PricesMani({ scrollToSection }) {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      // On desktop, expand all items
      setExpandedItems(new Set(nailServices.map(service => service.id)));
    } else {
      // On mobile, collapse all by default
      setExpandedItems(new Set());
    }
  }, [isDesktop]);

  const toggleDescription = (serviceId) => {
    if (isDesktop) return; // No toggle on desktop
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  return (
    <div id="prices" className={s.container}>
        <>
          <h2 className={s.sectionTitle}>Nageldienst</h2>
          {/* <p className={s.sectionOverview}>
            Professionelle Maniküre und Pediküre, damit Ihre Nägel gesund und
            schön bleiben.
          </p> */}
          <img src={ManiGif} alt="ManiGif" className={s.PricesGif}/>
          <div className={s.priceList}>
            {nailServices.map((service) => (
              <div 
                key={service.id} 
                className={`${s.priceItem} ${expandedItems.has(service.id) ? s.expanded : ''}`}
                onClick={() => toggleDescription(service.id)}
              >
                <div className={s.priceItemContent}>
                  {/* <div className={s.serviceImage}>
                    <img src={service.picture} alt={service.service} />
                  </div> */}
                  <div className={s.serviceInfo}>
                    <h3 className={s.serviceName}>{service.service}</h3>
                    <p className={s.servicePrice}>{service.price}</p>
                  </div>
                </div>
                <div className={s.serviceDescription}>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className={s.button} onClick={() => scrollToSection('linksModal')}>Jetzt buchen</button>
        </>
    </div>
  );
}

export default PricesMani;
