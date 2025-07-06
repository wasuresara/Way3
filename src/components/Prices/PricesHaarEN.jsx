import React, { useState } from "react";
import s from "./Prices.module.css";
import { hairServices } from "./pricesData";

function PricesHaarEN({ scrollToSection }) {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleDescription = (serviceId) => {
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
        <h2 className={s.sectionTitle}>Hair Services</h2>
        
        <div className={s.priceList}>
          {hairServices.map((service) => (
            <div 
              key={service.id} 
              className={`${s.priceItem} ${expandedItems.has(service.id) ? s.expanded : ''}`}
              onClick={() => toggleDescription(service.id)}
            >
              <div className={s.priceItemContent}>
                <div className={s.serviceImage}>
                  <img src={service.picture} alt={service.serviceEN} />
                </div>
                <div className={s.serviceInfo}>
                  <h3 className={s.serviceName}>{service.serviceEN}</h3>
                  <p className={s.servicePrice}>{service.priceEN}</p>
                </div>
              </div>
              <div className={s.serviceDescription}>
                <p>{service.descriptionEN}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className={s.button} onClick={() => scrollToSection('linksModal')}>Book Now</button>
      </>
    </div>
  );
}

export default PricesHaarEN;
