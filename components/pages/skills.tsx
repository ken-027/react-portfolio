import React from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
import Image from 'next/image'
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
  return (
    <section
      id='about'
      className={styles.padding}>
      <h2 className={styles.h2}>Skills</h2>
      <div className={styles.image}>
        <SkillImage className={styles.image} />
      </div>
      <div>
        {icons.map((item, index) => (
          <div key={index}>
            {/* <p>{item.type}</p> */}
            <ul className={styles.skills}>
              {item.icons.map((item, index) => (
                <li key={index}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    priority
                    height={40}
                    width={40}
                  />
                  <div className={styles.rating}>
                    <h4>{item.name}</h4>
                    <div>
                      <div style={{ width: `${item.rating * 10}%` }}></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
