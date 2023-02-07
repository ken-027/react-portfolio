import { IWork } from '../ts-interfaces/index'
import info from './info'
import skills from './skills'

const restAPI: Omit<IWork, 'website' | 'images'>[] = [
	{
		title: 'Portfolio',
		description: 'A portfolio api that has jwt authentication, api key authentication, image uploading, validtion, etc',
		developmentType: 'Backend',
		repository: `${info.socials[0].link}/express-api`,
		technologies: [
			skills.language.skills[5].name,
			skills.backend.skills[0].name,
			skills.database.skills[0].name,
		],
	},
	{
		title: 'Recipe',
		description: 'A recipe rest API that has uploading images, authentication, authorization, etc',
		developmentType: 'Backend',
		repository: `${info.socials[0].link}/express-recipe`,
		technologies: [
			skills.language.skills[3].name,
			skills.backend.skills[0].name,
			skills.database.skills[1].name,
		],
	},
	{
		title: 'User',
		description: 'A simple Create, Read, Update and Delete (CRUD) application of nodejs',
		developmentType: 'Backend',
		repository: `${info.socials[0].link}/express-user`,
		technologies: [
			skills.language.skills[3].name,
			skills.backend.skills[0].name,
			skills.database.skills[1].name,
		],
	},
	{
		title: 'Order',
		description: 'A simple Order API with authentication, validation and unit testing',
		developmentType: 'Backend',
		repository: `${info.socials[0].link}/laravel-orderapi`,
		technologies: [
			skills.language.skills[4].name,
			skills.backend.skills[2].name,
			skills.database.skills[3].name,
		],
	},
]

export default restAPI
