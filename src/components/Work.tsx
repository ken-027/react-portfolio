import React from 'react'
import { motion } from 'framer-motion'
// import { AnimationOnScroll } from 'react-animation-on-scroll'
import works from '../shared/works'
import { FaShareSquare, FaGithub } from 'react-icons/fa'

import '../styles/sass/components/_work.scss'
import { IWork } from '../ts-interfaces'
import { contentAnimation } from '../config/animate'

const Work = ({
  onViewPort,
}: {
  onViewPort: () => void | Function
}): React.ReactElement => (
  <div
    // {...contentAnimation}
    className='work section'>
    <div className='section-content'>
      <h2 id='work'>Some Things I've Built</h2>
      <motion.div onViewportEnter={() => onViewPort()}></motion.div>
      <motion.p
        {...contentAnimation}
        className='description'>
        As I maintained and developed projects for every company that I've
        worked for, Here's some extra project that I made while I'd still
        learning different technologies and others are in my github repository:
      </motion.p>
      <div className='container'>
        {works.map((work: IWork, index: number) => (
          <motion.div
            key={index}
            {...contentAnimation}
            className='row'>
            <div className='box'>
              <p>{work.title}</p>
              <p>{work.description}</p>
              <ul className='techno'>
                {work.technologies.map((technology: string, index: number) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
              <ul className='links'>
                <li>
                  <a
                    target='_blank'
                    href={work.repository}>
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href={work.website}>
                    <FaShareSquare />
                  </a>
                </li>
              </ul>
            </div>
            <div className='image-container'>
              <motion.div
                {...contentAnimation}
                className='images'>
                {work.images.map((image: string, index: number) => (
                  <img
                    className='img'
                    key={index}
                    src={image}
                    alt={work.title}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
        {/* <AnimationOnScroll
          animateIn='animate__fadeInUp'
          animateOut='animate__fadeOutUp'
          animateOnce={true}
          className='manymore'>
          <p className=''>more to come</p>
        </AnimationOnScroll> */}
      </div>
      <motion.div onViewportEnter={() => onViewPort()}></motion.div>
    </div>
  </div>
)

export default Work
