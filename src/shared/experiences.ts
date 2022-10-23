import { IExperience } from './../ts-interfaces/index';

const experiences: IExperience[] = [
  {
    name: 'Bluehive',
    position: 'Frontend Developer (WFH)',
    company: 'Bluehive Ph.',
    location: 'Quezon City, Metro Manila',
    date: {
      started: 'August 2022',
      ended: 'September 2022',
    },
    description: [
      'Maintained and developed frontend projects using React, Sass, Bootstrap, and Tailwindcss',
      'Worked with backend developer to implement API integration',
      'Managed tasks for project progress using ClickUp and app versioning using BitBucket',
    ]
  },
  {
    name: 'WerOrg',
    position: 'Web Developer (WFH)',
    company: 'WerOrg Buy Back Website',
    location: 'Jacksonville, Florida, USA',
    date: {
      started: 'January 2022',
      ended: 'April 2022',
    },
    description: [
      'Developed and rebuild the admin application site of an ecommerce site using Laravel, Jquery, and Bootstrap',
      'Maintained onboarding site and managed SEO tasks of an online site and give access to upload changes to the web hosting',
    ]
  },
  {
    name: 'Cloud Panda',
    position: 'Software Developer',
    company: 'Cloud Panda Phils Inc.',
    location: 'BGC Taguig, Metro Manila',
    date: {
      started: 'October 2019',
      ended: 'March 2020',
    },
    description: [
      'Managed tasks for project progress using Trello and app versioning using Bitbucket',
      'Works with the team to develop and maintain client and internal projects using technologies like JQuery, Bootstrap, and CodeIgniter',
    ]
  },
  {
    name: 'IPP',
    position: 'Jr. Web Developer',
    company: 'International Payments Processing',
    location: 'Puerto Princess City, Palawan',
    date: {
      started: 'May 2018',
      ended: 'April 2019',
    },
    description: [
      'Train the basic to advanced PHP programming and web development',
      'Maintained and Developed codes of every projects primarily HTML, CSS, Javascript, JQuery, and PHP',
      'Developed an internal website for the Customer Service employees',
    ]
  },
]

export default experiences