import React, { useState } from "react";
import s from "./LinksModal.module.css"; // Імпортуємо CSS
import { toast } from "react-hot-toast";
function LinksModal() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

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
      console.log("Success", res);
      toast.success("Success!", {
        icon: "👏",
        style: {
          borderRadius: "14px",
          background: "black",
          color: "lightseagreen",
        },
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
                  <label className={s.label1}>Phone number</label>
                  <input type="phone" name="message" required />
                </div>
                <button className={s.buttonMain} type="submit">
                  Send now!
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default LinksModal;
