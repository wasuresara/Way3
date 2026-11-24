import { Fragment, useEffect, useState } from "react";
import s from "./Prices.module.css";
import {
  hairServices,
  nailServices,
  bundleServices,
  browServices,
} from "./pricesData";
import HaarGif from "./PricesImages/IMG_0439.jpg";
import ManiGif from "./PricesImages/mani.jpeg";
import { pick, t } from "../../i18n";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const sections = [
  {
    key: "hair",
    services: hairServices,
    image: HaarGif,
    imageClass: s.PricesGif,
  },
  {
    key: "nail",
    services: nailServices,
    image: ManiGif,
    imageClass: s.PricesGifMani,
  },
  {
    key: "brow",
    services: browServices,
    image: ManiGif,
    imageClass: s.PricesGifMani,
  },
  {
    key: "bundle",
    services: bundleServices,
    image: ManiGif,
    imageClass: s.PricesGifMani,
  },
];

const allKeys = sections.flatMap((section) =>
  section.services.map((service) => `${section.key}-${service.id}`),
);

function Prices({ language = "de", scrollToSection }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [expandedItems, setExpandedItems] = useState(() => new Set());

  useEffect(() => {
    setExpandedItems(new Set(isDesktop ? allKeys : []));
  }, [isDesktop]);

  const toggleDescription = (serviceKey) => {
    if (isDesktop) return;
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(serviceKey)) next.delete(serviceKey);
      else next.add(serviceKey);
      return next;
    });
  };

  const titles = {
    hair: t(language, {
      de: "Friseurdienstleistungen | Haarschnitt & Balayage",
      en: "Hair Services | Haircut & Balayage",
      fr: "Services capillaires | Coupe & Balayage",
      es: "Servicios de cabello | Corte & Balayage",
    }),
    nail: t(language, {
      de: "Nagelstudio Services | Maniküre & Nail Art",
      en: "Nail Services | Manicure & Nail Art",
      fr: "Services d'ongles | Manucure & Nail Art",
      es: "Servicios de uñas | Manicura & Nail Art",
    }),
    brow: t(language, {
      de: "Augenbrauen Services",
      en: "Brow Services",
      fr: "Services de sourcils",
      es: "Servicios de cejas",
    }),
    bundle: t(language, {
      de: "Bundle Services",
      en: "Bundle Services",
      fr: "Services combinés",
      es: "Servicios combinados",
    }),
  };

  return (
    <div id="prices" className={s.container}>
      {sections.map((section, index) => (
        <Fragment key={section.key}>
          <div className={s.serviceSection}>
            <h2 className={s.sectionTitle}>{titles[section.key]}</h2>
            <img
              src={section.image}
              alt={`${titles[section.key]} Gif`}
              className={section.imageClass}
              loading="lazy"
              decoding="async"
            />
            <div className={s.priceList}>
              {section.services.map((service) => {
                const serviceKey = `${section.key}-${service.id}`;
                return (
                  <div
                    key={serviceKey}
                    className={`${s.priceItem} ${expandedItems.has(serviceKey) ? s.expanded : ""}`}
                    onClick={() => toggleDescription(serviceKey)}
                  >
                    <div className={s.priceItemContent}>
                      <div className={s.serviceInfo}>
                        <h3 className={s.serviceName}>
                          {pick(service, "service", language)}
                        </h3>
                        <p className={s.servicePrice}>
                          {pick(service, "price", language)}
                        </p>
                      </div>
                    </div>
                    <div className={s.serviceDescription}>
                      <p>{pick(service, "description", language)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {index < sections.length - 1 && (
            <section className="SpaceSection"></section>
          )}
        </Fragment>
      ))}
      <button
        type="button"
        className={s.button}
        onClick={() => scrollToSection("linksModal")}
      >
        {t(language, {
          de: "Anfrage stellen",
          en: "Make Inquiry",
          fr: "Faire une demande",
          es: "Hacer consulta",
        })}
      </button>
    </div>
  );
}

export default Prices;
