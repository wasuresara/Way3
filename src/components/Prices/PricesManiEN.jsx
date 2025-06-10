import React, { useState } from "react";
import s from "./Prices.module.css";

function PricesManiEN() {
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
          <h2 className={s.sectionTitle}>Nail Services</h2>
          <p className={s.sectionOverview}>
            Professional manicure and pedicure to keep your nails healthy and
            beautiful.
          </p>
          <button onClick={openModal} className={s.button}>
            Price Overview
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Nail Services</h2>
          <p className={s.sectionOverview}>
            Professional manicure and pedicure to keep your nails healthy and
            beautiful.
          </p>
          <button onClick={closeModal} className={s.button}>
            Close
          </button>
          <div className={s.TableContainer}>
            <label>Manicure</label>
            <table>
              <tr>
                <td className={s.xService}>Hygienic Manicure</td>
                <td className={s.xServicePrice}>€40</td>
                <td className={s.xServiceTime}>40min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Removal and Hygienic Manicure</td>
                <td className={s.xServicePrice}>€45</td>
                <td className={s.xServiceTime}>60min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Manicure with Gel Polish</td>
                <td className={s.xServicePrice}>€60</td>
                <td className={s.xServiceTime}>90-120min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Removal without New Coating</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Removal of Extended Nails</td>
                <td className={s.xServicePrice}>€30</td>
                <td className={s.xServiceTime}>25min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Gel Nail Strengthening</td>
                <td className={s.xServicePrice}>€10</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Repair (1 Nail)</td>
                <td className={s.xServicePrice}>€2-3</td>
                <td className={s.xServiceTime}>5-10min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Extension (1 Nail)</td>
                <td className={s.xServicePrice}>€3-4</td>
                <td className={s.xServiceTime}>5-10min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Filing Down</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServiceTime}>30min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Gel-X/Color Refill with Color</td>
                <td className={s.xServicePrice}>€70</td>
                <td className={s.xServiceTime}>1h 45min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Gel-X/Color New Set</td>
                <td className={s.xServicePrice}>€75</td>
                <td className={s.xServiceTime}>1h 30min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>
                  Extension/Color Refill with Color
                </td>
                <td className={s.xServicePrice}>€55</td>
                <td className={s.xServiceTime}>1h 20min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Extension/Color New Set</td>
                <td className={s.xServicePrice}>€65</td>
                <td className={s.xServiceTime}>2h</td>
              </tr>
            </table>
            <label>Design</label>
            <table>
              <tr>
                <td className={s.xService}>French / Rubbing</td>
                <td className={s.xServicePrice}>€10</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Hand Painting, 3D Design</td>
                <td className={s.xServicePrice}>€20-30</td>
                <td className={s.xServiceTime}>30-60min</td>
              </tr>
            </table>
            <label>Pedicure</label>
            <table>
              <tr>
                <td className={s.xService}>Hygienic Pedicure</td>
                <td className={s.xServicePrice}>€60</td>
                <td className={s.xServiceTime}>60min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>Pedicure with Gel Polish</td>
                <td className={s.xServicePrice}>€70</td>
                <td className={s.xServiceTime}>90min</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className={s.xService}>
                  Pedicure without Foot Treatment with Gel Polish
                </td>
                <td className={s.xServicePrice}>€60</td>
                <td className={s.xServiceTime}>70min</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricesManiEN;
