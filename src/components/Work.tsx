import React from 'react'
import { motion } from 'framer-motion'

// import { AnimationOnScroll } from 'react-animation-on-scroll'
import works from '../shared/works'
import restAPI from '../shared/restAPI'

import '../styles/sass/components/_work.scss'
import { IWork } from '../ts-interfaces'
import { contentAnimation } from '../config/animate'
import Images from './work/Images'
import Details from './work/Details'
import WordCard from './work/WordCard'

const Work = ({
  onViewPort,
}: {
  onViewPort: () => void | Function
}): React.ReactElement => {
  return (
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
          learning different technologies and others are in my github
          repository:
        </motion.p>
        <motion.h3
          {...contentAnimation}
          className='description'>
          Website
        </motion.h3>
        <div className='container'>
          {works.map((work: IWork, index: number) => (
            <motion.div
              key={index}
              {...contentAnimation}
              className='row'>
              <div className='box'>
                <Details info={work} />
                <Images info={work} />
              </div>
            </motion.div>
          ))}
          <div className=''>
            <motion.h3
              {...contentAnimation}
              className='description'>
              Rest API
            </motion.h3>
            <div className='work-container'>
              {restAPI.map((api: IWork) => (
                <WordCard info={api} />
              ))}
            </div>
          </div>
          <motion.h3
            {...contentAnimation}
            className='description'>
            Extra Programs
          </motion.h3>
          <motion.h3
            {...contentAnimation}
            className='description'>
            Projects I have handled
          </motion.h3>
        </div>
        <motion.div onViewportEnter={() => onViewPort()}></motion.div>
      </div>
    </div>
  )
}

export default Work
