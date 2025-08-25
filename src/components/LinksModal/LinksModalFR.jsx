import React from "react";
import s from "./LinksModal.module.css";
import { toast } from "react-hot-toast";
import { hairServices, nailServices } from "../Prices/pricesData";

function LinksModalFR() {
  const allServices = [
    ...hairServices.map((s) => ({ id: `hair-${s.id}`, label: s.serviceFR })),
    ...nailServices.map((s) => ({ id: `nail-${s.id}`, label: s.serviceFR })),
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.message.value.trim();
    if (!name) {
      toast.error("Veuillez entrer votre nom.");
      return;
    }
    if (!email && !phone) {
      toast.error("Veuillez entrer soit un email soit un numéro de téléphone.");
      return;
    }
    const formData = new FormData(form);
    formData.append("access_key", "41ed0238-761d-448a-bc1f-219407011160");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    if (res.success) {
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(100);
      }
      const isDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      toast.success(
        <span
          style={{ fontSize: "1em", display: "flex", alignItems: "center" }}
        >
          <span
            role="img"
            aria-label="check"
            style={{ fontSize: "1.2em", marginRight: 6, color: "#00c853" }}
          >
            ✔️
          </span>
          <span>Envoyé avec succès !</span>
        </span>,
        {
          icon: false,
          style: {
            borderRadius: "12px",
            background: isDark ? "#2a2a2a" : "#fff",
            color: isDark ? "#fff" : "#00c853",
            fontWeight: "bold",
            fontSize: "0.98em",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            padding: "10px 16px",
          },
          duration: 3500,
        },
      );
      form.reset();
    } else {
      toast.error("Échec de l'envoi.", {
        style: {
          borderRadius: "12px",
          background:
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "#2a2a2a"
              : "#fff",
          color:
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "#fff"
              : "#d32f2f",
          fontWeight: "bold",
          fontSize: "0.98em",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          border: "1.5px solid #d32f2f",
          padding: "10px 16px",
        },
        duration: 3500,
      });
    }
  };

  return (
    <div id="linksModal">
      <div className={s.modalOverlayy}>
        <div className="modal">
          <form onSubmit={onSubmit}>
            <div className={s.formm}>
              <div className={s.Forms}>
                <label className={s.label1}>Nom</label>
                <input type="text" name="name" required />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>Email</label>
                <input type="email" name="email" />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>Numéro de téléphone</label>
                <input type="phone" name="message" />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>Date préférée</label>
                <input type="date" name="preferred_date" className={s.input} />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>Choisir un service</label>
                <select
                  name="service"
                  className={s.input + " " + s["input-select"]}
                >
                  <option value="">Veuillez sélectionner...</option>
                  {allServices.map((service) => (
                    <option key={service.id} value={service.label}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              <button className={s.buttonMain} type="submit">
                Envoyer maintenant !
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LinksModalFR;
