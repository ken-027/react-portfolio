import { RiSkullFill } from 'react-icons/ri'
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
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.language.skills[4].name,
			skills.frontend.skills[2].name,
			`Vanilla ${skills.language.skills[4].name}`,
			skills.database.skills[1].name,
		],
		company: experiences[2].company,
		development: 'duo',
		website: '',
		applicationType: 'Website',
	},
	{
		title: 'Extented Members Area (EMA)',
		description: 'Managing record of merchant',
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.language.skills[4].name,
			skills.frontend.skills[2].name,
			`Vanilla ${skills.language.skills[4].name}`,
			skills.database.skills[1].name,
		],
		company: experiences[2].company,
		development: 'team',
		website: '',
		applicationType: 'Website',
	},
	{
		title: 'Laguna Lake Development Authority (LLDA)',
		description: 'Managing record of merchant',
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.language.skills[4].name,
			skills.frontend.skills[0].name,
			skills.frontend.skills[2].name,
			skills.backend.skills[1].name,
			skills.database.skills[1].name,
		],
		company: experiences[1].company,
		development: 'team',
		website: '',
		applicationType: 'Website',
	},
	{
		title: 'DSWD Minors Traveling Abroad',
		description: 'Managing record of merchant',
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.language.skills[4].name,
			skills.frontend.skills[0].name,
			skills.frontend.skills[2].name,
			skills.backend.skills[1].name,
			skills.database.skills[1].name,
		],
		company: experiences[1].company,
		development: 'team',
		website: '',
		applicationType: 'Website',
	},
	{
		title: 'Internal Project Tracker',
		description: 'Managing record of merchant',
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[0].name,
			skills.language.skills[1].name,
			skills.language.skills[3].name,
			skills.language.skills[4].name,
			skills.frontend.skills[0].name,
			skills.frontend.skills[2].name,
			skills.backend.skills[1].name,
			skills.database.skills[1].name,
		],
		company: experiences[1].company,
		development: 'team',
		website: '',
		applicationType: 'Website',
	},
	{
		title: 'Buyback Website Backend Application',
		description: 'Managing record of merchant',
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
		company: experiences[0].company,
		development: 'solo',
		website: 'https://jaspher-ga.stackstaging.com/admin/login',
		applicationType: 'Website',
	},
]

export default projects
