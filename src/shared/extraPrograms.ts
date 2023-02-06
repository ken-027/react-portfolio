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
	{
		title: 'React X Laravel',
		description: 'A simple click me react application integrated with laravel api',
		repository: `${info.socials[0].link}/reactlaravel-clickme`,
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
	},
]

export default extraPrograms
