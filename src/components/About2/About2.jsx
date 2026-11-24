import s from "./About2.module.css";
import { t } from "../../i18n";

const copy = {
  de: "Für uns ist das mehr als nur ein Job. Es ist eine Herzensangelegenheit, Menschen zu inspirieren, Schönheit zu schenken und einen Ort zu schaffen, an dem jeder in Harmonie und mit sich selbst im Reinen ist. Wir glauben fest daran, dass wahre Zufriedenheit und Glück aus der Pflege des eigenen Inneren gedeiht. Deshalb ist es unser Bestreben, Sie auf Ihrer Reise zu mehr Wohlbefinden und Glück zu begleiten – weil wir wissen, dass dieser Weg der Schlüssel zu einem erfüllteren Leben ist.",
  en: "For us, this is more than just a job. It is a matter of the heart to inspire people, to give beauty and to create a place where everyone is in harmony and at peace with themselves. We firmly believe that true contentment and happiness thrives from nurturing one's inner self. That's why we strive to accompany you on your journey to greater well-being and happiness - because we know that this path is the key to a more fulfilling life.",
  fr: "Pour nous, c'est plus qu'un simple travail. C'est une affaire de cœur d'inspirer les gens, d'offrir la beauté et de créer un lieu où chacun est en harmonie et en paix avec lui-même. Nous croyons fermement que la vraie satisfaction et le bonheur prospèrent en nourrissant son être intérieur. C'est pourquoi nous nous efforçons de vous accompagner dans votre cheminement vers un plus grand bien-être et bonheur — parce que nous savons que ce chemin est la clé d'une vie plus épanouie.",
  es: "Para nosotros, esto es más que solo un trabajo. Es una cuestión del corazón inspirar a las personas, regalar belleza y crear un lugar donde todos estén en armonía y en paz consigo mismos. Creemos firmemente que la verdadera satisfacción y felicidad prospera al nutrir el ser interior. Por eso nos esforzamos por acompañarte en tu camino hacia un mayor bienestar y felicidad — porque sabemos que este camino es la clave para una vida más plena.",
};

function About2({ language = "de" }) {
  return (
    <div>
      <p className={s.About2Test}>{t(language, copy)}</p>
    </div>
  );
}

export default About2;
