import React, { useEffect, useRef, useState } from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
// @ts-expect-error
import { ReactComponent as ProgrammingImg } from '@/assets/knowledge/programming.svg'
// @ts-expect-error
import { ReactComponent as DatabaseImg } from '@/assets/knowledge/database.svg'
// @ts-expect-error
import { ReactComponent as SEOImg } from '@/assets/knowledge/seo.svg'
// @ts-expect-error
import { ReactComponent as MVCImg } from '@/assets/knowledge/mvc.svg'
// @ts-expect-error
import { ReactComponent as AuthImg } from '@/assets/knowledge/auth.svg'
// @ts-expect-error
import { ReactComponent as FullstackImg } from '@/assets/knowledge/fullstack.svg'
// @ts-expect-error
import { ReactComponent as AlgoImg } from '@/assets/knowledge/algorithm.svg'
// @ts-expect-error
import { ReactComponent as VersioningImg } from '@/assets/knowledge/versioning.svg'
// @ts-expect-error
import { ReactComponent as APIImg } from '@/assets/knowledge/api.svg'
// @ts-expect-error
import { ReactComponent as SPAImg } from '@/assets/knowledge/spa.svg'
import Typed from 'typed.js'
import { m, Variant } from 'framer-motion'

type props = PropsWithChildren<{}>

type knowledge = {
  title: string
  image: React.Component
}

type variant = {
  visible: Variant
  hidden: Variant
}

const KnowledgeCard: React.FC<{ item: knowledge }> = ({ item }) => {
  const [isHover, setisHover] = useState<boolean>(false)
  const textRef = useRef<any>(null)
  const typed = useRef<any>(null)
  const childrenVariant: variant = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  useEffect(() => {
    typed.current = new Typed(textRef.current, {
      strings: [item.title],
      typeSpeed: 0,
      // backSpeed: 30,
      fadeOut: true,
      showCursor: false,
      // cursorChar: '|'
    })

    return () => typed.current?.destroy()
  }, [])

  useEffect(() => {
    if (isHover) {
      typed.current.reset()
    }
  }, [isHover])

  return (
    <m.div
      variants={childrenVariant}
      viewport={{ amount: 0.2 }}
      className={styles.knowledgeItem}>
      {/* @ts-ignore */}
      <item.image
        onMouseLeave={() => setisHover(false)}
        onMouseOver={() => setisHover(true)}
      />
      <m.h3
        variants={childrenVariant}
        ref={textRef}>
        {item.title}
      </m.h3>
    </m.div>
  )
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

  const containerVariant: variant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <m.section
      id='knowledge'
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      className={styles.padding}>
      <h2 className={styles.h2}>Knowledge</h2>
      <div className={styles.knowledge}>
        {knowledges.map((item, index) => (
          <KnowledgeCard
            item={item}
            key={index}
          />
        ))}
      </div>
    </m.section>
  )
}

export default Knowledge
