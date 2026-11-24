import s from "./About2.module.css";
import { t } from "../../i18n";

const copy = {
  de: "Für uns ist das mehr als nur ein Job. Es ist eine Herzensangelegenheit, Menschen zu inspirieren, Schönheit zu schenken und einen Ort zu schaffen, an dem jeder in Harmonie und mit sich selbst im Reinen ist. Wir glauben fest daran, dass wahre Zufriedenheit und Glück aus der Pflege des eigenen Inneren gedeiht. Deshalb ist es unser Bestreben, Sie auf Ihrer Reise zu mehr Wohlbefinden und Glück zu begleiten – weil wir wissen, dass dieser Weg der Schlüssel zu einem erfüllteren Leben ist.",
  en: "For us, this is more than just a job. It is a matter of the heart to inspire people, to give beauty and to create a place where everyone is in harmony and at peace with themselves. We firmly believe that true contentment and happiness thrives from nurturing one's inner self. That's why we strive to accompany you on your journey to greater well-being and happiness - because we know that this path is the key to a more fulfilling life.",
  uk: "Для нас це більше, ніж просто робота. Це справа серця — надихати людей, дарувати красу і створювати місце, де кожен у гармонії та в мирі із собою. Ми твердо віримо, що справжнє задоволення і щастя виростають із турботи про внутрішній світ. Тому ми прагнемо бути поруч на вашому шляху до більшого добробуту й щастя — адже знаємо, що саме цей шлях веде до повнішого життя.",
  ru: "Для нас это больше, чем просто работа. Это дело сердца — вдохновлять людей, дарить красоту и создавать место, где каждый в гармонии и в ладу с собой. Мы твёрдо верим, что настоящее удовлетворение и счастье растут из заботы о внутреннем мире. Поэтому мы стремимся сопровождать вас на пути к большему благополучию и счастью — потому что знаем: именно этот путь открывает более полную жизнь.",
};

function About2({ language = "de" }) {
  return (
    <div>
      <p className={s.About2Test}>{t(language, copy)}</p>
    </div>
  );
}

export default About2;
