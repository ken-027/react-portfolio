import { IWork } from '../ts-interfaces/index'
import info from './info'
import skills from './skills'

const restAPI: Omit<IWork, 'website' | 'images'>[] = [
  {
    title: 'Portfolio',
    description: 'This is description',
    repository: `${info.socials[0].link}/express-api`,
    technologies: [[skills.programminglanguage.skills[0].name]],
  },
  {
    title: 'Recipe',
    description: 'This is description',
    repository: `${info.socials[0].link}/node-js`,
    technologies: [[skills.programminglanguage.skills[0].name]],
  },
]

export default restAPI
