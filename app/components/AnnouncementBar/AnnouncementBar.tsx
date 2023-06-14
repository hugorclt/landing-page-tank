import styles from './page.module.css'

export default function AnnouncementBar() {
  return (
    <div className={styles.announcementBar}>
      <div className="small-text">
        <a href="https://mmra.re/portfolio" target="_blank">
          La première plateforme intelligente pour le recrutement médical
        </a>
      </div>
    </div>
  );
}
