import logo from '../assets/logo.svg'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import info from '../shared/info'

import '../styles/sass/components/sidebar.scss'

const Sidebar = () => (
  <div className='sidebar'>
    <a
      href='/'
      className='animate__animated animate__bounceIn logo-container'>
      <img
        src={logo}
        className='logo'
        alt='logo'
      />
    </a>
    <div className='social'>
      <a
        className='animate__animated animate__bounceIn ex'
        href={info.socials.github}
        target='_blank'>
        <span>
          <FaGithub />
        </span>
      </a>
      <a
        className='animate__animated animate__bounceIn ex'
        href={info.socials.linkedIn}
        target='_blank'>
        <span>
          <FaLinkedinIn />
        </span>
      </a>
      <a
        className='animate__animated animate__bounceIn ex'
        href={info.socials.instagram}
        target='_blank'>
        <span>
          <FaInstagram />
        </span>
      </a>

      <a
        className='animate__animated animate__bounceIn ex codewars'
        href={info.socials.codewars}
        target='_blank'>
        <span>
          <SiCodewars className='codewarsicon' />
        </span>
      </a>
    </div>
  </div>
)

export default Sidebar
