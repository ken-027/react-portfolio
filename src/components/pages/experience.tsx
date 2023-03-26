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
      'Managed front-end development and worked collaboratively with the back-end developer and project manager on multiple projects. Spearheaded API integration and provided regular project progress updates on a daily and weekly basis, ensuring effective communication and alignment across all stakeholders.',
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
      'Rebuilt the back-end application of an e-commerce site, incorporating translation capabilities and resolving minor onboarding issues, resulting in improved user experience. Implemented SEO-related improvements to enhance the performance of a live website. Managed the cPanel to upload code changes, ensuring seamless deployment and functionality of the website.',
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
      'Played an integral role in developing government and internal websites, working closely with fellow developers to ensure their successful deployment. Collaborated effectively with QA testers to resolve issues and improve project functionality. Managed code uploads to Bitbucket and tracked task statuses using project management tools, ensuring that all team members were aligned and up-to-date on project progress.',
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
      'Collaborated with junior and senior developers and the supervisor to complete various tasks. Successfully handled a solo project with guidance from experienced developers, showcasing independent and teamwork abilities.',
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
