import s from "./About.module.css";
import Gif from "../About/IMG_3774.jpg";

function About({ language = "de" }) {
  const getText1 = () => {
    switch (language) {
      case "en":
        return "Hair Salon | Nail Studio | Clothing | Berlin";
      case "fr":
        return "Salon de coiffure | Studio d'ongles | Vêtements | Berlin";
      case "es":
        return "Salón de peluquería | Estudio de uñas | Ropa | Berlín";
      default:
        return "Friseursalon | Nagelstudio | Bekleidung | Berlin";
    }
  };

  const getParagraph = () => {
    switch (language) {
      case "en":
        return "Each of us walks our own unique path – our personal Way. We, the team at theWAY salon, have decided not only to walk this path for ourselves, but also to give others a piece of happiness on their life's journey.";
      case "fr":
        return "Chacun d'entre nous suit son propre chemin unique — son Way personnel. Nous, l'équipe du salon theWAY, avons décidé de ne pas seulement emprunter ce chemin pour nous-mêmes, mais aussi d'offrir aux autres un morceau de bonheur sur leur parcours de vie.";
      case "es":
        return "Cada uno de nosotros sigue su propio camino único — su Way personal. Nosotros, el equipo del salón theWAY, hemos decidido no solo recorrer este camino para nosotros mismos, sino también regalar a otros un pedazo de felicidad en su camino de vida.";
      default:
        return "Jeder von uns geht seinen ganz eigenen Weg – seinen persönlichen Way. Wir, das Team des Salons theWAY, haben uns dazu entschlossen, diesen Weg nicht nur für uns zu gehen, sondern auch für andere ein Stück Glück auf ihrem Lebensweg zu schenken.";
    }
  };

  const getHours = () => {
    switch (language) {
      case "en":
        return "Mon-Sat 10:00-19:00";
      case "fr":
        return "Lun-Sam 10h00-19h00";
      case "es":
        return "Lun-Sáb 10:00-19:00";
      default:
        return "Mo-Sa 10:00-19:00 Uhr";
    }
  };

  return (
    <div id="home" className={s.container}>
      <svg
        className={s.logo}
        width="602"
        height="274"
        viewBox="0 0 602 274"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M117.415 89.5C117.165 89 106.665 58.75 98.415 52.25C94.665 49.25 91.665 47.75 85.915 47.75V44H136.415V47.75C131.415 47.75 127.665 48 124.915 51.75C119.415 59 130.415 89.5 130.415 89.5L159.665 173.5L163.165 183C164.915 188.25 167.165 191 169.165 191C171.415 191 173.415 188.25 175.165 183L196.165 123.25L184.415 89.5C184.165 89 173.665 58.75 165.165 52.25C161.415 49.25 158.665 47.75 152.915 47.75V44H243.415V47.75C237.665 47.75 234.915 49.25 231.165 52.25C222.915 58.75 212.165 88.75 211.915 89.5L204.665 110.5L229.915 183C231.665 188.25 233.915 191 235.915 191C238.165 191 240.165 188.25 242.165 183L274.915 89.5C275.165 89.25 285.415 59.75 281.665 52.5C279.165 48.25 275.165 47.75 270.165 47.75V44H310.415V47.75C304.665 47.75 301.915 49.25 297.915 52.25C289.665 58.75 278.915 89.5 278.915 89.5L233.415 219H229.915L198.165 128.75L166.665 219H162.915L117.415 89.5ZM197.165 89.5L202.665 105L208.165 89.5C208.165 89.5 218.415 59.75 214.665 52.5C212.415 48.25 208.165 47.75 203.415 47.75C198.415 47.75 194.665 48 191.665 51.75C186.415 59 197.165 89.5 197.165 89.5ZM341.722 219H301.472V215.25C307.222 215.25 310.222 213.75 313.972 210.75C322.222 204.25 332.972 173.75 332.972 173.5L372.472 60.75C368.222 53 363.222 47.75 353.722 47.75V44H382.222L427.472 173.5C427.472 173.5 438.222 204.25 446.722 210.75C450.472 213.75 453.222 215.25 458.972 215.25V219H408.722V215.25C413.472 215.25 417.222 215 420.222 211.25C421.472 209.25 421.722 206 421.472 202C420.472 186.75 396.722 177 379.472 166.5C367.722 159.5 364.972 156 357.972 149C356.472 147.5 355.222 147 353.722 147C346.722 147 340.472 163.5 336.722 173.75C335.722 177.25 326.722 203.75 330.472 210.5C332.722 214.75 336.722 215.25 341.722 215.25V219ZM385.222 89.5C385.222 89.5 380.472 76.25 374.972 65L356.722 117C348.222 141 367.722 155.5 377.222 161.25C385.972 166.5 396.722 172.5 403.472 172.5C409.722 172.5 412.472 167.5 407.222 152L385.222 89.5ZM489.651 89.5C469.151 53.5 458.151 47.75 449.151 47.75V44H499.651V47.75C495.401 47.75 491.901 48 490.401 52.25C487.151 60.75 497.651 79.25 502.401 87.25L522.401 122.25C523.401 124 524.651 124.75 525.651 124.75C526.651 124.75 527.901 124 528.651 122.25L547.401 89.5C552.651 80.75 564.651 59.5 562.151 52.5C560.401 47.75 556.401 47.75 552.151 47.75V44H592.151V47.75C575.651 47.75 565.151 66 551.901 89.25L526.651 133C526.651 194.75 526.901 204.5 532.651 210.5C536.151 214 539.901 215.25 544.651 215.25V219H496.651V215.25C501.651 215.25 505.401 214 508.651 210.5C514.401 204.5 514.651 194.75 514.651 133L489.651 89.5Z" />
      </svg>

      <h2 className={s.subtitle}>what about you</h2>
      <p className={s.text1}>{getText1()}</p>
      <p className={s.text}>{getParagraph()}</p>
      <img src={Gif} alt="Gif" className={s.WelcomeGif} />
      <p className={s.text2}>{getHours()}</p>
    </div>
  );
}

export default About;
