import styles from "./page.module.css";

type TDynamicSeparatorPros = {
  text: string;
};

export default function DynamicSeparator({ text }: TDynamicSeparatorPros) {
  return (
    <div className={styles.dynamicContainer}>
      <h1 className={styles.infiniteText}>{text}</h1>
      <h1 className={`${styles.infiniteText} ${styles.infiniteTextDelay}`}>{text}</h1>
    </div>
  );
}
