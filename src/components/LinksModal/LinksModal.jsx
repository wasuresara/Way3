import { useState } from "react";
import s from "./LinksModal.module.css";
import { toast } from "react-hot-toast";
import { hairServices, nailServices } from "../Prices/pricesData";
import { pick, t } from "../../i18n";

const WEB3FORMS_KEY = "41ed0238-761d-448a-bc1f-219407011160";

const copy = {
  de: {
    name: "Name",
    email: "Email",
    phone: "Telefonnummer",
    date: "Bevorzugtes Datum",
    service: "Service auswählen",
    select: "Bitte wählen...",
    submit: "Jetzt Senden!",
    nameError: "Bitte geben Sie Ihren Namen ein.",
    contactError:
      "Bitte geben Sie entweder eine E-Mail oder eine Telefonnummer ein.",
    sendError: "Fehler beim Senden.",
  },
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone number",
    date: "Preferred date",
    service: "Choose service",
    select: "Please select...",
    submit: "Send now!",
    nameError: "Please enter your name.",
    contactError: "Please enter either an email or a phone number.",
    sendError: "Failed to send.",
  },
  fr: {
    name: "Nom",
    email: "Email",
    phone: "Numéro de téléphone",
    date: "Date préférée",
    service: "Choisir un service",
    select: "Veuillez sélectionner...",
    submit: "Envoyer maintenant !",
    nameError: "Veuillez entrer votre nom.",
    contactError: "Veuillez entrer soit un email soit un numéro de téléphone.",
    sendError: "Échec de l'envoi.",
  },
  es: {
    name: "Nombre",
    email: "Email",
    phone: "Número de teléfono",
    date: "Fecha preferida",
    service: "Elegir servicio",
    select: "Por favor seleccione...",
    submit: "¡Enviar ahora!",
    nameError: "Por favor ingrese su nombre.",
    contactError: "Por favor ingrese un email o un número de teléfono.",
    sendError: "Error al enviar.",
  },
};

function errorToast(message) {
  const dark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  toast.error(message, {
    style: {
      borderRadius: "12px",
      background: dark ? "#2a2a2a" : "#fff",
      color: dark ? "#fff" : "#d32f2f",
      fontWeight: "bold",
      fontSize: "0.98em",
      boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
      border: "1.5px solid #d32f2f",
      padding: "10px 16px",
    },
    duration: 3500,
  });
}

function LinksModal({ language = "de" }) {
  const [sending, setSending] = useState(false);
  const text = t(language, copy);
  const services = [...hairServices, ...nailServices].map((service, index) => ({
    id: `${index < hairServices.length ? "hair" : "nail"}-${service.id}`,
    label: pick(service, "service", language),
  }));

  const onSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    if (!name) {
      errorToast(text.nameError);
      return;
    }
    if (!email && !phone) {
      errorToast(text.contactError);
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json();
      if (data.success) {
        navigator.vibrate?.(100);
        window.location.assign("/thankyou");
        return;
      }
      errorToast(text.sendError);
    } catch {
      errorToast(text.sendError);
    }
    setSending(false);
  };

  return (
    <div id="linksModal">
      <div className={s.modalOverlayy}>
        <div className="modal">
          <form onSubmit={onSubmit}>
            <div className={s.formm}>
              <div className={s.Forms}>
                <label className={s.label1}>{text.name}</label>
                <input type="text" name="name" required />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>{text.email}</label>
                <input type="email" name="email" />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>{text.phone}</label>
                <input type="tel" name="phone" />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>{text.date}</label>
                <input type="date" name="preferred_date" className={s.input} />
              </div>
              <div className={s.Forms}>
                <label className={s.label1}>{text.service}</label>
                <select
                  name="service"
                  className={`${s.input} ${s["input-select"]}`}
                >
                  <option value="">{text.select}</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.label}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              <button className={s.buttonMain} type="submit" disabled={sending}>
                {text.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LinksModal;
