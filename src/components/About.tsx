/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import { motion } from 'framer-motion'

import skills from '../shared/skills'
import info from '../shared/info'

import Graduated from '../assets/graduated.png'

import '../styles/sass/components/_about.scss'
import { Skill } from '../ts-interfaces'
import { contentAnimation, labelAnimation } from '../config/animate'

import Skills from './about/Skills'
import Image from 'antd/lib/image'

const About = ({
	onViewPort,
}: {
  onViewPort: () => void | Function
}): React.ReactElement => {
	return (
		<div className='about section'>
			<div className='section-content'>
				<motion.h2 id='about'>About Me</motion.h2>
				<motion.div onViewportEnter={() => onViewPort()}></motion.div>
				<div className='me'>
					<div className='description'>
						<motion.p
							// initial={{ opacity: 0, y: 0 }}
							{...contentAnimation}
							className=''>
							{info.about[0]}
						</motion.p>
						<motion.p
							{...contentAnimation}
							className=''>
							{info.about[1]}
						</motion.p>
						<motion.p
							{...contentAnimation}
							className=''>
							{info.about[2]}
						</motion.p>
					</div>
					<motion.div
						{...contentAnimation}
						className='profile'>
						{/* <img
              src={Profile}
              alt=''
            /> */}
						<Image
							// width={200}
							alt='Profile'
							src='./Profile.png'
							preview={{
								scaleStep: 0.1,
								destroyOnClose: true,
								// src: './Profile.png'
							}}
						/>
					</motion.div>
				</div>
				<div className='education'>
					<motion.h3 {...labelAnimation}>Education</motion.h3>
					<motion.p {...contentAnimation}>
            Here's the course that I take at Palawan State University:
					</motion.p>
					<ul className=''>
						<motion.li {...contentAnimation}>
							<div className=''>
								<img src={Graduated} />
							</div>
							<div className=''>
								<p>{info.education[0].degree}</p>
								<small>{info.education[0].year}</small>
							</div>
						</motion.li>
					</ul>
				</div>
				<motion.div
					{...contentAnimation}
					className='skills'>
					<motion.h3 {...labelAnimation}>Skills</motion.h3>
					<p>
            Here are the following Programming Languages and Frameworks that I
            know:
					</p>
					<div className='skillset'>
						{Object.values(skills).map((skill: Skill, index: number) => (
							<Skills
								key={index}
								skill={skill}
							/>
						))}
					</div>
				</motion.div>
				<motion.div onViewportEnter={() => onViewPort()}></motion.div>
			</div>
		</div>
	)
}

export default About
