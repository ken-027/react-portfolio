import React from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
import Image from 'next/image'
// @ts-ignore

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
    image: require('@/assets/portfolio/1.png'),
    link: 'https://kenneth-andales.github.io/wilson-works/',
    repo: 'https://',
  },
  {
    title: 'Libre Landing Page',
    image: require('@/assets/portfolio/2.png'),
    link: 'https://',
    repo: 'https://',
  },
  {
    title: 'Educat Landing Page',
    image: require('@/assets/portfolio/3.png'),
    link: 'https://',
    repo: 'https://',
  },
  {
    title: 'Agency Match Landing Page',
    image: require('@/assets/portfolio/4.png'),
    link: 'https://',
    repo: 'https://',
  },
  {
    title: 'Trabook Landing Page',
    image: require('@/assets/portfolio/5.png'),
    link: 'https://',
    repo: 'https://',
  },
]

const Portfolio: React.FC<props> = ({}) => {
  return (
    <section
      id='portfolio'
      className={styles.padding}>
      <h2 className={styles.h2}>Portfolio</h2>
      <div className={styles.portfolio}>
        {portfolios.map((item, index) => (
          <div
            key={index}
            className={styles.portfolioCard}>
            <div onClick={() => window.open(item.link, '_blank')}>
              <Image
                src={item.image}
                alt={item.title}
                priority
              />
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
