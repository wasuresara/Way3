import React, { useState } from "react";
import s from "./Prices.module.css"; // Імпортуємо стилі як модулі

function PricesHaar() {
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
          <h2 className={s.sectionTitle}>Friseurdienstleistungen</h2>
          <p className={s.sectionOverview}>
            Unsere Meister sind Profis mit langjähriger Erfahrung, die Ihnen
            helfen werden, einen Haarschnitt zu finden, der Ihre Individualität
            und Schönheit unterstreicht.
          </p>
          <button onClick={openModal} className={s.button}>
            Preisübersicht
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Friseurdienstleistungen</h2>
          <p className={s.sectionOverview}>
            Unsere Meister sind Profis mit langjähriger Erfahrung, die Ihnen
            helfen werden, einen Haarschnitt zu finden, der Ihre Individualität
            und Schönheit unterstreicht.
          </p>
          <button onClick={closeModal} className={s.button}>
            Schließen
          </button>
          <div className={s.tableContainer}>
            <label>Pries</label>
            <table>
              {/* Waschen - Föhnen */}
              <tr>
                <td className={s.Service}>Waschen - Föhnen</td>
                <td className={s.ServiceType}>kurz</td>
                <td className={s.ServiceType}>mittel</td>
                <td className={s.ServiceType}>lang</td>
                <td className={s.ServiceType}>extra-lang</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServicePrice}>€35</td>
                <td className={s.ServicePrice}>€40</td>
                <td className={s.ServicePrice}>€50</td>
                <td className={s.ServicePrice}>€60</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServiceTime}>30min</td>
                <td className={s.ServiceTime}>40min</td>
                <td className={s.ServiceTime}>50min</td>
                <td className={s.ServiceTime}>60min</td>
              </tr>
            </table>
            <table>
              {/* Haarschnitt */}
              <tr>
                <td className={s.Service}>Haarschnitt</td>
                <td className={s.ServiceType}>kurz</td>
                <td className={s.ServiceType}>mittel</td>
                <td className={s.ServiceType}>lang</td>
                <td className={s.ServiceType}>extra-lang</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServicePrice}>€55</td>
                <td className={s.ServicePrice}>€60</td>
                <td className={s.ServicePrice}>€70</td>
                <td className={s.ServicePrice}>€80</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServiceTime}>45min</td>
                <td className={s.ServiceTime}>60min</td>
                <td className={s.ServiceTime}>75min</td>
                <td className={s.ServiceTime}>90min</td>
              </tr>
            </table>
            <table>
              {/* Glossing+washen+styling */}
              <tr>
                <td className={s.Service}>Glossing + washen + styling</td>
                <td className={s.ServiceType}>kurz</td>
                <td className={s.ServiceType}>mittel</td>
                <td className={s.ServiceType}>lang</td>
                <td className={s.ServiceType}>extra-lang</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServicePrice}>€50</td>
                <td className={s.ServicePrice}>€55</td>
                <td className={s.ServicePrice}>€60</td>
                <td className={s.ServicePrice}>€75</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServiceTime}>45min</td>
                <td className={s.ServiceTime}>50min</td>
                <td className={s.ServiceTime}>60min</td>
                <td className={s.ServiceTime}>75min</td>
              </tr>
            </table>
            <table>
              {/* Glossing enxl. Haarschnitt &styling */}
              <tr>
                <td className={s.Service}>
                  Glossing enxl. Haarschnitt & styling
                </td>
                <td className={s.ServiceType}>kurz</td>
                <td className={s.ServiceType}>mittel</td>
                <td className={s.ServiceType}>lang</td>
                <td className={s.ServiceType}>extra-lang</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServicePrice}>€80</td>
                <td className={s.ServicePrice}>€90</td>
                <td className={s.ServicePrice}>€100</td>
                <td className={s.ServicePrice}>€120</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServiceTime}>75min</td>
                <td className={s.ServiceTime}>80min</td>
                <td className={s.ServiceTime}>90min</td>
                <td className={s.ServiceTime}>110min</td>
              </tr>
            </table>
            <table>
              {/* Komplett Farbe+pflege+styling */}
              <tr>
                <td className={s.Service}>Komplett Farbe + pflege + styling</td>
                <td className={s.ServiceType}>kurz</td>
                <td className={s.ServiceType}>mittel</td>
                <td className={s.ServiceType}>lang</td>
                <td className={s.ServiceType}>extra-lang</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServicePrice}>ab €110</td>
                <td className={s.ServicePrice}>ab €145</td>
                <td className={s.ServicePrice}>ab €160</td>
                <td className={s.ServicePrice}>ab €180</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServiceTime}>2std</td>
                <td className={s.ServiceTime}>2std 15min</td>
                <td className={s.ServiceTime}>2std 45min</td>
                <td className={s.ServiceTime}>3std</td>
              </tr>
            </table>
            <table>
              {/* Komplett Farbe inkl.Haarschnitt +pflege+styling */}
              <tr>
                <td className={s.Service}>
                  Komplett Farbe inkl. Haarschnitt + pflege + styling
                </td>
                <td className={s.ServiceType}>kurz</td>
                <td className={s.ServiceType}>mittel</td>
                <td className={s.ServiceType}>lang</td>
                <td className={s.ServiceType}>extra-lang</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServicePrice}>ab €145</td>
                <td className={s.ServicePrice}>ab €175</td>
                <td className={s.ServicePrice}>ab €180</td>
                <td className={s.ServicePrice}>ab €200</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServiceTime}>2std</td>
                <td className={s.ServiceTime}>2std 45min</td>
                <td className={s.ServiceTime}>3std 14min</td>
                <td className={s.ServiceTime}>3std 30min</td>
              </tr>
            </table>
            <table>
              {/* Pony */}
              <tr>
                <td className={s.xService}>Pony</td>
                <td className={s.xServicePrice}>€15</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <table>
              {/* Ansatzfarbe +waschen+pflegen+styling */}
              <tr>
                <td className={s.xService}>
                  Ansatzfarbe + waschen + pflegen + styling
                </td>
                <td className={s.xServicePrice}>ab €110</td>
                <td className={s.xServiceTime}>2std</td>
              </tr>
            </table>
            <table>
              {/* Anzatzfarbe inkl.Haarschnitt +pflege+styling */}
              <tr>
                <td className={s.xService}>
                  Anzatzfarbe inkl. Haarschnitt + pflege+styling
                </td>
                <td className={s.xServicePrice}>ab €145</td>
                <td className={s.xServiceTime}>2std 30min</td>
              </tr>
            </table>
            <table>
              {/* Hochsteckfrisur mit waschen*/}
              <tr>
                <td className={s.xService}>Hochsteckfrisur mit waschen</td>
                <td className={s.xServicePrice}>ab €125</td>
                <td className={s.xServiceTime}>1std 15min</td>
              </tr>
            </table>
            <table>
              {/* Hochsteckfrisur ohne waschen*/}
              <tr>
                <td className={s.xService}>Hochsteckfrisur onhe waschen</td>
                <td className={s.xServicePrice}>ab €110</td>
                <td className={s.xServiceTime}>ab 1std</td>
              </tr>
            </table>
            <table>
              {/* Strähnen halber Kopf*/}
              <tr>
                <td className={s.xService}>
                  Strähnen halber Kopf + pflege + styling
                </td>
                <td className={s.xServicePrice}>ab €150</td>
                <td className={s.xServiceTime}>2std 45min</td>
              </tr>
            </table>
            <table>
              {/* Strähnen halber Kopf inkl. Haarschnitt + styling*/}
              <tr>
                <td className={s.xService}>
                  Strähnen halber Kopf inkl. Haarschnitt + styling
                </td>
                <td className={s.xServicePrice}>ab €185</td>
                <td className={s.xServiceTime}>3std</td>
              </tr>
            </table>
            <table>
              {/* Strähnen + pflege+styling*/}
              <tr>
                <td className={s.xService}>Strähnen + pflege+styling</td>
                <td className={s.xServicePrice}>ab €180</td>
                <td className={s.xServiceTime}>3std</td>
              </tr>
            </table>
            <table>
              {/* Strähnen inkl.Haarschnitt +phlege+styling*/}
              <tr>
                <td className={s.xService}>
                  Strähnen inkl. Haarschnitt + phlege + styling
                </td>
                <td className={s.xServicePrice}>ab €215</td>
                <td className={s.xServiceTime}>3std 30min</td>
              </tr>
            </table>
            <table>
              {/* Blondierung +pflege+styling*/}
              <tr>
                <td className={s.xService}>Blondierung + pflege + styling</td>
                <td className={s.xServicePrice}>ab €145</td>
                <td className={s.xServiceTime}>2std 15min</td>
              </tr>
            </table>
            <table>
              {/* Blondierung inkl.Haarschnitt +pflege+styling*/}
              <tr>
                <td className={s.xService}>
                  Blondierung inkl. Haarschnitt + pflege + styling
                </td>
                <td className={s.xServicePrice}>ab €200</td>
                <td className={s.xServiceTime}>3std</td>
              </tr>
            </table>
            <table>
              {/* Balayage + pflege + styling*/}
              <tr>
                <td className={s.xService}>Balayage + pflege + styling</td>
                <td className={s.xServicePrice}>ab €175</td>
                <td className={s.xServiceTime}>2std 45min</td>
              </tr>
            </table>
            <table>
              {/* Balayage inkl.Haarschnitt +pflege+styling*/}
              <tr>
                <td className={s.xService}>
                  Balayage inkl. Haarschnitt + pflege + styling
                </td>
                <td className={s.xServicePrice}>ab €215</td>
                <td className={s.xServiceTime}>3std 15min</td>
              </tr>
            </table>
            <table>
              {/* AirToch+pflege+styling
               */}
              <tr>
                <td className={s.xService}>AirToch + pflege + styling</td>
                <td className={s.xServicePrice}>ab €260</td>
                <td className={s.xServiceTime}>3std 45min</td>
              </tr>
            </table>
            <table>
              {/* AirToch inkl.Haarschnitt +pflege+styling*/}
              <tr>
                <td className={s.xService}>
                  AirToch inkl. Haarschnitt + pflege + styling
                </td>
                <td className={s.xServicePrice}>ab €300</td>
                <td className={s.xServiceTime}>4std 15min</td>
              </tr>
            </table>
            <label>Extra</label>
            <table>
              {/* Farbmaske*/}
              <tr>
                <td className={s.xService}>Farbmaske</td>
                <td className={s.xServicePrice}>€25</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <table>
              {/* Haarmaske + kopfmassage*/}
              <tr>
                <td className={s.xService}>Haarmaske + kopfmassage</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <label>Barbering</label>
            <table>
              {/* Gesichtswaxing (Ohren, Nase, Augenbrauen)*/}
              <tr>
                <td className={s.xService}>
                  Gesichtswaxing (Ohren, Nase, Augenbrauen)
                </td>
                <td className={s.xServicePrice}>€15</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <table>
              {/* Bart trimmen*/}
              <tr>
                <td className={s.xService}>Bart trimmen</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServiceTime}>20min</td>
              </tr>
            </table>
            <table>
              {/* Bart waxing*/}
              <tr>
                <td className={s.xService}>Bart waxing</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServiceTime}>20min</td>
              </tr>
            </table>
            <table>
              {/* Nassrasur*/}
              <tr>
                <td className={s.xService}>Nassrasur</td>
                <td className={s.xServicePrice}>€50</td>
                <td className={s.xServiceTime}>40min</td>
              </tr>
            </table>
            <table>
              {/* Haarschnitt und Bart Trimmen*/}
              <tr>
                <td className={s.xService}>Haarschnitt und Bart Trimmen</td>
                <td className={s.xServicePrice}>€65</td>
                <td className={s.xServiceTime}>1std</td>
              </tr>
            </table>
            <table>
              {/* Haarschnitt (schulterlang) mit Bart trimmen*/}
              <tr>
                <td className={s.xService}>
                  Haarschnitt (schulterlang) mit Bart trimmen
                </td>
                <td className={s.xServicePrice}>€75</td>
                <td className={s.xServiceTime}>1std 15min</td>
              </tr>
            </table>
            <table>
              {/* Haarschnitt mit Bart trimmen und gesichtwaxing*/}
              <tr>
                <td className={s.xService}>
                  Haarschnitt mit Bart trimmen und gesichtwaxing
                </td>
                <td className={s.xServicePrice}>€75</td>
                <td className={s.xServiceTime}>1std 10min</td>
              </tr>
            </table>
            <table>
              {/* Haarschnitt (schulterlang)mit Bart trimmen und Gesichtwaxing)*/}
              <tr>
                <td className={s.xService}>
                  Haarschnitt (schulterlang)mit Bart trimmen und Gesichtwaxing)
                </td>
                <td className={s.xServicePrice}>€85</td>
                <td className={s.xServiceTime}>1std 20min</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricesHaar;
