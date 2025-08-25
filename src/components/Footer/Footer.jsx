import s from "./Footer.module.css";
const Footer = () => {
  return (
    <div>
      <p className={s.text}>DEv1.01 <br />
        <br />
      TheWAY GmbH <br />
      Seelower Str. 2,<br />
      10439 Berlin <br />
      Telefon: 030 123456 <br />
      E-Mail: info@theway.berlin <br />
<br />
      Geschäftsführer: Max Mustermann <br />
      Handelsregister: HRB 12345, Amtsgericht Berlin <br />
      Umsatzsteuer-ID: DE454849959 <br />

      </p>
    </div>
  );
};

export default Footer;
