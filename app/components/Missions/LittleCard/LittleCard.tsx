import { TMissions } from "@/types";
import styles from "./page.module.css";
import { create } from "domain";

export default function LittleCard({
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
  const getDayEllapsed = () => {
    var missionDate = new Date(created_at);
    var now = new Date();
    var nbDay = Math.floor((now.getTime() - missionDate.getTime()) / (1000 * 60 * 60 * 24));
    return nbDay
  };

  return (
    <>
      <h5>{title}</h5>
      <div className={styles.subtitle}>
        <p className="small-text">Poste a pourvoir: {poste}</p>
        <p className="small-text">
          du {dateStart} au {dateEnd}
        </p>
      </div>
      <p>{description}</p>
      <p className="small-text muted-text">Publié il y a {getDayEllapsed()} jours</p>
    </>
  );
}
