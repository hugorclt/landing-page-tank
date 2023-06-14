import Image from 'next/image'
import styles from './page.module.css'
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar'
import NavBar from './components/NavBar/Navbar'
import HeroBanner from './components/HeroBanner/HeroBanner'
import HomeBody from './components/HomeBody/HomeBody'

export default function Home() {
  return (
    <main className={styles.main}>
      <AnnouncementBar />
      <NavBar />
      <HeroBanner />
      <HomeBody />
    </main>
  )
}
