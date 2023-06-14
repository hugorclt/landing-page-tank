import styles from './page.module.css'

type TSolutionCardProps = {
	icon: string,
	title: string,
	paragraph: string,
}

export default function SolutionCard({icon, title, paragraph} : TSolutionCardProps) {
  return (
	<div className={styles.solutionsCardContainer}>
		
	</div>
  )
}
