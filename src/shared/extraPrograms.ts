import { IWork } from './../ts-interfaces/index'
import info from './info'
import skills from './skills'
const extraPrograms: Omit<IWork, 'website' | 'images' | 'developmentType'>[] = [
	{
		title: 'Typescript Console',
		description: 'A simple typescript console application that has different algorithms',
		repository: `${info.socials[0].link}/typescript-console`,
		technologies: [skills.language.skills[5].name],
	},
	{
		title: 'Python Console',
		description: 'A simple python console application that has a calculator and rock paper scissor game, and other related mini modules',
		repository: `${info.socials[0].link}/python-console`,
		technologies: [skills.language.skills[6].name],
	},
	{
		title: 'Rust Console',
		description: 'A simple rust console application that has exercises and a guessing game',
		repository: `${info.socials[0].link}/rust-console`,
		technologies: [skills.language.skills[9].name],
	},
]

export default extraPrograms
