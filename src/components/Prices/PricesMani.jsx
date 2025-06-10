import React, { useState } from "react";
import s from "./Prices.module.css";

function PricesMani() {
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
          <h2 className={s.sectionTitle}>Nageldienst</h2>
          <p className={s.sectionOverview}>
            Professionelle Maniküre und Pediküre, damit Ihre Nägel gesund und
            schön bleiben.
          </p>
          <button onClick={openModal} className={s.button}>
            Preisübersicht
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Nageldienst</h2>
          <p className={s.sectionOverview}>
            Professionelle Maniküre und Pediküre, damit Ihre Nägel gesund und
            schön bleiben.
          </p>
          <button onClick={closeModal} className={s.button}>
            Schließen
          </button>
          <div className={s.TableContainer}>
            <label>Manikur</label>
            <table>
              <tr>
                <td className={s.xService}>Hygienische Maniküre</td>
                <td className={s.xServicePrice}>€40</td>
                <td className={s.xServeiceTime}>40min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>
                  Entfernung und hygienische Maniküre
                </td>
                <td className={s.xServicePrice}>€45</td>
                <td className={s.xServeiceTime}>60min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Maniküre mit Gel-Lack</td>
                <td className={s.xServicePrice}>€60</td>
                <td className={s.xServeiceTime}>90-120min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Entfernung ohne Nachbeschichtung</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServeiceTime}>15min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>
                  Entfernung von verlängerten Nägeln
                </td>
                <td className={s.xServicePrice}>€30</td>
                <td className={s.xServeiceTime}>25min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Gel-Nagelverstärkung</td>
                <td className={s.xServicePrice}>€10</td>
                <td className={s.xServeiceTime}>15min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Reparatur (1 Nagel)</td>
                <td className={s.xServicePrice}>€2-3</td>
                <td className={s.xServeiceTime}>5-10min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Verlängerung (1 Nagel)</td>
                <td className={s.xServicePrice}>€3-4</td>
                <td className={s.xServeiceTime}>5-10min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Abtragen</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServeiceTime}>30min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Gel-X/Farben auffüllen mit Farbe</td>
                <td className={s.xServicePrice}>€70</td>
                <td className={s.xServeiceTime}>1std 45min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Gel-X/Farben neues Set</td>
                <td className={s.xServicePrice}>€75</td>
                <td className={s.xServeiceTime}>1std 30min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>
                  Verlängerung/Farben auffüllen mit Farbe
                </td>
                <td className={s.xServicePrice}>€55</td>
                <td className={s.xServeiceTime}>1std 20min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Verlängerung/Farben neues Set</td>
                <td className={s.xServicePrice}>€65</td>
                <td className={s.xServeiceTime}>2std</td>
              </tr>
            </table>
            <label>Design</label>
            <table>
              <tr>
                <td className={s.xService}>French / Reiben</td>
                <td className={s.xServicePrice}>€10</td>
                <td className={s.xServeiceTime}>15min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>
                  Handmalerei, dreidimensionales Design
                </td>
                <td className={s.xServicePrice}>€20- 30</td>
                <td className={s.xServeiceTime}>30- 60min</td>
              </tr>
            </table>
            <label>Pedikur</label>
            <table>
              <tr>
                <td className={s.xService}>Hygienische Pediküre</td>
                <td className={s.xServicePrice}>€60</td>
                <td className={s.xServeiceTime}>60min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Pediküre mit Gel-Lack</td>
                <td className={s.xServicePrice}>€70</td>
                <td className={s.xServeiceTime}>90min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>
                  Pediküre ohne Fußbehandlung mit Gelpolitur
                </td>
                <td className={s.xServicePrice}>€60</td>
                <td className={s.xServeiceTime}>70min</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricesMani;
