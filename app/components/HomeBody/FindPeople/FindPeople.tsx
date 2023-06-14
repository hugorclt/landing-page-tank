import styles from './page.module.css'
import img1 from '@/public/img_findCard1.png'
import img2 from '@/public/img_findCard2.png'
import img3 from '@/public/img_findCard3.png'
import img4 from '@/public/img_findCard4.png'
import img5 from '@/public/img_findCard5.png'
import FindCard from './FindCard/FindCard'

const data = [
	{
	  number: 1,
	  title: "Inscription de votre centre",
	  image: img1.src,
	  subtitle: "Le Relooking !",
	  firstPara:
		"Marque employeur. Chez tank on promet au candidat un belle annonce moderne remplie d'information pratique.",
	  secondPara:
		"Tournage. Mettez votre centre et vos équipes en avant pour attirer vos futur talent.",
	},
	{
	  number: 2,
	  title: "Accéder à votre espace Rh",
	  image: img2.src,
	  subtitle: "Le mode SaaS",
	  firstPara:
		"Un outil pour votre réseau. Tank vous permet de vous organiser avec votre réseau de pro, sans frais tout en profitant de notre communauté en cas d'imprévu.",
	  secondPara:
		"Diffusion avancé passif. De nombreux services intelligent et automatique permettent d'attirer les candidats de vos recherches sur la plateforme. ",
	},
	{
	  number: 3,
	  title: "Bienvenue dans la communauté",
	  image: img3.src,
	  subtitle: "Le mode marketplace",
	  firstPara:
		"Partenariat École. Trouver des stagiaires des alternants en plus de nos candidats avec vos partenaires.",
	  secondPara:
		"Notre sélection Premium. Nos méthode de Growth Hacking vous garantisses un flux de nouveau candidats, prêt qualifié, en plus de vos ressources.",
	},
	{
	  number: 4,
	  title: "Gestion des candidats facile",
	  image: img4.src,
	  subtitle: "Le mode ATS",
	  firstPara:
		"Suivi de candidature. Suivez et anticiper vos besoins de recrutement dans un environnement collaboratif.",
	  secondPara:
		"Agenda et Chat. Organiser vos rendez-vous et discuter avec vos candidats, de façon agile.",
	},
	{
	  number: 5,
	  title: "Un recrutement juste et éthique",
	  image: img5.src,
	  subtitle: "Le mode humain",
	  firstPara:
		"Juste. Nous avons à coeur d'accompagné chaque candidats et centre de soin afin de construire un environnement épanouissant.",
	  secondPara:
		"Ethique.  Notre politique de transparence des offres et des demandes garantissent un équilibre justes des tarifs et des rémunération.",
	},
  ];

export default function FindPeople() {
  return (
	<div className={styles.findPeopleContainer}>
		<div className="center">
			<h2>Trouver la bonne personne au bon moment </h2>
			<p className='paragraph-big'>Construisons ensemble la nouvelle expérience au travail</p>
		</div>
		{data.map((card, idx) => {
			let isMirror: boolean = false;

			if (idx % 2 != 0)
				isMirror = true;
			return (
				<FindCard key={card.number} {...card} isMirror={isMirror} />
			)
		})}
	</div>
  )
}
