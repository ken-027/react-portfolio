import { workNine, workTen } from './images'
import info from './info'
import skills from './skills'

type IWork = {
  title: string
  description: string
  downloadLink: string
  website: string,
  repository: string
  technologies: string[]
  images: string[]
  developmentType: 'Frontend' | 'Backend' | 'Full Stack'
}

const mobiles: IWork[] = [
	{
		title: 'MangaGo Android',
		description: 'An embedded manga site to android application using webview for personal only',
		repository: `${info.socials[0].link}/mangagome-android`,
		website: '',
		downloadLink:
      'https://kenneth-andales.github.io/android-mangago/release/app-release.apk',
		technologies: [
			skills.language.skills[5].name,
			skills.frontend.skills[4].name,
		],
		images: workNine,
		developmentType: 'Frontend',
	},
	{
		title: '9anime Android',
		description: 'An embedded anime site to android application using webview for personal only',
		repository: `${info.socials[0].link}/9anime-android`,
		website: '',
		downloadLink:
      'https://kenneth-andales.github.io/android-9anime/release/app-release.apk',
		technologies: [
			skills.language.skills[5].name,
			skills.frontend.skills[4].name,
		],
		images: workTen,
		developmentType: 'Frontend',
	},
]

export default mobiles
