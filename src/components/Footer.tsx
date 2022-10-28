import React from 'react'
import { motion } from 'framer-motion'
import info from '../shared/info'
import '../styles/sass/components/_footer.scss'
import sass from '../assets/sass.png'
import typescript from '../assets/typescript.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import { contentAnimation, footerAnimation } from '../config/animate'

const Footer = (): React.ReactElement => (
  <motion.footer
    {...contentAnimation}
    className='footer'>
    <h4>Design & Built by {info.user.fullName}</h4>
    {/* <a href={`mailto:${info.user.email}`}>{info.user.email}</a>
      <a href={`tel:${info.user.phone}`}>{info.user.phone}</a> */}
    <div className='icons'>
      <motion.img
        {...footerAnimation()}
        src={html}
        alt='html'
      />
      <motion.img
        {...footerAnimation(0.05)}
        src={sass}
        alt='sass'
      />
      <motion.img
        {...footerAnimation(0.1)}
        src={react}
        alt='react'
      />
      <motion.img
        {...footerAnimation(0.15)}
        src={typescript}
        alt='typescript'
      />
    </div>
  </motion.footer>
)

export default Footer
