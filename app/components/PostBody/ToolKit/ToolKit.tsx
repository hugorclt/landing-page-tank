import styles from "./page.module.css";

export default function ToolKit() {
  return (
    <div className={styles.toolKitContainer}>
      <div className={styles.toolKitInner}>
        <div className={styles.toolKitGrid}>
          <div className={`${styles.leftSide}`}>
            <div className="large-heading">
              <h2>A complete design toolkit.</h2>
            </div>
            <div className="large-text">
              Take full control of Tiles’ design within Figma. Once purchased,
              request the file below.
            </div>
            <div className="button-row">
              <a className="button bg-primary-3">Request now</a>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src="https://assets.website-files.com/6481fe5eec8eb229837417e3/6482e505d0c1295fdfa4b955_%23C2BEBE%20(3).png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
