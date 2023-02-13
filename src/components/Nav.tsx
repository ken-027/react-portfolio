import React, { useState, useEffect } from 'react'
// import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDownload } from 'react-icons/fa'
import '../styles/sass/components/_navbar.scss'
import Scrollbar from 'smooth-scrollbar'
import { motion } from 'framer-motion'
import { navAnimation } from '../config/animate'
import { Spiral as Hamburger } from 'hamburger-react'

// import Resume from '../assets/Resume.pdf'

const Nav = (): React.ReactElement => {
	const [isShow, setisShow] = useState(false)
	const [screenWidth, setscreenWidth] = useState(window.innerWidth)

	useEffect(() => {
		const scroll = document.getElementById('scroll-container')! as HTMLElement
		const scrollbar = Scrollbar.get(scroll)! as Scrollbar
		if (isShow) {
			scrollbar?.updatePluginOptions('modal', { open: true })
			Scrollbar.detachStyle()
		} else {
			scrollbar?.updatePluginOptions('modal', { open: false })
			Scrollbar.attachStyle()
		}

		if (screenWidth > 1025) setisShow(false)
	}, [isShow, screenWidth])

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
	}, [])

	const toggleNav = () => setisShow((prevState) => !prevState)
	const hideNav = () => setisShow(false)

	return (
		<nav>
			<motion.div
				// {...navAnimation()}
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: 'anticipate' }}
				className='section-content'>
				<a
					href='./resume.pdf'
					target='_blank'
					className='btn resume desktop'
					rel='noreferrer'>
					<FaDownload /> Resume
				</a>
			</motion.div>
			{/* <motion.button
				transition={{
					ease: 'easeInOut',
				}}
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				className=''
				onClick={toggleNav}>
				<HiOutlineMenuAlt3 size={40} />
			</motion.button> */}
			<motion.button
				transition={{
					ease: 'easeInOut',
				}}
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}>
				<Hamburger
					toggled={isShow}
					toggle={toggleNav}
					size={30}
					direction='right'
					// duration={0.8}
					distance='lg'
					color='#019FC1'
					rounded
					easing='ease-in-out'
				/>
			</motion.button>

			{isShow && screenWidth < 1026 ? (
				<div className={'menu-container show'}>
					<motion.button
						transition={{ duration: 0.5 }}
						// whileInView={{ opacity: [0, 0.5, 1] }}
						animate={{ opacity: [0, 0.5, 1] }}
						className='close'
						onClick={toggleNav}>
						<AiOutlineClose size={35} />
					</motion.button>
					<ul className=''>
						<motion.li
							{...navAnimation(0.1, false)}
							className=''>
							<a
								onClick={hideNav}
								href='#about'
								className=' ex'>
                About
							</a>
						</motion.li>
						<motion.li
							{...navAnimation(0.1, false)}
							className=''>
							<a
								onClick={hideNav}
								href='#experience'
								className='expe ex'>
                Experience
							</a>
						</motion.li>
						<motion.li
							{...navAnimation(0.15, false)}
							className=''>
							<a
								onClick={hideNav}
								href='#work'
								className='ex'>
                Work
							</a>
						</motion.li>
						<motion.li
							{...navAnimation(0.2, false)}
							className=''>
							<a
								onClick={hideNav}
								href='#contact'
								className='ex'>
                Contact
							</a>
						</motion.li>
					</ul>
					<motion.a
						{...navAnimation(0.3, false)}
						href='resume.pdf'
						target='_blank'
						className='btn resume mobile'>
						<FaDownload /> Resume
					</motion.a>
				</div>
			) : null}
		</nav>
	)
}

export default Nav
