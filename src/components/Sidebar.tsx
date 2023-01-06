import React from 'react'
import logo from '../assets/logo.svg'
import info from '../shared/info'
import { ISocial } from '../ts-interfaces'
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
      {info.socials.map((social: ISocial, index: number) => {
        const Icon = social.icon as React.ElementType
        return (
          <a
            key={index}
            className='animate__animated animate__bounceIn ex'
            href={social.link}
            title={social.name}
            target='_blank'>
            <span>
              {
                <Icon
                  className={social.name == 'Codewars' ? 'codewarsicon' : ''}
                />
              }
            </span>
          </a>
        )
      })}
    </div>
  </aside>
)

export default Sidebar
