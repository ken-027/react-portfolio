import skills from './skills'
import info from './info'
import Work1Desktop from '../assets/image 1.svg'
import Work1Mobile from '../assets/work1-mobile.png'
import { IWork } from '../ts-interfaces'
import Work2Desktop from '../assets/work2-desktop.png'
import Work2Mobile from '../assets/work2-mobile.png'
import Work3Desktop from '../assets/work3-desktop.png'
import Work3Mobile from '../assets/work3-mobile.png'
import Work4Mobile from '../assets/work4-mobile.png'
import Work4Desktop from '../assets/work4-desktop.png'

const works: IWork[] = [
  {
    title: 'FindEasyJob',
    description:
      'This is a simple job posting where employer looking for employee.',
    website: 'https://findeasyjob.herokuapp.com/',
    repository: `${info.socials[0].link}/laravelfindeasyjob`,
    technologies: [
      [
        skills.programminglanguage.skills[0].name,
        skills.programminglanguage.skills[1].name,
        skills.programminglanguage.skills[3].name,
      ],
      [
        skills.frontend.skills[0].name,
        skills.frontend.skills[1].name,
        skills.backend.skills[2].name,
      ],
      [skills.database.skills[1].name],
    ],
    images: [
      Work1Desktop,
      Work2Desktop,
      Work3Desktop,
      Work4Desktop,
      Work1Mobile,
    ],
  },
  {
    title: 'Wiwo Site',
    description: 'This is a simple static website.',
    website: 'https://wiwosite.herokuapp.com/',
    repository: `${info.socials[0].link}//wiwosite`,
    technologies: [
      [
        skills.programminglanguage.skills[0].name,
        skills.programminglanguage.skills[1].name,
      ],
      [skills.frontend.skills[1].name, skills.frontend.skills[3].name],
      [skills.programminglanguage.skills[3].name],
    ],
    images: [
      Work1Desktop,
      Work2Desktop,
      Work3Desktop,
      Work4Desktop,
      Work2Mobile,
    ],
  },
  {
    title: 'Buyback Backend Application Site',
    description: 'This is a backend application of Ecommerce site.',
    website: '',
    repository: `${info.socials[0].link}/laravel-ecommerce`,
    technologies: [
      [
        skills.programminglanguage.skills[0].name,
        skills.programminglanguage.skills[1].name,
        skills.programminglanguage.skills[3].name,
      ],
      [
        skills.frontend.skills[0].name,
        skills.frontend.skills[2].name,
        skills.backend.skills[2].name,
      ],
      [skills.database.skills[1].name],
    ],
    images: [
      Work1Desktop,
      Work2Desktop,
      Work3Desktop,
      Work4Desktop,
      Work3Mobile,
    ],
  },
  {
    title: 'Invoice Listing',
    description: 'This is simple invoice crud app.',
    website: '',
    repository: `${info.socials[0].link}/laravelinvoicecrud`,
    technologies: [
      [
        skills.programminglanguage.skills[0].name,
        skills.programminglanguage.skills[1].name,
        skills.programminglanguage.skills[3].name,
      ],
      [
        skills.frontend.skills[0].name,
        skills.frontend.skills[2].name,
        skills.backend.skills[2].name,
      ],
      [skills.database.skills[2].name],
    ],
    images: [
      Work1Desktop,
      Work2Desktop,
      Work3Desktop,
      Work4Desktop,
      Work4Mobile,
    ],
  },
]

export default works
