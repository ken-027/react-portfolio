import { IWork } from '../ts-interfaces/index'
import info from './info'
import skills from './skills'

const restAPI: Omit<IWork, 'website' | 'images'>[] = [
	{
		title: 'Portfolio',
		description: 'This is description',
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
		description: 'This is description',
		developmentType: 'Backend',
		repository: `${info.socials[0].link}/node-js`,
		technologies: [
			skills.language.skills[3].name,
			skills.backend.skills[0].name,
			skills.database.skills[1].name,
		],
	},
	{
		title: 'User',
		description: 'This is description',
		developmentType: 'Backend',
		repository: `${info.socials[0].link}/node-js`,
		technologies: [
			skills.language.skills[3].name,
			skills.backend.skills[0].name,
			skills.database.skills[1].name,
		],
	},
]

export default restAPI
