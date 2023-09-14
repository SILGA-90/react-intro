import s from "./style.module.css";

export function Greetings() {
  return (
    <div>
      <p>Bonjour à tous</p>
      <p className={`${s.box} box ${s.box2}`}>C'est SODIGAZ APC</p>
    </div>
  );
}
