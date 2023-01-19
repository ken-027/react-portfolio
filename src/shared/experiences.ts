import { IExperience } from './../ts-interfaces/index'

const experiences: IExperience[] = [
	// {
	//   name: 'Bluehive',
	//   position: 'Frontend Developer',
	//   company: 'Bluehive Ph.',
	//   location: 'Quezon City, Metro Manila',
	//   jobStatus: 'Part-time',
	//   workType: 'WFH',
	//   date: {
	//     started: 'August 2022',
	//     ended: 'September 2022',
	//   },
	//   description: [
	//     'Maintained and developed frontend projects using React, Sass, Bootstrap, and Tailwindcss',
	//     'Worked with backend developer to implement API integration',
	//     'Managed tasks for project progress using ClickUp and app versioning using BitBucket',
	//   ],
	// },
	{
		name: 'WerOrg',
		position: 'Fullstack Web Developer',
		company: 'WerOrg Buyback Website',
		location: 'Jacksonville, Florida, USA',
		jobStatus: 'Freelance',
		workType: 'WFH',
		date: {
			started: 'January 2022',
			ended: 'April 2022',
		},
		description: [
			'Managed to rebuild the backend application of an e-commerce website from the scratch',
			'Managed to put a translator page on an onboarding website',
			'Managed fixing of search engine optimization(SEO) of online site and managed to upload changes via a web hosting like SiteGround',
			'Managed using CPanel like StackCP for uploading changes to the website',
			'Tech used HTML, CSS, PHP Laravel, MySQL, Bootstrap, and JQuery',

		],
	},
	{
		name: 'Cloud Panda',
		position: 'Software Developer',
		company: 'Cloud Panda Phils Inc.',
		location: 'BGC Taguig, Metro Manila',
		jobStatus: 'Fulltime',
		workType: 'On-site',
		date: {
			started: 'October 2019',
			ended: 'March 2020',
		},
		description: [
			'Collaborated with other developers to develop government website for DSWD and internal project tracker',
			'Contributed to bug fixing for the existing government website of LLDA that has issues',
			'Managed upload of code changes via a versioning tool like bitbucket and managed to update the status of tasks via a project management tool like Trello',
			'Tech used HTML, CSS, PHP CodeIgniter, MySQL, Bootstrap, and JQuery',
		],
	},
	{
		name: 'IPP',
		position: 'Jr. Web Developer',
		company: 'International Payments Processing',
		location: 'Puerto Princess City, Palawan',
		jobStatus: 'Fulltime',
		workType: 'On-site',
		date: {
			started: 'May 2018',
			ended: 'April 2019',
		},
		description: [
			'Written and maintained codes for every project assigned',
			'Managed upload of code changes via a versioning tool like bitbucket',
			'Developed an internal website for customer service employees',
			'Collaborated with other developers',
			'Tech used HTML, CSS, Vanilla PHP, MySQL, and Javascript with the JQuery library',
		],
	},
]

export default experiences
