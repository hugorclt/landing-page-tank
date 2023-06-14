import styles from "./page.module.css";

export default function HeroBanner() {
  return (
    <section className={styles.heroContainer}>
        <div className={styles.heroTitle}>
          <h1>Plateforme de recrutement pour le médical</h1>
        </div>
      <div className={styles.heroDesc}>
        Facilitez vos recrutements médicaux avec intelligence, dans un esprit
        friendly !
      </div>
      <div className={styles.heroButtonContainer}>
        <div className={`${styles.heroMainButton} button-large`}>
          <a href="https://mmra.re/purchasetiles">Recrutement</a>
        </div>
        <div className={styles.secondaryButton}>
          <a href="#">Interim</a>
        </div>
      </div>
    </section>
  );
}
