import React, { useState, useEffect } from "react";
import s from "./Prices.module.css";
import { hairServices, nailServices, bundleServices, browServices } from "./pricesData";
import HaarGif from "../Prices/PricesImages/IMG_0439.jpg";
import ManiGif from "../Prices/PricesImages/mani.jpeg";
// import BundleGif from "../Prices/PricesImages/IMG_0440.jpg";

function Prices({ language = "de", scrollToSection }) {
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
      const allServiceIds = [
        ...hairServices.map(s => s.id), 
        ...nailServices.map(s => s.id),
        ...bundleServices.map(s => s.id),
        ...browServices.map(s => s.id)
      ];
      setExpandedItems(new Set(allServiceIds));
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

  // Language-specific content
  const getHairTitle = () => {
    switch (language) {
      case "en": return "Hair Services";
      case "fr": return "Services capillaires";
      case "es": return "Servicios de cabello";
      default: return "Friseurdienstleistungen";
    }
  };

  const getNailTitle = () => {
    switch (language) {
      case "en": return "Nail Services";
      case "fr": return "Services d'ongles";
      case "es": return "Servicios de uñas";
      default: return "Nageldienst";
    }
  };
  
  const getBundleTitle = () => {
    switch (language) {
      case "en": return "Bundle Services";
      case "fr": return "Services combinés";
      case "es": return "Servicios combinados";
      default: return "Bundle Services";
    }
  };
  
  const getBrowsTitle = () => {
    switch (language) {
      case "en": return "Brow Services";
      case "fr": return "Services de sourcils";
      case "es": return "Servicios de cejas";
      default: return "Augenbrauen Services";
    }
  };

  const getButtonText = () => {
    switch (language) {
      case "en": return "Make Inquiry";
      case "fr": return "Faire une demande";
      case "es": return "Hacer consulta";
      default: return "Anfrage stellen";
    }
  };

  const getServiceName = (service) => {
    switch (language) {
      case "en": return service.serviceEN;
      case "fr": return service.serviceFR;
      case "es": return service.serviceES;
      default: return service.service;
    }
  };

  const getServicePrice = (service) => {
    switch (language) {
      case "en": return service.priceEN;
      case "fr": return service.priceFR;
      case "es": return service.priceES;
      default: return service.price;
    }
  };

  const getServiceDescription = (service) => {
    switch (language) {
      case "en": return service.descriptionEN;
      case "fr": return service.descriptionFR;
      case "es": return service.descriptionES;
      default: return service.description;
    }
  };

  const renderServiceList = (services, title) => (
    <div className={s.serviceSection}>
      <h2 className={s.sectionTitle}>{title}</h2>
      <img 
        src={services === hairServices ? HaarGif : ManiGif} 
        alt={`${title} Gif`} 
        className={services === hairServices ? s.PricesGif : s.PricesGifMani + " " + s.PricesGifBundle}
      />
      <div className={s.priceList}>
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`${s.priceItem} ${expandedItems.has(service.id) ? s.expanded : ''}`}
            onClick={() => toggleDescription(service.id)}
          >
            <div className={s.priceItemContent}>
              <div className={s.serviceInfo}>
                <h3 className={s.serviceName}>{getServiceName(service)}</h3>
                <p className={s.servicePrice}>{getServicePrice(service)}</p>
              </div>
            </div>
            <div className={s.serviceDescription}>
              <p>{getServiceDescription(service)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id="prices" className={s.container}>
      {renderServiceList(hairServices, getHairTitle())}
      <section className="SpaceSection"></section>
      {renderServiceList(nailServices, getNailTitle())}
      <section className="SpaceSection"></section>
      {renderServiceList(browServices, getBrowsTitle())}
      <section className="SpaceSection"></section>
      {renderServiceList(bundleServices, getBundleTitle())}
      <button className={s.button} onClick={() => scrollToSection('linksModal')}>
        {getButtonText()}
      </button>
    </div>
  );
}

export default Prices;
