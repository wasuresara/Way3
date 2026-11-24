import { Fragment, useEffect, useState } from "react";
import s from "./Prices.module.css";
import { priceSections } from "./pricesData";
import { pick, t } from "../../i18n";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const sections = priceSections.map((section) => ({
  key: section.key,
  services: section.services,
  title: section.title,
}));

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

  return (
    <div id="prices" className={s.container}>
      {sections.map((section, index) => {
        const title = t(language, section.title);
        return (
          <Fragment key={section.key}>
            <div className={s.serviceSection}>
              <h2 className={s.sectionTitle}>{title}</h2>
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
        );
      })}
      <button
        type="button"
        className={s.button}
        onClick={() => scrollToSection("linksModal")}
      >
        {t(language, {
          de: "Anfrage stellen",
          en: "Make Inquiry",
          uk: "Залишити запит",
          ru: "Оставить заявку",
          pl: "Zostaw zapytanie",
        })}
      </button>
    </div>
  );
}

export default Prices;
