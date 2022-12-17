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

export interface IExperience {
  name: string
  position: string
  company: string
  location: string
  date: {
    started: string,
    ended: string,
  }
  description: string[]
}

export interface IInfo {
  socials: {
    linkedIn: string,
    codewars: string,
    instagram: string,
    twitter: string,
    github: string,
    upwork: string,
    onlineJobPh: string,
    viber: string,
    discord: string,
    skye: string,
    whatsapp: string
    codepen: string
  }
  user: {
    fullName: string,
    email: string,
    phone: string
  }
  landing: {
    intro: string
  }
  about: string[]
  education: Education[]
}

export type Skill = {
  name: string,
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
}