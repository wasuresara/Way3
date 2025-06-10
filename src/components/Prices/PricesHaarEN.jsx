import React, { useState } from "react";
import s from "./Prices.module.css";

function PricesHaarEN() {
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
          <h2 className={s.sectionTitle}>Hairdressing Services</h2>
          <p className={s.sectionOverview}>
            Our masters are professionals with many years of experience who will
            help you find a haircut that emphasizes your individuality and
            beauty.
          </p>
          <button onClick={openModal} className={s.button}>
            Price Overview
          </button>
        </>
      )}
      {isModalOpen && (
        <div>
          <h2 className={s.sectionTitle}>Hairdressing Services</h2>
          <p className={s.sectionOverview}>
            Our masters are professionals with many years of experience who will
            help you find a haircut that emphasizes your individuality and
            beauty.
          </p>
          <button onClick={closeModal} className={s.button}>
            Close
          </button>
          <div className={s.tableContainer}>
            <label>Price</label>
            <table>
              {/* Wash - Blow Dry */}
              <tr>
                <td className={s.Service}>Wash - Blow Dry</td>
                <td className={s.ServiceType}>short</td>
                <td className={s.ServiceType}>medium</td>
                <td className={s.ServiceType}>long</td>
                <td className={s.ServiceType}>extra-long</td>
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
              {/* Haircut */}
              <tr>
                <td className={s.Service}>Haircut</td>
                <td className={s.ServiceType}>short</td>
                <td className={s.ServiceType}>medium</td>
                <td className={s.ServiceType}>long</td>
                <td className={s.ServiceType}>extra-long</td>
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
              {/* Glossing + wash + styling */}
              <tr>
                <td className={s.Service}>Glossing + wash + styling</td>
                <td className={s.ServiceType}>short</td>
                <td className={s.ServiceType}>medium</td>
                <td className={s.ServiceType}>long</td>
                <td className={s.ServiceType}>extra-long</td>
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
              {/* Glossing incl. Haircut & styling */}
              <tr>
                <td className={s.Service}>Glossing incl. Haircut & styling</td>
                <td className={s.ServiceType}>short</td>
                <td className={s.ServiceType}>medium</td>
                <td className={s.ServiceType}>long</td>
                <td className={s.ServiceType}>extra-long</td>
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
              {/* Full Color + care + styling */}
              <tr>
                <td className={s.Service}>Full Color + care + styling</td>
                <td className={s.ServiceType}>short</td>
                <td className={s.ServiceType}>medium</td>
                <td className={s.ServiceType}>long</td>
                <td className={s.ServiceType}>extra-long</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServicePrice}>from €110</td>
                <td className={s.ServicePrice}>from €145</td>
                <td className={s.ServicePrice}>from €160</td>
                <td className={s.ServicePrice}>from €180</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServiceTime}>2h</td>
                <td className={s.ServiceTime}>2h 15min</td>
                <td className={s.ServiceTime}>2h 45min</td>
                <td className={s.ServiceTime}>3h</td>
              </tr>
            </table>
            <table>
              {/* Full Color incl. Haircut + care + styling */}
              <tr>
                <td className={s.Service}>
                  Full Color incl. Haircut + care + styling
                </td>
                <td className={s.ServiceType}>short</td>
                <td className={s.ServiceType}>medium</td>
                <td className={s.ServiceType}>long</td>
                <td className={s.ServiceType}>extra-long</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServicePrice}>from €145</td>
                <td className={s.ServicePrice}>from €175</td>
                <td className={s.ServicePrice}>from €180</td>
                <td className={s.ServicePrice}>from €200</td>
              </tr>
              <tr>
                <td className={s.SkipTd}></td>
                <td className={s.ServiceTime}>2h</td>
                <td className={s.ServiceTime}>2h 45min</td>
                <td className={s.ServiceTime}>3h 14min</td>
                <td className={s.ServiceTime}>3h 30min</td>
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
              {/* Root Color + wash + care + styling */}
              <tr>
                <td className={s.xService}>
                  Root Color + wash + care + styling
                </td>
                <td className={s.xServicePrice}>
                  from <br />
                  €110
                </td>
                <td className={s.xServiceTime}>2h</td>
              </tr>
            </table>
            <table>
              {/* Root Color incl. Haircut + care + styling */}
              <tr>
                <td className={s.xService}>
                  Root Color incl. Haircut + care + styling
                </td>
                <td className={s.xServicePrice}>
                  from <br />
                  €145
                </td>
                <td className={s.xServiceTime}>2h 30min</td>
              </tr>
            </table>
            <table>
              {/* Updo with wash */}
              <tr>
                <td className={s.xService}>Updo with wash</td>
                <td className={s.xServicePrice}>
                  from <br />
                  €125
                </td>
                <td className={s.xServiceTime}>1h 15min</td>
              </tr>
            </table>
            <table>
              {/* Updo without wash */}
              <tr>
                <td className={s.xService}>Updo without wash</td>
                <td className={s.xServicePrice}>
                  from <br />
                  €110
                </td>
                <td className={s.xServiceTime}>
                  from <br />
                  1h
                </td>
              </tr>
            </table>
            <table>
              {/* Highlights half head + care + styling */}
              <tr>
                <td className={s.xService}>
                  Highlights half head + care + styling
                </td>
                <td className={s.xServicePrice}>
                  from <br />
                  €150
                </td>
                <td className={s.xServiceTime}>2h 45min</td>
              </tr>
            </table>
            <table>
              {/* Highlights half head incl. Haircut + styling */}
              <tr>
                <td className={s.xService}>
                  Highlights half head incl. Haircut + styling
                </td>
                <td className={s.xServicePrice}>
                  from <br />
                  €185
                </td>
                <td className={s.xServiceTime}>3h</td>
              </tr>
            </table>
            <table>
              {/* Highlights + care + styling */}
              <tr>
                <td className={s.xService}>Highlights + care + styling</td>
                <td className={s.xServicePrice}>
                  from <br />
                  €180
                </td>
                <td className={s.xServiceTime}>3h</td>
              </tr>
            </table>
            <table>
              {/* Highlights incl. Haircut + care + styling */}
              <tr>
                <td className={s.xService}>
                  Highlights incl. Haircut + care + styling
                </td>
                <td className={s.xServicePrice}>
                  from <br />
                  €215
                </td>
                <td className={s.xServiceTime}>3h 30min</td>
              </tr>
            </table>
            <table>
              {/* Bleaching + care + styling */}
              <tr>
                <td className={s.xService}>Bleaching + care + styling</td>
                <td className={s.xServicePrice}>
                  from <br />
                  €145
                </td>
                <td className={s.xServiceTime}>2h 15min</td>
              </tr>
            </table>
            <table>
              {/* Bleaching incl. Haircut + care + styling */}
              <tr>
                <td className={s.xService}>
                  Bleaching incl. Haircut + care + styling
                </td>
                <td className={s.xServicePrice}>
                  from <br />
                  €200
                </td>
                <td className={s.xServiceTime}>3h</td>
              </tr>
            </table>
            <table>
              {/* Balayage + care + styling */}
              <tr>
                <td className={s.xService}>Balayage + care + styling</td>
                <td className={s.xServicePrice}>
                  from <br />
                  €175
                </td>
                <td className={s.xServiceTime}>2h 45min</td>
              </tr>
            </table>
            <table>
              {/* Balayage incl. Haircut + care + styling */}
              <tr>
                <td className={s.xService}>
                  Balayage incl. Haircut + care + styling
                </td>
                <td className={s.xServicePrice}>
                  from <br />
                  €215
                </td>
                <td className={s.xServiceTime}>3h 15min</td>
              </tr>
            </table>
            <table>
              {/* AirTouch + care + styling */}
              <tr>
                <td className={s.xService}>AirTouch + care + styling</td>
                <td className={s.xServicePrice}>
                  from <br />
                  €260
                </td>
                <td className={s.xServiceTime}>3h 45min</td>
              </tr>
            </table>
            <table>
              {/* AirTouch incl. Haircut + care + styling */}
              <tr>
                <td className={s.xService}>
                  AirTouch incl. Haircut + care + styling
                </td>
                <td className={s.xServicePrice}>
                  from <br />
                  €300
                </td>
                <td className={s.xServiceTime}>4h 15min</td>
              </tr>
            </table>
            <label>Extra</label>
            <table>
              {/* Color Mask */}
              <tr>
                <td className={s.xService}>Color Mask</td>
                <td className={s.xServicePrice}>€25</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <table>
              {/* Hair Mask + Head Massage */}
              <tr>
                <td className={s.xService}>Hair Mask + Head Massage</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <label>Barbering</label>
            <table>
              {/* Face Waxing (Ears, Nose, Eyebrows) */}
              <tr>
                <td className={s.xService}>
                  Face Waxing (Ears, Nose, Eyebrows)
                </td>
                <td className={s.xServicePrice}>€15</td>
                <td className={s.xServiceTime}>15min</td>
              </tr>
            </table>
            <table>
              {/* Beard Trim */}
              <tr>
                <td className={s.xService}>Beard Trim</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServiceTime}>20min</td>
              </tr>
            </table>
            <table>
              {/* Beard Waxing */}
              <tr>
                <td className={s.xService}>Beard Waxing</td>
                <td className={s.xServicePrice}>€20</td>
                <td className={s.xServiceTime}>20min</td>
              </tr>
            </table>
            <table>
              {/* Wet Shave */}
              <tr>
                <td className={s.xService}>Wet Shave</td>
                <td className={s.xServicePrice}>€50</td>
                <td className={s.xServiceTime}>40min</td>
              </tr>
            </table>
            <table>
              {/* Haircut and Beard Trim */}
              <tr>
                <td className={s.xService}>Haircut and Beard Trim</td>
                <td className={s.xServicePrice}>€65</td>
                <td className={s.xServiceTime}>1h</td>
              </tr>
            </table>
            <table>
              {/* Haircut (shoulder length) with Beard Trim */}
              <tr>
                <td className={s.xService}>
                  Haircut (shoulder length) with Beard Trim
                </td>
                <td className={s.xServicePrice}>€75</td>
                <td className={s.xServiceTime}>1h 15min</td>
              </tr>
            </table>
            <table>
              {/* Haircut with Beard Trim and Face Waxing */}
              <tr>
                <td className={s.xService}>
                  Haircut with Beard Trim and Face Waxing
                </td>
                <td className={s.xServicePrice}>€75</td>
                <td className={s.xServiceTime}>1h 10min</td>
              </tr>
            </table>
            <table>
              {/* Haircut (shoulder length) with Beard Trim and Face Waxing */}
              <tr>
                <td className={s.xService}>
                  Haircut (shoulder length) with Beard Trim and Face Waxing
                </td>
                <td className={s.xServicePrice}>€85</td>
                <td className={s.xServiceTime}>1h 20min</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricesHaarEN;
