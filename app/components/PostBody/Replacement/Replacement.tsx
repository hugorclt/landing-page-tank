import styles from "./page.module.css";

export default function Replacement() {
  return (
    <section className={styles.replacementContainer}>
      <div className={styles.centerContainer}>
        <div className="text-center">
          <h4 className="large-heading">
            Besoin d'une remplacement en urgence
          </h4>
          <div className="large-text">Découvrez nos témoignage</div>
        </div>
        <div className="button-row justify-center">
          <a className="button" href="#">
            Voir
          </a>
          <div className={styles.avatar}>
            <img
              src="https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d29be46cd0be35bf90d_cell-image-3.png"
              alt="avatar"
            />
          </div>
          <div className={styles.avatarAuthor}>
            <div className="small-text">“Sauver par tank!”</div>
            <div className="muted-text small-text">Deborah N.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
