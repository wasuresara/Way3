import React, { useRef } from "react";
import s from "./LinksModal.module.css"; // Імпортуємо CSS
import { toast } from "react-hot-toast";
import { hairServices, nailServices } from "../Prices/pricesData";

function LinksModal() {
  const allServices = [
    ...hairServices.map((s) => ({ id: `hair-${s.id}`, label: s.service })),
    ...nailServices.map((s) => ({ id: `nail-${s.id}`, label: s.service })),
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.message.value.trim();
    if (!name) {
      toast.error("Bitte geben Sie Ihren Namen ein.");
      return;
    }
    if (!email && !phone) {
      toast.error("Bitte geben Sie entweder eine E-Mail oder eine Telefonnummer ein.");
      return;
    }
    const formData = new FormData(form);
    formData.append("access_key", "7467df4d-1736-4541-850b-004e9fb97eae");
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
      // Haptic feedback if supported
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(100);
      }
      // Detect theme
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      toast.success(
        <span style={{ fontSize: '1em', display: 'flex', alignItems: 'center' }}>
          <span role="img" aria-label="check" style={{ fontSize: '1.2em', marginRight: 6, color: '#00c853' }}>✔️</span>
          <span>Erfolgreich gesendet!</span>
        </span>,
        {
          icon: false,
          style: {
            borderRadius: "12px",
            background: isDark ? "#2a2a2a" : "#fff",
            color: isDark ? "#fff" : "#d32f2f",
            fontWeight: "bold",
            fontSize: "0.98em",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            padding: "10px 16px",
            color: "#00c853"
          },
          duration: 3500
        }
      );
      form.reset();
    } else {
      toast.error("Fehler beim Senden.", {
        style: {
          borderRadius: "12px",
          background: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "#2a2a2a" : "#fff",
          color: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "#fff" : "#d32f2f",
          fontWeight: "bold",
          fontSize: "0.98em",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          border: "1.5px solid #d32f2f",
          padding: "10px 16px"
        },
        duration: 3500
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
                <label className={s.label1}>Name</label>
                <input type="text" name="name" required />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>Email</label>
                <input type="email" name="email" />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>Telefonnummer</label>
                <input type="phone" name="message" />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>Bevorzugtes Datum</label>
                <input type="date" name="preferred_date" className={s.input} />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>Service auswählen</label>
                <select name="service" className={s.input + ' ' + s['input-select']}>
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
