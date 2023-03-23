import { useEffect, useState } from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
import work1 from '@/assets/portfolio/1.png'
import work2 from '@/assets/portfolio/2.png'
import work3 from '@/assets/portfolio/3.png'
import work4 from '@/assets/portfolio/4.png'
import work5 from '@/assets/portfolio/5.png'

import { FaGithub, FaGlobeAsia } from 'react-icons/fa'

type props = PropsWithChildren<{}>

type portfolio = {
  image: string
  link: string
  repo: string
  title: string
}

const portfolios: portfolio[] = [
  {
    title: 'Wilson Work Landing Page',
    image: work1,
    link: 'https://kenneth-andales.github.io/wilson-works/',
    repo: 'https://github.com/ken-027/wiwosite/',
  },
  {
    title: 'Libre Landing Page',
    image: work2,
    link: 'https://kenneth-andales.github.io/libre/',
    repo: 'https://github.com/ken-027/libre-site/',
  },
  {
    title: 'Educat Landing Page',
    image: work3,
    link: 'https://kenneth-andales.github.io/educat/',
    repo: 'https://github.com/ken-027/educat-landing/',
  },
  {
    title: 'Agency Match Landing Page',
    image: work4,
    link: 'https://kenneth-andales.github.io/agency-match/',
    repo: 'https://github.com/ken-027/agency-match/',
  },
  {
    title: 'Trabook Landing Page',
    image: work5,
    link: 'https://kenneth-andales.github.io/trabook/',
    repo: 'https://github.com/ken-027/trabook',
  },
]

const Portfolio: React.FC<props> = ({}) => {
  return (
    <section
      id='portfolio'
      className={styles.padding}>
      <h2 className={styles.h2}>Portfolio</h2>
      <div className={styles.portfolio}>
        {portfolios.map((item, index) => {
          const [click, setClick] = useState<boolean>(false)

          useEffect(() => {
            console.log(click)
          }, [click])

          return (
            <div
              key={index}
              onClick={() => setClick((prevState) => !prevState)}
              className={`${styles.portfolioCard} ${
                click ? styles.clicked : ``
              }`}>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                />
                <div>
                  <a onClick={() => window.open(item.link, '_blank')}>
                    <FaGlobeAsia
                      size={30}
                      className={styles.githubRepo}
                    />
                  </a>
                  <a onClick={() => window.open(item.repo, '_blank')}>
                    <FaGithub
                      size={30}
                      className={styles.githubRepo}
                    />
                  </a>
                </div>
              </div>
              <h3>{item.title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
