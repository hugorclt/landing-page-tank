import styles from "./page.module.css";
import candidateImg from "@/public/candidate.png";

export default function Candidates() {
  return (
    <div className={styles.candidateWrapper}>
      <div className="center">
        <h2>Plus de candidats moins d'effort</h2>
        <p className="paragraph-big">
          Construisons ensemble la nouvelle expérience au travail
        </p>
      </div>
      <div className={styles.candidateImg}>
        <img src={candidateImg.src} loading="lazy"></img>
      </div>
      <div className={styles.candidateHolder}>
        <p className={styles.candidateHolderSubTitle}>
          Tank le partenaire pour un recrutement intelligent
        </p>
        <p className={styles.candidateParagraph}>Créer votre compte en 2 mn</p>
        <a className={styles.candidateButton}>Commencer</a>
      </div>
    </div>
  );
}
