import { IWork } from './../ts-interfaces/index'
import info from './info'
import skills from './skills'
const extraPrograms: Omit<IWork, 'website' | 'images'>[] = [
	{
		title: 'Typescript Console',
		developmentType: 'Backend',
		description: 'This is typescript',
		repository: `${info.socials[0].link}/`,
		technologies: [skills.language.skills[5].name],
	},
]

export default extraPrograms
