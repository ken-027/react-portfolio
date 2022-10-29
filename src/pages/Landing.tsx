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

import '../styles/sass/components/_landing.scss'
import NavDescktop from '../components/NavDesktop'

const Landing = (): React.ReactElement => {
  Scrollbar.use(ModalPlugin)
  Scrollbar.use(AnchorPlugin)
  Scrollbar.use(OverscrollPlugin)
  const [isLoading, setisLoading] = useState(true)
  const [section, setSection] = useState('')

  useEffect(() => {
    if (!isLoading) {
      const scroll = document.getElementById('scroll-container')! as HTMLElement
      const scrollbar = Scrollbar.init(scroll, {
        damping: 0.08,
        renderByPixels: true,
        plugins: {
          overscroll: {
            effect: 'bounce',
          },
        },
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
      <div
        id='scroll-container'
        className=''>
        <div className='container'>
          <Nav />
          <Header onViewPort={() => setSection('heeader')} />
          <About onViewPort={() => setSection('about')} />
          <Experience onViewPort={() => setSection('experience')} />
          <Work onViewPort={() => setSection('work')} />
          <Contact onViewPort={() => setSection('contact')} />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Landing
