import { useEffect, useRef } from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
// @ts-ignore
import { ReactComponent as Hero } from '@/assets/hero.svg'
import LinkedinImg from '@/assets/linkedin.svg'
import GithubImg from '@/assets/github.svg'
import CodewarsImg from '@/assets/codewars.svg'
import Typed from 'typed.js'

type props = PropsWithChildren<{}>
type social = {
  name: string
  link: string
  image: string
}

const Header: React.FC<props> = ({}) => {
  const textRef = useRef(null)
  const typed = useRef<any>(null)

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

  useEffect(() => {
    const options = (typed.current = new Typed(textRef.current, {
      strings: [
        'Frontend Developer',
        'Software Developer',
        'Full Stack Web Developer',
      ],
      typeSpeed: 70,
      backSpeed: 20,
      loop: true,
      // cursorChar: '|'
    }))

    return () => {
      typed.current.destroy()
    }
  }, [])

  return (
    <header className={styles.header}>
      <div>
        <p>Hi, I&apos;m</p>
        <h1 className={styles.h1}>
          <span>Kenneth</span> <span>Andales</span>
        </h1>
        <div>
          <h2
            style={{ whiteSpace: 'pre' }}
            ref={textRef}>
            FULL STACK WEB DEVELOPER
          </h2>
        </div>
        <p>
          With 2 years of web development experience, I am dedicated to staying
          up-to-date with the latest industry trends and technologies.
        </p>
        <div className={styles.socials}>
          {socials.map((item, index) => (
            <a
              key={index}
              onClick={() => window.open(item.link, '_blank')}>
              <img
                src={item.image}
                alt={`${item.name} account`}
                width={50}
                height={50}
              />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.image}>
        <Hero
          className={styles.image}
          alt='Hero image'
        />
      </div>
    </header>
  )
}

export default Header
