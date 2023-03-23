import React from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
// @ts-ignore
import { ReactComponent as Hero } from '@/assets/hero.svg'
import Image from 'next/image'
import LinkedinImg from '@/assets/linkedin.svg'
import GithubImg from '@/assets/github.svg'
import CodewarsImg from '@/assets/codewars.svg'

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

  return (
    <header className={styles.header}>
      <div>
        <p>Hi, I&apos;m</p>
        <h1 className={styles.h1}>
          <span>Kenneth</span> <span>Andales</span>
        </h1>
        <h2>FULL STACK WEB DEVELOPER</h2>
        <p>
          With 2 years of web development experience, I am dedicated to staying
          up-to-date with the latest industry trends and technologies.
        </p>
        <div className={styles.socials}>
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target='_blank'>
              <Image
                src={item.image}
                priority
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
