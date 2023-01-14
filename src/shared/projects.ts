import { IWork } from './../ts-interfaces/index'
import experiences from './experiences'
import skills from './skills'
const projects: Omit<
  IWork & {
    applicationType: 'Desktop' | 'Mobile' | 'Website' | 'API'
    company: string
    development: 'solo' | 'team' | 'duo'
  },
  'images' | 'repository'
>[] = [
	{
		title: 'PPAS Sales and Inventory System',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime numquam rerum error voluptatibus vel minus ab, cum, ratione accusantium itaque iure. Dolores molestiae ea natus odit autem eaque vitae deserunt.',
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[7].name,
			skills.backend.skills[3].name,
			skills.database.skills[1].name,
		],
		company: 'Thesis Proposal',
		development: 'solo',
		website: '',
		applicationType: 'Desktop',
	},
	{
		title: 'Greenbox',
		description: 'Managing record of merchant',
		developmentType: 'Full Stack',
		technologies: [skills.language.skills[1].name],
		company: experiences[2].company,
		development: 'duo',
		website: '',
		applicationType: 'Website',
	},
]

export default projects
