import styles from './page.module.css'

type TSolutionCardProps = {
	icon: string,
	title: string,
	paragraph: string,
}

export default function SolutionCard({icon, title, paragraph} : TSolutionCardProps) {
  return (
	<div className={styles.solutionsCardContainer}>
		<div>
			<img alt={title} className={styles.image} src={icon}></img>
			<p className={styles.title}>{title}</p>
			<p className={styles.paragraph}>{paragraph}</p>
		</div>
	</div>
  )
}
