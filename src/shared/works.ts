import skills from './skills'
import info from './info'
import { IWork } from '../ts-interfaces'

import { workOne, workThree, workTwo, workFour, workFive } from './images'

const works: IWork[] = [
	{
		title: 'ECommerce Backend Website',
		description:
      'This application has inventory, orders, email templating, showing content for pages and menus, blogs, users, and settings management. It also has printing data for pdf and excels',
		website: '',
		repository: `${info.socials[0].link}/laravel-ecommerce`,
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.language.skills[4].name,
			skills.frontend.skills[0].name,
			skills.backend.skills[2].name,
			skills.database.skills[1].name,
		],
		images: workOne
	},
	{
		title: 'Job Posting Site',
		description: 'This is a simple posting website and has uploading and authentication',
		website: 'https://findeasyjob.herokuapp.com/',
		repository: `${info.socials[0].link}/laravelfindeasyjob`,
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.language.skills[4].name,
			skills.frontend.skills[1].name,
			skills.backend.skills[2].name,
			skills.database.skills[1].name,
		],
		images: workTwo,
	},
	{
		title: 'Simple CRUD Invoice',
		description: 'This is a simple CRUD that has a simple algorithm and can insert multiple items via submission',
		website: '',
		repository: `${info.socials[0].link}/laravelinvoicecrud`,
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.language.skills[4].name,
			skills.frontend.skills[0].name,
			skills.frontend.skills[2].name,
			skills.backend.skills[2].name,
			skills.database.skills[1].name,
		],
		images: workThree
	},
	{
		title: 'Wilson Works Static Website',
		description: 'This is a simple static website for Wilson Works',
		website: 'https://wiwosite.herokuapp.com/',
		repository: `${info.socials[0].link}/wiwosite`,
		developmentType: 'Frontend',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.frontend.skills[1].name,
			skills.frontend.skills[3].name,
		],
		images: workFour
	},
	{
		title: 'Libre Website',
		description: 'This is a simple static website for Libre app',
		website: '',
		repository: `${info.socials[0].link}/libre-site`,
		developmentType: 'Frontend',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[2].name,
			skills.language.skills[3].name,
			skills.frontend.skills[1].name,
			skills.frontend.skills[3].name,
		],
		images: workFive
	},
]

export default works
