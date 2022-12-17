import React from 'react'
import logo from '../assets/logo.svg'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineCodepen } from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'
import info from '../shared/info'

import { motion } from 'framer-motion'

import '../styles/sass/components/_sidebar.scss'

const Sidebar = (): React.ReactElement => (
  <aside
    // initial={{
    //   x: -100,
    // }}
    // animate={{
    //   x: [-100, 0],
    // }}
    className='sidebar'>
    <motion.a
      href='/'
      className='animate__animated animate__bounceIn logo-container'>
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
        href={info.socials.codepen}
        target='_blank'>
        <span>
          <AiOutlineCodepen />
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
  </aside>
)

export default Sidebar
