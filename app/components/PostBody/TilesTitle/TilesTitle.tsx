import TilesCard from "./TilesCard/TilesCard";
import styles from "./page.module.css";

const cards = [
  {
    title: "Precise control",
    color: "#3689ee",
    paragraph:
      "Tiles is built using modular components that are easy to customise.",
  },
  {
    title: "Professional design",
    color: "#ff7d00",
    paragraph: "Save on expensive agency fees and hundreds of hours of design.",
  },
  {
    title: "A trusted team",
    color: "#4cb944;",
    paragraph:
      "Medium Rare has created templates that power over 50,000 websites.",
  },
];

export default function TilesTitle() {
  return (
    <section className={styles.tilesContainer}>
      <div className={styles.tilesHeader}>
        <div className={styles.tilesGrid}>
			{cards.map((card, idx) => {
				return (
					<TilesCard key={idx} {...card} />
				)
			})}
		</div>
      </div>
    </section>
  );
}
