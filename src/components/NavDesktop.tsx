import React, { useState, useEffect } from 'react'
import '../styles/sass/components/_navbar.scss'
import { motion } from 'framer-motion'
import { navAnimation } from '../config/animate'

const NavDescktop = ({ section }: { section: string }): React.ReactElement => {
	const [screenWidth, setscreenWidth] = useState(window.innerWidth)

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	useEffect(() => {}, [screenWidth])

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => setscreenWidth(window.innerWidth),
			false,
		)

		return () =>
			window.removeEventListener('resize', () =>
				setscreenWidth(window.innerWidth),
			)
	}, [screenWidth])

	if (screenWidth < 1025) return <></>

	return (
		<nav className='desktop'>
			<div className='menu-container-desktop'>
				<ul className=''>
					<motion.li
						{...navAnimation(0.1, false)}
						className=''>
						<a
							href='#about'
							className={`ex ${
								section.toLowerCase() === 'about' ? 'active' : ''
							}`}>
              About
						</a>
					</motion.li>
					<motion.li
						{...navAnimation(0.1, false)}
						className=''>
						<a
							href='#experience'
							className={`expe ex ${
								section.toLowerCase() === 'experience' ? 'active' : ''
							}`}>
              Experience
						</a>
					</motion.li>
					<motion.li
						{...navAnimation(0.15, false)}
						className=''>
						<a
							href='#work'
							className={`ex ${
								section.toLowerCase() === 'work' ? 'active' : ''
							}`}>
              Work
						</a>
					</motion.li>
					<motion.li
						{...navAnimation(0.2, false)}
						className=''>
						<a
							href='#contact'
							className={`ex ${
								section.toLowerCase() === 'contact' ? 'active' : ''
							}`}>
              Contact
						</a>
					</motion.li>
				</ul>
			</div>
		</nav>
	)
}

export default NavDescktop
