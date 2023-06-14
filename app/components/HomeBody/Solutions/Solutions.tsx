import SolutionCard from "./SolutionCard/SolutionCard";
import styles from "./page.module.css";

const cards = [
	{
		icon: "https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d29be46cd0be35bf919_box-icon-4.png",
		title: "Tout depuis un seul endroit",
		paragraph: "JOIN provides recruiters with the tools to elevate their work to the next level.",
	},
	{
		icon: "https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d29be46cd0be35bf915_box-icon-5.png",
		title: "Avoid an inbox full of applications",
		paragraph: "Goodbye, recruiting email chaos and spreadsheets. Hello, JOIN.",
	},
	{
		icon: "https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d29be46cd0be35bf913_box-icon-3.png",
		title: "Multi login pour chaque centre",
		paragraph: "Post to multiple job boards at once, including Glassdoor, Indeed, and many more.",
	},
	{
		icon: "https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d29be46cd0be35bf917_box-icon-6.png",
		title: "Moins de taches administratif",
		paragraph: "Profiter d'une embauche en un clic, afin de gagner du temps au moment de l'embauche.",
	},
	{
		icon: "https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d29be46cd0be35bf91b_box-icon-2.png",
		title: "Des candidats, local, nation et même européen",
		paragraph: "Profiter d'un réseau à l'échelle européenne, de candidats diplômé",
	},
	{
		icon: "https://assets.website-files.com/6481fe5eec8eb229837417e3/64823d29be46cd0be35bf911_box-icon-7.png",
		title: "Obtenez de l'aide chaque fois que vous en avez besoin",
		paragraph: "Notre équipe support reste à vos côté 12/7",
	},
]

export default function Solutions() {
  return (
    <div className={styles.solutionsContainer}>
      <div className={styles.solutionsText}>
        <p className={styles.solutionsParagraph}>
          <span className="grey-over-heading">
            Tank est votre partenaire Rh intelligent.
          </span>
          <br />
          Découvrer pourquoi nous sommes fière de notre outil !
        </p>
      </div>
	  <div className={styles.solutionsCardsContainer}>
		{cards.map((card, idx) => {
			return (
				<SolutionCard key={idx} {...card} />
			)
		})}
	  </div>
    </div>
  );
}
