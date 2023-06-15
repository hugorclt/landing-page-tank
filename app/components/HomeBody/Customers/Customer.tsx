import styles from './page.module.css'
import trust1 from '@/public/trust1.png'
import trust2 from '@/public/trust2.png'
import trust3 from '@/public/trust3.png'
import trust4 from '@/public/trust4.png'
import trust5 from '@/public/trust5.png'
import trust6 from '@/public/trust6.png'

export default function Customer() {
  return (
	<section className={styles.customerContainer}>
		<div className={styles.customerHeading}>
			<h5>Ils nous font déjà confiance</h5>
		</div>
		<div className={styles.gridCustomer}>
			<img alt="truster-1" src={trust1.src}></img>
			<img alt="truster-2" src={trust2.src}></img>
			<img alt="truster-3" src={trust3.src}></img>
			<img alt="truster-4" src={trust4.src}></img>
			<img alt="truster-5" src={trust5.src}></img>
			<img alt="truster-6" src={trust6.src}></img>
		</div>
	</section>
  )
}
