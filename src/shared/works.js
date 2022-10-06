import Work1Desktop from '../assets/image 1.svg'
import Work1Mobile from '../assets/work1-mobile.png'
import Work2Desktop from '../assets/work2-desktop.png'
import Work2Mobile from '../assets/work2-mobile.png'

import skills from './skills'

const works = [
  {
    title: 'FindEasyJob',
    description: 'This is a simple job posting where employer looking for employee.',
    website: 'https://findeasyjob.herokuapp.com/',
    repository: 'https://github.com/ken-027/laravelfindeasyjob',
    technologies: [
      skills.frontend[0].name,
      skills.frontend[1].name,
      skills.language[3].name,
      skills.backend[1].name,
      'Heroku'
    ],
    images: [
      Work1Desktop,
      Work1Mobile
    ]
   },
  {
    title: 'Wiwo Site',
    description: 'This is a branding simple static site.',
    website: 'https://wiwosite.herokuapp.com/',
    repository: 'https://github.com/ken-027/wiwosite',
    technologies: [
      skills.frontend[1].name,
      skills.frontend[3].name,
      skills.language[3].name,
      'Heroku'
    ],
    images: [
      Work2Desktop,
      Work2Mobile
    ]
   },
]

export default works