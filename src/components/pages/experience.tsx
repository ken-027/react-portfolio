import React from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
// @ts-ignore

type props = PropsWithChildren<{}>

type experience = {
  role: string
  type: 'Freelance' | 'Part-time' | 'Fulltime'
  company: string
  location: string
  contributes: string
  date: {
    from: Date
    to: Date
  }
}

const experiences: experience[] = [
  {
    role: 'Frontend Developer',
    company: 'Bluehive Ph',
    type: 'Part-time',
    contributes:
      'Managed front-end development and collaborated with the back-end development and project manager for various projects. My responsibilities included API integration and providing daily and weekly updates on project progress.',
    location: 'Quezon City, Metro Manila',
    date: {
      from: new Date(2022, 7),
      to: new Date(2022, 8),
    },
  },
  {
    role: 'Full Stack Web Developer',
    company: 'WerOrg',
    type: 'Freelance',
    contributes:
      'Successfully rebuilt the back-end application of an e-commerce site, adding translation capabilities and fixing minor onboarding issues. Additionally, I addressed some SEO-related issues on a live website. As part of my responsibilities, I handled the cPanel to upload code changes.',
    location: 'Florida, USA',
    date: {
      from: new Date(2022, 0),
      to: new Date(2022, 3),
    },
  },
  {
    role: 'Software Developer',
    company: 'Cloud Panda Phils Inc.',
    type: 'Fulltime',
    contributes:
      'Collaborated with other developers to build both government and internal websites. Additionally, I worked with QA testers to fix bugs in other projects. My responsibilities included uploading code to Bitbucket and updating the status of tasks on our project management tool.',
    location: 'BGC Taguig, Metro Manila',
    date: {
      from: new Date(2019, 9),
      to: new Date(2020, 2),
    },
  },
  {
    role: 'Jr. Web Developer',
    company: 'International Payment Processing',
    type: 'Fulltime',
    contributes:
      'Collaborated with junior and senior developers as well as my supervisor on minor or major tasks. Additionally, I managed to build a solo project with some assistance from other developers.',
    location: 'Puerto Princesa City, Palawan',
    date: {
      from: new Date(2018, 4),
      to: new Date(2019, 3),
    },
  },
]

const Experience: React.FC<props> = ({}) => {
  return (
    <section
      id='experience'
      className={styles.padding}>
      <h2 className={styles.h2}>Experience</h2>
      <div className={styles.experience}>
        {experiences.map((item, index) => (
          <div
            className={styles.card}
            key={index}>
            <h3>{item.role}</h3>
            <p>
              {item.company}
              <span>({item.type})</span>
            </p>
            <small>{item.location}</small>
            <p>{item.contributes}</p>
            <p>{`${item.date.from.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })} - ${item.date.to.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}`}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
