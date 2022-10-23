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
    instagram?: string,
    twitter?: string,
    github: string,
    upwork?: string,
    turing?: string,
    onlineJobPh?: string,
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


export interface ISkills {
  language: ISkill[]
  frontend: ISkill[]
  backend: ISkill[]
}

export interface IWork {
  title: string
  description: string
  website: string
  repository: string
  technologies: string[]
  images: string[]
}