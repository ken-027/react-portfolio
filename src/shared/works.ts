import skills from './skills'
import info from './info'
import { IWork } from '../ts-interfaces'

import { workOne, workThree, workTwo, workFour, workFive, workSix } from './images'

const works: IWork[] = [
	{
		title: 'ECommerce Backend Website',
		description: 'An e-commerce website that manages records of items, orders, blogs, etc',
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
		images: workOne,
	},
	{
		title: 'Job Posting Site',
		description:
      'A simple posting website that has image uploading, authentication, authorization, etc',
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
		description:
      'A simple Create, Read, Update, and Delete (CRUD) Application that has a simple algorithm and can insert multiple items via submission',
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
		images: workThree,
	},
	{
		title: 'Wilson Works Static Website',
		description: 'A simple static website of Wilson Works',
		website: 'https://kenneth-andales.github.io/wilson-works',
		repository: `${info.socials[0].link}/wiwosite`,
		developmentType: 'Frontend',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.frontend.skills[1].name,
			skills.frontend.skills[3].name,
		],
		images: workFour,
	},
	{
		title: 'Libre Website',
		description: 'A simple static website of Libre website',
		website: 'https://kenneth-andales.github.io/libre',
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
		images: workFive,
	},
	{
		title: 'Educat Landing Page',
		description: 'A simple static website of educat learning system',
		website: 'https://kenneth-andales.github.io/educat',
		repository: `${info.socials[0].link}/educat-landing`,
		developmentType: 'Frontend',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[2].name,
			skills.language.skills[3].name,
			skills.language.skills[4].name,
			skills.frontend.skills[3].name,
			skills.backend.skills[2].name,
			skills.database.skills[3].name,
		],
		images: workSix,
	},
]

export default works
