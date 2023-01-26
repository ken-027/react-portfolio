import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Experience from '../components/Experience'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Loading from './Loading'
import Header from '../components/Header'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { ModalPlugin, AnchorPlugin } from '../lib/scrollPlugin'
import { RiArrowUpSLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

import '../styles/sass/components/_landing.scss'
import NavDescktop from '../components/NavDesktop'

const Landing = (): React.ReactElement => {
	Scrollbar.use(ModalPlugin)
	Scrollbar.use(AnchorPlugin)
	Scrollbar.use(OverscrollPlugin)
	const [isLoading, setisLoading] = useState(true)
	const [section, setSection] = useState('')
	const [showScrollTop, setshowScrollTop] = useState(false)

	useEffect(() => {
		if (!isLoading) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const scroll = document.getElementById('scroll-container')! as HTMLElement
			// const scrollTop = document.getElementById('scrollTop')! as HTMLElement
			const scrollbar = Scrollbar.init(scroll, {
				damping: 0.05,
				renderByPixels: true,
				plugins: {
					overscroll: {
						effect: 'bounce',
					},
				},
				// continuousScrolling: true,
			})
			scrollbar.track.xAxis.element.remove()
		}
	}, [isLoading])

	setTimeout(() => {
		setisLoading(false)
	}, 2800)

	if (isLoading) return <Loading />

	return (
		<>
			<Sidebar />
			<NavDescktop section={section} />
			<motion.button
				onClick={() => {
					const scroll = document.getElementById(
						'scroll-container',
					)! as HTMLElement
					const scrollbar = Scrollbar.get(scroll)
					scrollbar?.scrollIntoView(
            document.getElementById('header')! as HTMLElement,
					)
				}}
				id='scrollTop'
				className={`scrollTop ${showScrollTop ? 'show' : 'hide'}`}>
				<RiArrowUpSLine />
			</motion.button>
			<div
				id='scroll-container'
				className=''>
				<div className='container'>
					<Nav />
					<Header
						onViewPort={() => {
							setSection('header')
							setshowScrollTop(false)
						}}
						onViewPortLeave={() => {
							setshowScrollTop(true)
						}}
					/>
					<About
						onViewPort={() => {
							setSection('about')
							setshowScrollTop(true)
						}}
					/>
					<Experience
						onViewPort={() => {
							setSection('experience')
							setshowScrollTop(true)
						}}
					/>
					<Work
						onViewPort={() => {
							setSection('work')
							setshowScrollTop(true)
						}}
					/>
					<Contact
						onViewPort={() => {
							setSection('contact')
							setshowScrollTop(true)
						}}
					/>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default Landing
