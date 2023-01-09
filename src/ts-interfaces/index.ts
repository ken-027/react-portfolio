type Education = {
  degree: string
  year: string
}

export interface ISkill {
  name: string
  description: string
  rating: number
  icon: string
}

export interface ISocial {
  name: string
  icon: object
  link: string
}

export interface IExperience {
  name: string
  position: string
  company: string
  location: string
  workType: 'On-site' | 'WFH' | 'Hybrid'
  jobStatus: 'Part-time' | 'Fulltime' | 'Freelance'
  date: {
    started: string
    ended: string
  }
  description: string[]
}

export interface IInfo {
  socials: ISocial[]
  user: {
    fullName: string
  }
  landing: {
    intro: string
  }
  about: string[]
  education: Education[]
  contacts: IContact[]
  websiteRepo: string
}

export interface IContact extends ISocial {
  text: string
}

export type Skill = {
  name: string
  skills: ISkill[]
}
export interface ISkills {
  programminglanguage: Skill
  frontend: Skill
  backend: Skill
  database: Skill
}

export interface IWork {
  title: string
  description: string
  website: string
  repository: string
  technologies: string[]
  images: string[]
  developmentType: 'Frontend' | 'Backend' | 'Full Stack'
}
