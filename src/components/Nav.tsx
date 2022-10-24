import React, { useState, useEffect } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDownload } from 'react-icons/fa'
import '../styles/sass/components/_navbar.scss'

import Resume from '../assets/Resume.pdf'

const Nav = (): React.ReactElement => {
  const [isShow, setisShow] = useState(false)
  const [screenWidth, setscreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (isShow) {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      window.document.body.style.overflow = 'hidden'
    } else {
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
      window.document.body.style.overflow = 'auto'
    }

    if (screenWidth > 1025) {
      setisShow(false)
    }
  }, [isShow, screenWidth])

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => setscreenWidth(window.innerWidth),
      false,
    )
  }, [])

  const toggleNav = () => setisShow((prevState) => !prevState)
  const hideNav = () => setisShow(false)

  return (
    <nav>
      <div className='section-content animate__animated animate__bounceInRight'>
        <a
          href={Resume}
          target='_blank'
          className='btn resume desktop'>
          <FaDownload /> Resume
        </a>
      </div>
      <button
        className='animate__animated animate__bounceInRight'
        onClick={toggleNav}>
        <BiMenuAltRight size={45} />
      </button>
      <div className={`menu-container ${isShow ? `show` : ``}`}>
        <button
          className='close'
          onClick={toggleNav}>
          <AiOutlineClose size={35} />
        </button>
        <ul className=''>
          <li className=''>
            <a
              onClick={hideNav}
              href='#about'
              className='animate__animated animate__bounceInRight ex'>
              About
            </a>
          </li>
          <li className=''>
            <a
              onClick={hideNav}
              href='#experience'
              className='expe animate__animated animate__bounceInRight ex'>
              Experience
            </a>
          </li>
          <li className=''>
            <a
              onClick={hideNav}
              href='#work'
              className='animate__animated animate__bounceInRight ex'>
              Work
            </a>
          </li>
          <li className=''>
            <a
              onClick={hideNav}
              href='#contact'
              className='animate__animated animate__bounceInRight ex'>
              Contact
            </a>
          </li>
        </ul>
        <a
          href={Resume}
          target='_blank'
          className='btn resume mobile'>
          <FaDownload /> Resume
        </a>
      </div>
    </nav>
  )
}

export default Nav
