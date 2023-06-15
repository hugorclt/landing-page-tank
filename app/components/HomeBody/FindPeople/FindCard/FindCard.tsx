import styles from "./page.module.css";

type TFindCardsProps = {
  number: number;
  title: string;
  image: string;
  subtitle: string;
  firstPara: string;
  secondPara: string;
  isMirror: boolean;
};

export default function FindCard({
  number,
  title,
  subtitle,
  firstPara,
  secondPara,
  image,
  isMirror,
}: TFindCardsProps) {
  return (
    <div className={styles.findCardContainer} style={{flexDirection: isMirror ? "row-reverse" : "row"}}>
      <div className={`${isMirror ? styles.findImageMirror : styles.findImage}`}>
        <img alt={title} src={image}></img>
      </div>
      <div className={`${isMirror ? styles.findTextMirror : styles.findText}`}>
        <h5 className={styles.findTitle}>{title}</h5>
        <p className={styles.subheader}>{subtitle}</p>
        <p className={styles.findPara}>{firstPara}</p>
        <p className={styles.findPara}>{secondPara}</p>
        <div className={`${isMirror ? styles.findNumberMirror : styles.findNumber}`}>
          <div className={styles.findNumberInner}>
            <div>{number}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
