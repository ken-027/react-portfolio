import React from 'react'
import logo from '../assets/logo.svg'
import info from '../shared/info'
import { ISocial } from '../ts-interfaces'
import { motion } from 'framer-motion'
import { Popover } from 'antd'

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
          <Popover
            color={'#E45323'}
            arrowPointAtCenter
            content={
              <div>
                <p>{social.name}</p>
              </div>
            }
            placement='right'
            overlayClassName='popup'
            trigger='hover'
            key={index}>
            <a
              className='animate__animated animate__bounceIn ex'
              href={social.link}
              target='_blank'>
              <span>
                {
                  <Icon
                    className={social.name == 'Codewars' ? 'codewarsicon' : ''}
                  />
                }
              </span>
            </a>
          </Popover>
        )
      })}
    </div>
  </aside>
)

export default Sidebar
