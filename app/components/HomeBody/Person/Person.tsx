import style from "./page.module.css";

export default function Person() {
  return (
    <div className={style.personContainer}>
      <div className={style.personInner}>
        <h3>Prêt pour le recrutement intelligent</h3>
		<a className="purple-button w-button">Commencer</a>
      </div>
    </div>
  );
}
