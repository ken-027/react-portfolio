import logo from '../assets/logo.svg'
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'

import '../styles/sass/components/sidebar.scss'

const Sidebar = () => (
  <div className='sidebar'>
    <a
      href='/'
      className='animate__animated animate__bounceIn'>
      <img
        src={logo}
        className='logo'
        alt='logo'
      />
    </a>
    <div className='social'>
      <a
        className='animate__animated animate__bounceIn'
        href='https://www.linkedin.com/in/kenneth-andales-20ba62240/'
        target='_blank'>
        <FaLinkedinIn />
      </a>
      <a
        className='animate__animated animate__bounceIn'
        href='https://www.instagram.com/kenolitan/'
        target='_blank'>
        <FaInstagram />
      </a>
      <a
        className='animate__animated animate__bounceIn'
        href='https://twitter.com/whyme_27'
        target='_blank'>
        <FaTwitter />
      </a>
      <a
        className='animate__animated animate__bounceIn'
        href='https://www.codewars.com/users/ken@27'
        target='_blank'>
        <SiCodewars className='codewarsicon' />
      </a>
    </div>
  </div>
)

export default Sidebar
