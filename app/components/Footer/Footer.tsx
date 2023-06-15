import Socials from "./Socials/Socials";
import styles from "./page.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.innerFooter}>
          <div className={styles.headerFooter}>
            <a>
              <img src="https://assets.website-files.com/6481fe5eec8eb229837417e3/64820b0cac461f5988ae6ade_tank-logo-light%201.png" alt="tank-logo"></img>
            </a>
            <div>La plateforme de recrutement intelligente pour le médical</div>
            <Socials />
          </div>
          <div className={styles.job}>
            <h5>Nos métiers</h5>
            <div className="vertical-link-menu">
              <a className="nav-link text-white">Dentaire</a>
              <a className="nav-link text-white">Ophtalmologie</a>
              <a className="nav-link text-white">Radiologie</a>
              <a className="nav-link text-white">Audio</a>
            </div>
          </div>
          <div className={styles.company}>
            <h5>Company</h5>
            <div className="vertical-link-menu">
              <a className="nav-link text-white">A Propos</a>
              <a className="nav-link text-white">Blog</a>
              <a className="nav-link text-white">Carrière</a>
              <div className={styles.contact}>
                <a className="nav-link text-white">Contact</a>
                <div className={styles.avatarGroup}>
                  <img src="https://assets.website-files.com/6481fe5eec8eb229837417e3/6481fe5eec8eb2298374192c_avatar-04.jpg" alt="avatar-1"></img>
                  <img
                    className={styles.overlap}
                    src="https://assets.website-files.com/6481fe5eec8eb229837417e3/6481fe5eec8eb2298374191c_avatar-01.jpg" alt="avatar-2"></img>
                  <img
                    className={styles.overlap}
                    src="https://assets.website-files.com/6481fe5eec8eb229837417e3/6481fe5eec8eb2298374191d_avatar-02.jpg" at="avatar-3"></img>
                </div>
              </div>
              <a className="nav-link text-white">Mention Legal</a>
            </div>
          </div>
          <div className={styles.company}></div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="small-text">
          by{" "}
          <a href="/" target="_blank">
            tank
          </a>
        </div>
      </div>
    </footer>
  );
}
