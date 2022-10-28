import skills from './skills'
import Work1Desktop from '../assets/image 1.svg'
import Work1Mobile from '../assets/work1-mobile.png'
import { IWork } from '../ts-interfaces'
import Work2Desktop from '../assets/work2-desktop.png'
import Work2Mobile from '../assets/work2-mobile.png'

const works: IWork[] = [
  {
    title: 'FindEasyJob',
    description: 'This is a simple job posting where employer looking for employee.',
    website: 'https://findeasyjob.herokuapp.com/',
    repository: 'https://github.com/ken-027/laravelfindeasyjob',
    technologies: [
      skills.programminglanguage.skills[0].name,
      skills.frontend.skills[0].name,
      skills.frontend.skills[1].name,
      skills.programminglanguage.skills[3].name,
      skills.backend.skills[1].name,
    ],
    images: [
      Work1Desktop,
      Work1Mobile
    ]
  },
  {
    title: 'Wiwo Site',
    description: 'This is a simple static website.',
    website: 'https://wiwosite.herokuapp.com/',
    repository: 'https://github.com/ken-027/wiwosite',
    technologies: [
      skills.programminglanguage.skills[0].name,
      skills.frontend.skills[1].name,
      skills.frontend.skills[3].name,
      skills.programminglanguage.skills[3].name,
    ],
    images: [
      Work2Desktop,
      Work2Mobile
    ]
  },
]

export default works