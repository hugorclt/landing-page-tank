import { TMissions } from "@/types";
import styles from "./page.module.css";

export default function BigCard({
  id,
  title,
  description,
  profession,
  poste,
  min,
  max,
  profilSearch,
  dateStart,
  dateEnd,
  status,
  nbPatient,
  pourcentage,
  created_at,
  updated_at,
}: TMissions) {
  return (
    <div className={styles.cardContainer}>
      <h4>{title}</h4>
      <h5>{profession != -1 && profession}</h5>
      <div className={styles.subtitle}>
        <p>Poste à pourvoir: {poste}</p>
        <p>
          du {dateStart} au {dateEnd}
        </p>
      </div>
	  <div className={styles.button}>
		<a className="purple-button w-button">Postuler</a>
	  </div>
      <p>{description}</p>
      <p>Nombre de patients: {nbPatient}</p>
      <h5>Profile recherché</h5>
      <p>{profilSearch}</p>
    </div>
  );
}
