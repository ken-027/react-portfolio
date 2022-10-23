import React from 'react'
import logo from '../assets/logo.svg'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import info from '../shared/info'

import { motion } from 'framer-motion'
import { motionAnimate } from '../config/animate'

import '../styles/sass/components/_sidebar.scss'

const Sidebar = (): React.ReactElement => (
  <div className='sidebar'>
    <motion.a
      href='/'
      {...motionAnimate({})}
      className='logo-container'>
      <img
        src={logo}
        className='logo'
        alt='logo'
      />
    </motion.a>
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
