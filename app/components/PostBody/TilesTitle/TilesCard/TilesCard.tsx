import styles from './page.module.css'

type TTilesCardsProps = {
	title: string,
	color: string,
	paragraph: string
}

export default function TilesCard({title, color, paragraph} : TTilesCardsProps) {
  return (
	<h4>
		<span style={{color: color}}>{title}</span>
		-
		{paragraph}
	</h4>
  )
}
