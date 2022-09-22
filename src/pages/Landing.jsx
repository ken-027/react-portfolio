import { useState } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Experience from '../components/Experience'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Loading from './Loading'

import info from '../shared/info'

const Landing = () => {
  const [isLoading, setisLoading] = useState(true)

  setTimeout(() => {
    setisLoading(false)
  }, 3000)

  if (isLoading) return <Loading />

  return (
    <div className='container animate__animated animate__fadeIn'>
      <Nav />
      <section className='header'>
        <p className='animate__animated animate__backInLeft'>Hi, my name is</p>
        <h1 className='name animate__animated animate__bounceIn'>
          {info.user.fullName}
        </h1>
        <p className='animate__animated animate__fadeInUp animate__fadeIn'>{info.landing.intro}</p>
      </section>
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
