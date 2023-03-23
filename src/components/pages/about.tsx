import React from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
// @ts-ignore
import { ReactComponent as AboutImage } from '@/assets/about.svg'

type props = PropsWithChildren<{}>

const About: React.FC<props> = ({}) => {
  const knowledges: string[] = [
    'Database Management System(DBMS)',
    'Object Oriented Programming(OOP)',
    'Model View Controller(MVC)',
    'Search Engine Optimization(SEO)',
    'Frontend and Backend Development',
    'Versioning Control',
    'Authentication Token',
    'Algorithm Coding',
    'Rest API',
  ]

  return (
    <section
      id='about'
      className={styles.padding}>
      <h2 className={styles.h2}>About</h2>
      <div className={styles.image}>
        <AboutImage className={styles.image} />
      </div>
      <div className={styles.description}>
        <p>
          Hello, my name is Kenneth, and I&apos;m a self-taught developer with a
          passion for solving complex coding challenges. My journey in
          programming began when I shifted from a BS in Architecture to a BS in
          Information Technology, where I discovered my love for programming by
          answering programming activities in school. As I continued to hone my
          skills, I was given the opportunity to work as a programmer in our
          thesis group, where I developed a sales and inventory system.
        </p>
        <p>
          Since then, I have been constantly seeking opportunities to work and
          grow my career as a developer. I&apos;m committed to expanding my
          knowledge and expertise in the field of programming, and I enjoy
          learning new programming languages, frameworks, and libraries to stay
          up-to-date with the latest trends in the industry. I believe that
          programming is not just about writing code, but also about creating
          solutions to real-world problems.
        </p>
        <p>
          As a developer, I&apos;m passionate about writing clean, efficient,
          and maintainable code. I believe that good code is code that is easy
          to read, understand, and modify. I&apos;m also a strong believer in
          collaboration and enjoy working with others to find innovative
          solutions to complex problems. I&apos;m confident that my skills and
          experience make me a valuable addition to any team, and I&apos;m
          excited to continue my journey as a developer. If you&apos;d like to
          learn more about me, please feel free to explore my portfolio or get
          in touch with me.
        </p>
      </div>
    </section>
  )
}

export default About
