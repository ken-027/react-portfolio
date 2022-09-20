import Work1Desktop from '../assets/work1-desktop.png'
import Work1Mobile from '../assets/work1-mobile.png'
import Work2Desktop from '../assets/work2-desktop.png'
import Work2Mobile from '../assets/work2-mobile.png'

import skills from './skills'

const works = [
  {
    title: 'FindEasyJob',
    description: 'This is a simple job posting where employer looking for employee.',
    website: 'https://findeasyjob.herokuapp.com/',
    repository: 'https://github.com/kean7296/laravelfindeasyjob',
    technologies: [
      skills.frontend[0],
      skills.frontend[1],
      skills.language[3],
      skills.backend[1],
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
    repository: 'https://github.com/kean7296/wiwosite',
    technologies: [
      skills.frontend[1],
      skills.frontend[3],
      skills.language[3],
      'Heroku'
    ],
    images: [
      Work2Desktop,
      Work2Mobile
    ]
   },
]

export default works