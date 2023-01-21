import { RiSkullFill } from 'react-icons/ri'
import { IWork } from './../ts-interfaces/index'
import experiences from './experiences'
import skills from './skills'
const projects: Omit<
  IWork & {
    applicationType: 'Desktop' | 'Mobile' | 'Website' | 'API'
    company: string
    development: 'Solo' | 'Team' | 'Duo'
  },
  'images' | 'repository'
>[] = [
	{
		title: 'Buyback Website Backend Application',
		description: 'An e-commerce website that manages records of items, orders, blogs, etc',
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
		development: 'Solo',
		website: 'https://jaspher-ga.stackstaging.com/admin/login',
		applicationType: 'Website',
	},
	{
		title: 'Laguna Lake Development Authority (LLDA)',
		description: 'A Laguna Lake Development Authority (LLDA) Website for applying online clearance application',
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
		development: 'Team',
		website: 'https://lldaonline.ph/',
		applicationType: 'Website',
	},
	{
		title: 'Internal Project Tracker',
		description: 'An internal website of the company for the project management tool',
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
		development: 'Team',
		website: '',
		applicationType: 'Website',
	},
	{
		title: 'DSWD Minors Traveling Abroad',
		description: 'A DSWD website for booking and certification for minors traveling abroad',
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
		development: 'Team',
		website: '',
		applicationType: 'Website',
	},
	{
		title: 'Extented Members Area (EMA)',
		description: 'An e-commerce website for extended members area (EMA)',
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
		development: 'Team',
		website: '',
		applicationType: 'Website',
	},
	{
		title: 'Greenbox',
		description: 'A web-based application for manage records of merchant for customer service employees',
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
		development: 'Duo',
		website: '',
		applicationType: 'Website',
	},
	{
		title: 'PPAS Sales and Inventory System',
		description: 'A thesis proposal system for our target client of Puerto Princesa Auto Supply to automate the process of sales and inventory system',
		developmentType: 'Full Stack',
		technologies: [
			skills.language.skills[7].name,
			skills.backend.skills[3].name,
			skills.database.skills[1].name,
		],
		company: 'Thesis Group',
		development: 'Solo',
		website: '',
		applicationType: 'Desktop',
	},
]

export default projects
