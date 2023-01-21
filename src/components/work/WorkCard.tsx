import React from 'react'
import { IWork } from '../../ts-interfaces'
import { motion } from 'framer-motion'
import { FaGithub, FaShareSquare } from 'react-icons/fa'
import { contentAnimation } from '../../config/animate'
import { Popover } from 'antd'

const WorkCard = ({
	info,
	isProject,
}: {
  isProject?: boolean
  info: Omit<
    IWork & {
      applicationType?: 'Desktop' | 'Mobile' | 'Website' | 'API'
      company?: string
      development?: 'solo' | 'team' | 'duo'
    },
    'website' | 'images' | 'repository'
  > & { repository?: string; website?: string }
}) => {
	const hasRepo: boolean = info.repository ? true : false
	const hasWebsite: boolean = info.website ? true : false

	return (
		<motion.div
			{...contentAnimation}
			className='work-box box'>
			<div className='title-container'>
				<p className='title'>{info.title}</p>
				{(info.developmentType || info.development) && (
					<p>
						{`${info.developmentType} Development`} {info.development && `(${info.development})`}
					</p>
				)}
				{info.applicationType && <p className=''>{`${info.applicationType} Application`}</p>}
				{info.company && <p className='company'>{info.company}</p>}
			</div>
			<p>{info.description}</p>
			<div className='techno-container'>
				{info.technologies.map((technology, index: number) => (
					<p key={index}>{technology}</p>
				))}
			</div>
			{(hasRepo || isProject) && (
				<ul className='links'>
					{hasRepo && (
						<li>
							<Popover
								arrowPointAtCenter
								color={'#E45323'}
								content={
									<div>
										<p>{info.repository || 'Not uploaded to github'}</p>
									</div>
								}
								title={hasRepo && <p className='popup-title'>Redirect to</p>}
								overlayClassName='popup link'
								placement='bottomLeft'
								trigger='hover'>
								{hasRepo && (
									<a
										target='_blank'
										href={info.repository} rel="noreferrer">
										<FaGithub />
									</a>
								)}
							</Popover>
						</li>
					)}
					{isProject && (
						<li>
							<Popover
								arrowPointAtCenter
								color={'#E45323'}
								content={
									<div>
										<p>{info.website || 'No shared link of deployment'}</p>
									</div>
								}
								title={hasWebsite && <p className='popup-title'>Redirect to</p>}
								overlayClassName='popup link'
								placement='bottomLeft'
								trigger='hover'>
								{hasWebsite ? (
									<a
										target='_blank'
										href={info.website} rel="noreferrer">
										<FaShareSquare />
									</a>
								) : (
									<a>
										<FaShareSquare />
									</a>
								)}
							</Popover>
						</li>
					)}
				</ul>
			)}
		</motion.div>
	)
}

export default WorkCard
