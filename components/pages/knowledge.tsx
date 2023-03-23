import React from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
import Image from 'next/image'
// @ts-ignore
import { ReactComponent as AboutImage } from '@/assets/about.svg'
import ProgrammingImg from '@/assets/knowledge/programming.svg'
import DatabaseImg from '@/assets/knowledge/database.svg'
import SEOImg from '@/assets/knowledge/seo.svg'
import MVCImg from '@/assets/knowledge/mvc.svg'
import AuthImg from '@/assets/knowledge/auth.svg'
import FullstackImg from '@/assets/knowledge/fullstack.svg'
import AlgoImg from '@/assets/knowledge/algorithm.svg'
import VersioningImg from '@/assets/knowledge/versioning.svg'
import APIImg from '@/assets/knowledge/api.svg'
import SPAImg from '@/assets/knowledge/spa.svg'

type props = PropsWithChildren<{}>

type knowledge = {
  title: string
  image: string
}

const Knowledge: React.FC<props> = ({}) => {
  const knowledges: knowledge[] = [
    { title: 'Object Oriented Programming', image: ProgrammingImg },
    { title: 'Database Management System', image: DatabaseImg },
    { title: 'Search Engine Optimization', image: SEOImg },
    { title: 'Single Page Application', image: SPAImg },
    { title: 'Full Stack Development', image: FullstackImg },
    { title: 'Model View Controller', image: MVCImg },
    { title: 'Authentication Token', image: AuthImg },
    { title: 'Versioning Control', image: VersioningImg },
    { title: 'Algorithm Coding', image: AlgoImg },
    { title: 'Rest API', image: APIImg },
  ]

  return (
    <section
      id='knowledge'
      className={styles.padding}>
      <h2 className={styles.h2}>Knowledge</h2>
      <div className={styles.image}>
        <AboutImage className={styles.image} />
      </div>
      <div className={styles.knowledge}>
        {knowledges.map((item, index) => (
          <div
            className={styles.knowledgeItem}
            key={index}>
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
            />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Knowledge
