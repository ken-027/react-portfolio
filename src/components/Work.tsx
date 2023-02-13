import React from 'react'
import { motion } from 'framer-motion'

// import { AnimationOnScroll } from 'react-animation-on-scroll'
import works from '../shared/works'
import restAPI from '../shared/restAPI'
import extraPrograms from '../shared/extraPrograms'
import projects from '../shared/projects'

import '../styles/sass/components/_work.scss'
import { IWork } from '../ts-interfaces'
import { contentAnimation } from '../config/animate'
import Images from './work/Images'
import Details from './work/Details'
import WorkCard from './work/WorkCard'
import EmptyBox from '../assets/empty.png'
import Popover from 'antd/lib/popover'
import mobiles from '../shared/mobiles'
import desktops from '../shared/desktops'

const Work = ({
	onViewPort,
}: {
  onViewPort: () => void | Function
}): React.ReactElement => {
	return (
		<div
			// {...contentAnimation}
			className='work section'>
			<div className='section-content'>
				<h2 id='work'>Some Things I've Built</h2>
				<motion.div onViewportEnter={() => onViewPort()}></motion.div>
				<motion.p
					{...contentAnimation}
					className='description'>
          As I maintained and developed projects for every company that I've
          worked for, Here's some extra project that I made while I'd still
          learning different technologies and others are in my github
          repository:
				</motion.p>
				<div className='container'>
					<div className=''>
						<motion.h3
							{...contentAnimation}
							className='description'>
              Websites
						</motion.h3>
						<div className='work-container'>
							{works.map((work: IWork, index: number) => (
								<motion.div
									key={index}
									{...contentAnimation}
									className='row'>
									<div className='box'>
										<Details totalSamples={work.images.length} info={work} />
										<Images info={work} />
									</div>
								</motion.div>
							))}
						</div>
					</div>
					<div className=''>
						<motion.h3
							{...contentAnimation}
							className='description'>
              Desktop
						</motion.h3>
						<div className='work-container'>
							<div className='no-project'>
								{desktops.length ? (
									<p>List the desktops</p>
								) : (
									<Popover
										arrowPointAtCenter
										color={'#E45323'}
										content={
											<div>
												<p>Will have soon</p>
											</div>
										}
										// title='Will have soon'
										overlayClassName='popup link'
										placement='bottom'
										trigger={['hover', 'click']}>
										<motion.img
											{...contentAnimation}
											src={EmptyBox}
											alt='empty box'
										/>
										<motion.p
											className='text'
											{...contentAnimation}>
                      No application made
										</motion.p>
									</Popover>
								)}
							</div>
						</div>
					</div>
					<div className=''>
						<motion.h3
							{...contentAnimation}
							className='description'>
              Mobile
						</motion.h3>
						<div className='work-container'>
							<div className='no-project'>
								{mobiles.length ? (
									<p>List the mobiles</p>
								) : (
									<Popover
										arrowPointAtCenter
										color={'#E45323'}
										content={
											<div>
												<p>Will have soon</p>
											</div>
										}
										// title='Will have soon'
										overlayClassName='popup link'
										placement='bottom'
										trigger={['hover', 'click']}>
										<motion.img
											{...contentAnimation}
											src={EmptyBox}
											alt='empty box'
										/>
										<motion.p
											className='text'
											{...contentAnimation}>
                      No application made
										</motion.p>
									</Popover>
								)}
							</div>
						</div>
					</div>
					<div className=''>
						<motion.h3
							{...contentAnimation}
							className='description'>
              API
						</motion.h3>
						<div className='work-container'>
							{restAPI.map((api, index: number) => (
								<WorkCard
									key={index}
									info={api}
								/>
							))}
						</div>
					</div>
					<div className=''>
						<motion.h3
							{...contentAnimation}
							className='description'>
              Extra Programs
						</motion.h3>
						<div className='work-container'>
							{extraPrograms.map((extra, index: number) => (
								<WorkCard
									key={index}
									info={extra}
								/>
							))}
						</div>
					</div>
					<div className=''>
						<motion.h3
							{...contentAnimation}
							className='description'>
              Projects I have handled
						</motion.h3>
						<div className='work-container'>
							{projects.map((project, index: number) => (
								<WorkCard
									isProject
									key={index}
									info={project}
								/>
							))}
						</div>
					</div>
				</div>
				<motion.div onViewportEnter={() => onViewPort()}></motion.div>
			</div>
		</div>
	)
}

export default Work
