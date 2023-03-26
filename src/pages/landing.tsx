// import { useEffect, useRef } from 'react'
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
import { LazyMotion, domAnimation } from 'framer-motion'

const Landing = () => {
  // const cursor = useRef<Element>(null)

  // const mouseMove = (e: MouseEvent) => {
  //   cursor.current?.animate(
  //     {
  //       left: `${e.pageX}px`,
  //       top: `${e.pageY}px`,
  //       transform: 'translate(-50%, -50%)',
  //     },
  //     { duration: 500, fill: 'forwards' },
  //   )
  // }

  // useEffect(() => {
  //   document.addEventListener('mousemove', mouseMove)

  //   return () => {
  //     document.removeEventListener('mousemove', mouseMove)
  //   }
  // }, [])

  return (
    <LazyMotion features={domAnimation}>
      {/* <div
        ref={cursor as any}
        className='cursor'
      /> */}
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
    </LazyMotion>
  )
}

export default Landing
