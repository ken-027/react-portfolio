import { useState, useEffect } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDownload } from 'react-icons/fa'
import '../styles/sass/components/navbar.scss'

import Resume from '../assets/Resume.pdf'

const Nav = () => {
  const [isShow, setisShow] = useState(false)

  useEffect(() => {
    if (isShow) {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      window.document.body.style.overflow = 'hidden'
    } else {
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
      window.document.body.style.overflow = 'auto'
    }
  }, [isShow])

  const toggleNav = () => setisShow((prevState) => !prevState)

  const hideNav = () => setisShow(false)

  return (
    <nav>
      <button className='animate__animated animate__bounceInRight' onClick={toggleNav}>
        <BiMenuAltRight size={50} />
      </button>
      <div className={`menu-container ${isShow ? `show` : ``}`}>
        <button
          className='close'
          onClick={toggleNav}>
          <AiOutlineClose size={40} />
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
          className='btn resume'>
          <FaDownload /> Resume
        </a>
      </div>
    </nav>
  )
}

export default Nav
