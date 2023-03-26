import React from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
// @ts-ignore
import { ReactComponent as SkillImage } from '@/assets/skill.svg'
import HtmlImg from '@/assets/icons/html.svg'
import CssImg from '@/assets/icons/css.svg'
import SassImg from '@/assets/icons/sass.svg'
import PhpImg from '@/assets/icons/php.svg'
import TypescriptImg from '@/assets/icons/typescript.svg'
import JavascriptImg from '@/assets/icons/javascript.svg'
import BootstrapImg from '@/assets/icons/bootstrap.svg'
import TailwindImg from '@/assets/icons/tailwind.svg'
import JqueryImg from '@/assets/icons/jquery.svg'
import ReactImg from '@/assets/icons/react.svg'
import LaravelImg from '@/assets/icons/laravel.svg'
import CodeigniterImg from '@/assets/icons/codeigniter.svg'
import ExpressImg from '@/assets/icons/express.svg'
import MysqlImg from '@/assets/icons/mysql.svg'
import MongodbImg from '@/assets/icons/mongodb.svg'
import { m, Variant } from 'framer-motion'

type props = PropsWithChildren<{}>
type icon = {
  name: string
  image: string
  rating: number
}

type iconType = {
  type: string
  icons: icon[]
}

type variant = {
  visible: Variant
  hidden: Variant
}

const icons: iconType[] = [
  {
    type: 'Programming Languages',
    icons: [
      { name: 'Html', image: HtmlImg, rating: 8 },
      { name: 'Css', image: CssImg, rating: 8 },
      { name: 'Sass', image: SassImg, rating: 6.8 },
      {
        name: 'Javascript',
        image: JavascriptImg,
        rating: 7.8,
      },
      {
        name: 'Typescript',
        image: TypescriptImg,
        rating: 7,
      },
      { name: 'Php', image: PhpImg, rating: 7.8 },
    ],
  },
  {
    type: 'Frameworks and Libraries',
    icons: [
      {
        name: 'Bootstrap',
        image: BootstrapImg,
        rating: 7.5,
      },
      {
        name: 'Tailwind Css',
        image: TailwindImg,
        rating: 7.5,
      },
      {
        name: 'JQuery',
        image: JqueryImg,
        rating: 7.8,
      },
      { name: 'React', image: ReactImg, rating: 7 },
      {
        name: 'CodeIgniter',
        image: CodeigniterImg,
        rating: 7.5,
      },
      {
        name: 'Laravel',
        image: LaravelImg,
        rating: 7.5,
      },
      {
        name: 'Express Js',
        image: ExpressImg,
        rating: 6.8,
      },
      { name: 'MySql', image: MysqlImg, rating: 7.8 },
      {
        name: 'MongoDb',
        image: MongodbImg,
        rating: 5.5,
      },
    ],
  },
]

const Skills: React.FC<props> = ({}) => {
  const containerVariant: variant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeIn',
        when: 'beforeChildren',
        staggerChildren: 0.6,
      },
    },
  }

  const skillVariant: variant = {
    hidden: {
      x: -10,
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.1,
        type: 'spring',
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
  }

  const childrenVariant: variant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <m.section
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      id='about'
      className={styles.padding}>
      <h2 className={styles.h2}>Skills</h2>
      <m.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
        className={styles.image}>
        <SkillImage className={styles.image} />
      </m.div>
      <div>
        {icons.map((item, index) => (
          <div key={index}>
            {/* <p>{item.type}</p> */}
            <ul className={styles.skills}>
              {item.icons.map((item, index) => (
                <m.li
                  variants={skillVariant}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 1 }}
                  key={index}>
                  <m.img
                    variants={childrenVariant}
                    src={item.image}
                    alt={item.name}
                    height={40}
                    width={40}
                  />
                  <div className={styles.rating}>
                    <m.h4 variants={childrenVariant}>{item.name}</m.h4>
                    <div>
                      <m.div
                        transition={{
                          duration: 1.5,
                          type: 'tween',
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.rating * 10}%` }}
                      />
                    </div>
                  </div>
                </m.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </m.section>
  )
}

export default Skills
