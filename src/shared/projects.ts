import { IWork } from './../ts-interfaces/index'
import skills from './skills'
const projects: Omit<
  IWork & { company: string; development: 'solo' | 'team' | 'duo' },
  'website' | 'images' | 'repository'
>[] = [
  {
    title: 'PPAS Sales and Inventory System',
    description: 'Thesis proposal',
    developmentType: 'Full Stack',
    technologies: [skills.programminglanguage.skills[0].name],
    company: 'Thesis',
    development: 'solo',
  },
  {
    title: 'Greenbox',
    description: 'Thesis proposal',
    developmentType: 'Full Stack',
    technologies: [skills.programminglanguage.skills[0].name],
    company: 'Thesis',
    development: 'duo',
  },
]

export default projects
