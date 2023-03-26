import { useEffect, useRef } from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
// @ts-ignore
// import { ReactComponent as Hero } from '@/assets/hero.svg'
import LinkedinImg from '@/assets/linkedin.svg'
import GithubImg from '@/assets/github.svg'
import CodewarsImg from '@/assets/codewars.svg'
import Typed from 'typed.js'
import { m, animate, stagger } from 'framer-motion'
import computerAnimation from '@/assets/code-dark.json'
import Lottie from 'lottie-react'

type props = PropsWithChildren<{}>
type social = {
  name: string
  link: string
  image: string
}

const Header: React.FC<props> = ({}) => {
  const socials: social[] = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kenneth-andales',
      image: LinkedinImg,
    },
    { name: 'Github', link: 'https://github.com/ken-027', image: GithubImg },
    {
      name: 'Codewars',
      link: 'https://www.codewars.com/users/ken@27',
      image: CodewarsImg,
    },
  ]
  const textRef = useRef<any>(null)
  const typed = useRef<any>(null)

  const ComputerAnimation = () => (
    <Lottie
      animationData={computerAnimation}
      loop={true}
    />
  )

  useEffect(() => {
    const img = document.querySelectorAll('.social-link')
    typed.current = new Typed(textRef.current, {
      strings: [
        'Frontend Developer',
        'Software Developer',
        'Full Stack Web Developer',
      ],
      typeSpeed: 70,
      backSpeed: 20,
      // fadeOut: true,
      loop: true,
      // cursorChar: '|'
    })

    img.forEach((item, index) => {
      item.addEventListener('contextmenu', function (e: Event) {
        e.preventDefault()
      })
    })

    return () => {
      typed.current.destroy()
      img.forEach((item, index) => {
        item.removeEventListener('contextmenu', function (e: Event) {
          e.preventDefault()
        })
      })
    }
  }, [])

  useEffect(() => {
    animate(
      'header p, li.social',
      { opacity: 1, y: 0 },
      { delay: stagger(0.3), type: 'spring' },
    )
  }, [])

  return (
    <header className={styles.header}>
      <div>
        <m.p initial={{ opacity: 0, y: 30 }}>Hi, I&apos;m</m.p>
        <m.h1
          initial={{ opacity: 0, x: '10%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.h1}>
          Kenneth Andales
        </m.h1>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.cursor}>
          <h2
            style={{ whiteSpace: 'pre' }}
            ref={textRef}>
            FULL STACK WEB DEVELOPER
          </h2>
        </m.div>
        <m.p initial={{ opacity: 0, y: 30 }}>
          With 2 years of web development experience, I am dedicated to staying
          up-to-date with the latest industry trends and technologies.
        </m.p>
        <ul className={styles.socials}>
          {socials.map((item, index) => (
            <m.li
              initial={{ opacity: 0, y: 30 }}
              className='social'
              key={index}>
              <a onClick={() => window.open(item.link, '_blank')}>
                <img
                  className='social-link'
                  src={item.image}
                  alt={`${item.name} account`}
                  width={50}
                  height={50}
                />
              </a>
            </m.li>
          ))}
        </ul>
      </div>
      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.image}>
        <ComputerAnimation />
      </m.div>
    </header>
  )
}

export default Header
