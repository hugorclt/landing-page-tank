import styles from "./page.module.css";
import simplify1 from "@/public/simplify1.png";
import simplify2 from "@/public/simplify2.png";
import simplify3 from "@/public/simplify3.png";
import simplify4 from "@/public/simplify4.png";

export default function Simplify() {
  return (
    <section className={styles.simplifyContainer}>
      <div className={styles.simplifyText}>
        <h2>Simplifiez vos process de remplacement</h2>
      </div>
      <div className={styles.simplifyGrid}>
        <div className={`${styles.cell} ${styles.modernJob}`}>
          <p className={`${styles.cellParagraph} paragraph-big`}>
            Annonces d'emplois
            <br />
            moderne
          </p>
        </div>
        <div className={`${styles.cell} ${styles.cell2}`}>
          <img
            src={simplify1.src}
            className={styles.simplifyImage}
            loading="lazy"></img>
        </div>
        <div className={`${styles.cell} ${styles.rightImage}`}>
          <img
            src={simplify2.src}
            className={styles.simplifyImage}
            loading="lazy"></img>
        </div>
        <div className={`${styles.cell} ${styles.cell3}`}>
          <img
            src={simplify3.src}
            className={styles.simplifyImage}
            loading="lazy"></img>
        </div>
        <div className={`${styles.cell} ${styles.perfectHire}`}>
          <p className={`${styles.cellParagraph} paragraph-big`}>
            Faite l'annonce parfaite
          </p>
        </div>
        <div className={`${styles.cell} ${styles.manageCandidate}`}>
          <p className={`${styles.cellParagraph} paragraph-big`}>
            Manager vos candidats facilement
          </p>
        </div>
        <div className={`${styles.cell} ${styles.cell4}`}>
          <img
            src={simplify4.src}
            className={styles.simplifyImage}
            loading="lazy"></img>
        </div>
      </div>
      <div className="center">
        <p className="paragraph-big">Prêt à lancé votre première mission ?</p>
        <div className={styles.simplifyButtonContainer}>
          <a className="purple-button w-button">S'inscrire</a>
          <a className="white-button">
            <div className="white-button-text-wrapper">En savoir plus</div>
          </a>
        </div>
      </div>
    </section>
  );
}
