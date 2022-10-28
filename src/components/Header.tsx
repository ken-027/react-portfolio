import React from 'react'
import { motion } from 'framer-motion'
import info from '../shared/info'
import '../styles/sass/components/_header.scss'
import { motionAnimate } from '../config/animate'

const Header = ({
  onViewPort,
}: {
  onViewPort: () => void | Function
}): React.ReactElement => {
  return (
    <motion.section className='header'>
      <motion.div onViewportEnter={() => onViewPort()}></motion.div>
      <div className='section-content'>
        <motion.p {...motionAnimate({})}>Hi, my name is</motion.p>
        <motion.h1 {...motionAnimate({ delay: 0.1 })}>
          {info.user.fullName}
        </motion.h1>
        <motion.p {...motionAnimate({ delay: 0.2 })}>
          {info.landing.intro}
        </motion.p>
      </div>
      <motion.div onViewportEnter={() => onViewPort()}></motion.div>
    </motion.section>
  )
}

export default Header
