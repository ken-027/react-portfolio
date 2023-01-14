import { IInfo } from './../ts-interfaces/index'
import {
	FaLinkedinIn,
	FaGithub,
	FaPhoneAlt,
	FaViber,
	FaDiscord,
} from 'react-icons/fa'
import { AiOutlineCodepen } from 'react-icons/ai'
import { SiCodewars, SiGmail, SiUpwork, SiWhatsapp } from 'react-icons/si'

const info: IInfo = {
	socials: [
		{
			name: 'GitHub',
			icon: FaGithub,
			link: 'https://github.com/ken-027',
		},
		{
			name: 'LinkedIn',
			icon: FaLinkedinIn,
			link: 'https://www.linkedin.com/in/kenneth-andales/',
		},
		{
			name: 'CodePen',
			icon: AiOutlineCodepen,
			link: 'https://codepen.io/kean7296',
		},
		{
			name: 'Codewars',
			icon: SiCodewars,
			link: 'https://www.codewars.com/users/ken@27',
		},
	],
	//  {
	//   instagram: 'https://www.instagram.com/kenolitan/',
	//   twitter: 'https://twitter.com/whyme_27',
	//   upwork: 'https://www.upwork.com/freelancers/~0130a2e851c15789e3',
	//   onlineJobPh: 'https://www.onlinejobs.ph/jobseekers/info/1870035',
	//   discord: 'KenNeth#2394',
	//   viber: '+639072363667',
	//   whatsapp: '+639072363667',
	// },
	user: {
		fullName: 'Kenneth Andales',
		// email: 'keanolida7296@gmail.com',
		// phone: '+639072363667',
	},
	contacts: [
		{
			name: 'Gmail',
			text: 'keanolida7296@gmail.com',
			icon: SiGmail,
			link: 'mailto:keanolida7296@gmail.com',
		},
		{
			name: 'Phone Number',
			text: '+63 (907) 236 3667',
			icon: FaPhoneAlt,
			link: 'tel:+639072363667',
		},
		{
			name: 'Upwork',
			text: 'Kenneth Andales',
			icon: SiUpwork,
			link: 'https://www.upwork.com/freelancers/~0135c2e932c50f312f',
		},
		{
			name: 'Discord',
			text: 'KenNeth#2394',
			icon: FaDiscord,
			link: 'https://discord.com/users/1003602086493167686',
		},
		{
			name: 'Viber',
			text: '+63 (907) 236 3667',
			icon: FaViber,
			link: '',
		},
		// {
		//   name: 'Whatsapp',
		//   text: '+639072363667',
		//   icon: SiWhatsapp,
		//   link: 'https://www.upwork.com/freelancers/~0130a2e851c15789e3',
		// },
	],
	landing: {
		intro: 'I am a Full Stack Developer. I have gained experience as a developer in different companies. Currently, I\'m focused on building website, desktop, mobile and API services.',
	},
	about: [
		'Hello, My name is Kenneth, and I\'d love coding challenges, learning trend technologies and programming languages.',
		'My interest in programming started months after I shifted my course from a BS in Architecture to a BS in Information Technology. When I answered programming activities in our school, I got motivated bit by bit until I roled as a programmer in our Thesis group and developed a sales and inventory system.',
		'Fast-forward to today, I\'ve gained experience as a developer, and now my main focus these days is learning trending technologies and freelancing while I\'m still waiting and looking for an oppurtunity to work in growing companies.',
	],
	education: [
		{
			degree: 'Bachelor of Sciene in Information Technology',
			year: '2014-2018',
		},
		{
			degree: 'Bachelor of Sciene in Architecture',
			year: '2013-2014',
		},
	],
	websiteRepo: 'https://github.com/ken-027/react-portfolio'
}

export default info
