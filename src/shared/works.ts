import skills from './skills'
import info from './info'
import Work1Desktop from '../assets/image 1.svg'
// import Work1Mobile from '../assets/work1-mobile.png'
import { IWork } from '../ts-interfaces'
import Work2Desktop from '../assets/work2-desktop.png'
import Work2Mobile from '../assets/work2-mobile.png'
import Work3Desktop from '../assets/work3-desktop.png'
import Work3Mobile from '../assets/work3-mobile.png'
import Work4Mobile from '../assets/work4-mobile.png'
import Work4Desktop from '../assets/work4-desktop.png'

import WorkOne1 from '../assets/work1/1.png'
import WorkOne2 from '../assets/work1/2.png'
import WorkOne3 from '../assets/work1/3.png'
import WorkOne4 from '../assets/work1/4.png'
import WorkOne5 from '../assets/work1/5.png'
import WorkOne6 from '../assets/work1/6.png'
import WorkOne7 from '../assets/work1/7.png'
import WorkOne8 from '../assets/work1/8.png'
import WorkOne9 from '../assets/work1/9.png'
import WorkOne10 from '../assets/work1/10.png'

const works: IWork[] = [
	{
		title: 'WerOrg Buyback Website',
		description:
      'This is a simple job posting where employer looking for employee.',
		// website: 'https://findeasyjob.herokuapp.com/',
		website: '',
		repository: `${info.socials[0].link}/laravelfindeasyjob`,
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.frontend.skills[0].name,
			skills.frontend.skills[1].name,
			skills.backend.skills[2].name,
			skills.database.skills[1].name,
		],
		images: [
			WorkOne1,
			WorkOne2,
			WorkOne3,
			WorkOne4,
			WorkOne5,
			WorkOne6,
			WorkOne7,
			WorkOne8,
			WorkOne9,
			WorkOne10,
		],
	},
	{
		title: 'Wiwo Site',
		description: 'This is a simple static website.',
		website: 'https://wiwosite.herokuapp.com/',
		repository: `${info.socials[0].link}//wiwosite`,
		developmentType: 'Frontend',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.frontend.skills[1].name,
			skills.frontend.skills[3].name,
			skills.language.skills[3].name,
		],
		images: [
			Work2Desktop,
			Work1Desktop,
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
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.frontend.skills[0].name,
			skills.frontend.skills[2].name,
			skills.backend.skills[2].name,
			skills.database.skills[1].name,
		],
		images: [
			Work2Desktop,
			Work1Desktop,
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
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.frontend.skills[0].name,
			skills.frontend.skills[2].name,
			skills.backend.skills[2].name,
			skills.database.skills[1].name,
		],
		images: [
			Work2Desktop,
			Work1Desktop,
			Work3Desktop,
			Work4Desktop,
			Work4Mobile,
		],
	},
]

export default works
