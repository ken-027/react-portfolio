import React, { useState } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Experience from '../components/Experience'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Loading from './Loading'
import Header from '../components/Header'

import '../styles/sass/components/_landing.scss'

const Landing = (): React.ReactElement => {
  const [isLoading, setisLoading] = useState(true)

  setTimeout(() => {
    setisLoading(false)
  }, 3000)

  if (isLoading) return <Loading />

  return (
    <div
      id='scroll'
      className='container animate__animated animate__fadeIn'>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
      <Sidebar />
    </div>
  )
}

export default Landing
