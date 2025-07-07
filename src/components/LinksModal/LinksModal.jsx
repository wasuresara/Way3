import React, { useState } from "react";
import s from "./LinksModal.module.css"; // Імпортуємо CSS
import { toast } from "react-hot-toast";
import { hairServices, nailServices } from "../Prices/pricesData";
import emailjs from "emailjs-com";

function LinksModal() {
  const allServices = [
    ...hairServices.map((s) => ({ id: `hair-${s.id}`, label: s.service })),
    ...nailServices.map((s) => ({ id: `nail-${s.id}`, label: s.service })),
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(
      "Oz6AF4Chw4O4Y2wzX", // Service ID
      "template_xxx",      // TODO: Replace with your actual Template ID
      event.target,
      "ncnYa4-ofs9wM8i6Hnd5W" // Public Key
    ).then(
      (result) => {
        toast.success("Erfolgreich gesendet!", {
          icon: "👏",
          style: {
            borderRadius: "14px",
            background: "black",
            color: "lightseagreen",
          },
        });
      },
      (error) => {
        toast.error("Fehler beim Senden.");
      }
    );
  };

  return (
    <div id="linksModal">
        <div className={s.modalOverlayy}>
          <div className="modal">
            <form onSubmit={onSubmit}>
              <div className={s.formm}>
                <div className={s.Forms}>
                  <label className={s.label1}>Name</label>
                  <input type="text" name="name" required />
                </div>
                <div className={s.Forms}>
                  <label className={s.label1}>Email</label>
                  <input type="email" name="email" />
                </div>
                <div className={s.Forms}>
                  <label className={s.label1}>Telefonnummer</label>
                  <input type="phone" name="message" required />
                </div>
                <div className={s.Forms}>
                  <label className={s.label1}>Bevorzugtes Datum</label>
                  <input type="date" name="preferred_date" required className={s.input} />
                </div>
                <div className={s.Forms}>
                  <label className={s.label1}>Service auswählen</label>
                  <select name="service" required className={s.input + ' ' + s['input-select']}>
                    <option value="">Bitte wählen...</option>
                    {allServices.map((service) => (
                      <option key={service.id} value={service.label}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button className={s.buttonMain} type="submit">
                  Jetzt Senden!
                </button>
              </div>
            </form>
          </div>
        </div>
      
    </div>
  );
}

export default LinksModal;
