import { useState, useEffect } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDownload } from 'react-icons/fa'
import '../styles/sass/components/navbar.scss'

import Resume from '../assets/Resume.pdf'

const Nav = () => {
  const [isShow, setisShow] = useState(false)
  const [screenWidth, setscreenWidth] = useState(window.innerWidth)

  // const isMobile = useMemo(() => {
  //   return window.innerWidth <= 1025
  // }, [window.innerWidth])

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
      false
    )
  }, [])

  const toggleNav = () => setisShow((prevState) => !prevState)

  const hideNav = () => setisShow(false)

  return (
    <nav>
      <div className='section-content'>
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
              className=''>
              About
            </a>
          </li>
          <li className=''>
            <a
              onClick={hideNav}
              href='#experience'
              className='expe'>
              Experience
            </a>
          </li>
          <li className=''>
            <a
              onClick={hideNav}
              href='#work'
              className=''>
              Work
            </a>
          </li>
          <li className=''>
            <a
              onClick={hideNav}
              href='#contact'
              className=''>
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
