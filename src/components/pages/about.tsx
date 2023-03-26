import { useRef, useEffect } from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
// @ts-ignore
// import { ReactComponent as AboutImage } from '@/assets/about.svg'
import { m, Variant } from 'framer-motion'
import Typed from 'typed.js'
import Hero from '../svg/hero'

type props = PropsWithChildren<{}>
type variant = {
  hidden: Variant
  visible: Variant
}

const About: React.FC<props> = ({}) => {
  const textRef = useRef<any[]>([])
  const typed = useRef<any[]>([])
  const aboutMe: string[] = [
    `Hello and welcome to my portfolio website! My name is Kenneth, and I am a self-taught developer with a passion for coding challenges and learning trend technologies.`,
    `My interest in programming started when I shifted my course from Architecture to Information Technology, and since then, I have been hooked. During my time in school, I participated in programming activities, which motivated me to pursue programming further. Eventually, I became a programmer in our Thesis group, where I developed a sales and inventory system.`,
    `Since then, I have gained experience as a developer, focusing mainly on developing various kinds of applications, including desktop and mobile applications. I am always learning new trend technologies to keep up with the latest developments in the industry.`,
    `I am currently seeking new opportunities to grow my career as a developer, and I believe my passion for coding and learning, coupled with my experience, make me a valuable asset to any team. Thank you for visiting my portfolio, and I look forward to connecting with you!`,
  ]
  const containerVariant: variant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeIn',
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  }

  const pVariant: variant = {
    hidden: { opacity: 1, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeIn',
      },
    },
  }

  useEffect(() => {
    // textRef.current.map((item, index) => {
    //   typed.current[index] = new Typed(item, {
    //     strings: [aboutMe[index]],
    //     typeSpeed: 0,
    //     backSpeed: 0,
    //     // fadeOut: true,
    //     showCursor: false,
    //     backDelay: index * 700,
    //     // cursorChar: '|'
    //   })
    // })
    // return () => {
    //   typed.current.map((item) => {
    //     item.destroy()
    //   })
    // }
  }, [])

  // useEffect(() => {
  //   if (isInView) {
  //     typed.current[0].reset()
  //     // typed.current[1].reset()
  //     // typed.current[2].reset()
  //     //   // typed.current.reset()
  //     //   typed.current.map((item, index) => {
  //     //     if (index == 0) {
  //     //       item.reset()
  //     //     } else {
  //     //       setTimeout(() => {
  //     //         item.reset()
  //     //       }, 2000 * index)
  //     //     }
  //     //   })
  //   }
  // }, [isInView])

  return (
    <m.section
      id='about'
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      className={styles.padding}>
      <h2 className={styles.h2}>About</h2>
      <m.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
        className={styles.image}>
        {/* <AboutImage className={styles.image} /> */}
        <Hero className={`${styles.image} hero`} />
      </m.div>
      <div className={styles.description}>
        {aboutMe.map((item, index) => (
          <m.p
            // ref={(el) => (textRef.current[index] = el)}
            initial={{ opacity: 0, x: index % 2 ? '-20%' : '20%' }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            // variants={pVariant}
            viewport={{ amount: 0.2 }}
            key={index}>
            {item}
          </m.p>
        ))}
      </div>
    </m.section>
  )
}

export default About
