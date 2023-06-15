import styles from "./page.module.css";
import candidateImg from "@/public/candidate.png";

export default function Candidates() {
  return (
    <section className={styles.candidateWrapper}>
      <div className="center">
        <h2>Plus de candidats moins d'effort</h2>
        <p className="paragraph-big">
          Construisons ensemble la nouvelle expérience au travail
        </p>
      </div>
      <div className={styles.candidateImg}>
        <img
          src={candidateImg.src}
          alt="candidate"
          srcSet="https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d6d87163148c678422c_%23C2BEBE%20(2)-p-500.png 500w, https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d6d87163148c678422c_%23C2BEBE%20(2)-p-800.png 800w, https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d6d87163148c678422c_%23C2BEBE%20(2).png 920w"
          loading="lazy"></img>
      </div>
      <div className={styles.candidateHolder}>
        <p className={styles.candidateHolderSubTitle}>
          Tank le partenaire pour un recrutement intelligent
        </p>
        <p className={styles.candidateParagraph}>Créer votre compte en 2 mn</p>
        <a className="button-black">Commencer</a>
      </div>
    </section>
  );
}
