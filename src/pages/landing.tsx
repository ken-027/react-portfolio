import Footer from '@/components/layout/footer'
import Nav from '@/components/layout/nav'
import About from '@/components/pages/about'
import Contact from '@/components/pages/contact'
import Experience from '@/components/pages/experience'
import Header from '@/components/pages/header'
import Knowledge from '@/components/pages/knowledge'
import Portfolio from '@/components/pages/portfolio'
import Skills from '@/components/pages/skills'
import styles from '@/styles/main.module.scss'
// @ts-ignore
import WaveImg from '@/assets/wave.png'

const Landing = () => {
  return (
    <>
      <img
        src={WaveImg}
        alt='Background wave'
        className={styles.waveHeader}
      />
      <main className={styles.main}>
        <Nav />
        <Header />
        <About />
        <Skills />
        <Knowledge />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default Landing
