import { IWork } from './../ts-interfaces/index'
import info from './info'
import skills from './skills'
const extraPrograms: Omit<IWork, 'website' | 'images'>[] = [
	{
		title: 'Typescript Console',
		developmentType: 'Backend',
		description: 'This is simple typscript console application',
		repository: `${info.socials[0].link}/typescript-console`,
		technologies: [skills.language.skills[5].name],
	},
	{
		title: 'Python Console',
		developmentType: 'Backend',
		description: 'This is simple python console application',
		repository: `${info.socials[0].link}/python-console`,
		technologies: [skills.language.skills[6].name],
	},
	{
		title: 'Rust Console',
		developmentType: 'Backend',
		description: 'This is rust console application',
		repository: `${info.socials[0].link}/rust-console`,
		technologies: [skills.language.skills[9].name],
	},
]

export default extraPrograms
