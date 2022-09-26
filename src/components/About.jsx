import { useRef } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import skills from '../shared/skills'
import info from '../shared/info'
import motionConfig from '../shared/motionConfig'

import Profile from '../assets/profile.png'
import Book from '../assets/book.png'
import Graduated from '../assets/graduated.png'

const PopUp = ({ data }) => (
  <div className='rating animate__animated animate__fadeIn'>
    <h6>Skills Rating</h6>
    <div className='stars'>
      {[...Array(10)].map((x, index) => {
        return data.rating > index ? (
          <AiFillStar key={index} />
        ) : (
          <AiOutlineStar key={index} />
        )
      })}
      |{data.rating}/10
    </div>
    <p>{data.description}</p>
  </div>
)

const About = () => {
  const onHover = (e) => {
    return false
    let liParent = e.target.offsetParent
    let hoverContainer = liParent.children[1]

    document.querySelectorAll('li .rating').forEach((el) => {
      el.classList.remove('show')
    })

    hoverContainer.classList.add('show')
  }

  const onHoverOut = (e) => {
    return false
    document.querySelectorAll('li .rating').forEach((el) => {
      el.classList.remove('show')
    })
  }

  return (
    <MotionConfig viewport={{ once: true }}>
      <motion.div
        style={{ y: '0%' }}
        initial={{ y: '40vh' }}
        transition={motionConfig.transition}
        whileInView={motionConfig.inView}
        viewport={{ once: true }}
        className='about section'>
        <div className='section-content'>
          <h2 id='about'>About Me</h2>
          <div className='me'>
            <div className='description'>
              <motion.p
                transition={motionConfig.transition}
                initial={motionConfig.initial}
                whileInView={motionConfig.inView}>
                {info.about[0]}
              </motion.p>
              <motion.p
                transition={motionConfig.transition({ delay: 0.15 })}
                initial={motionConfig.initial}
                whileInView={motionConfig.inView}>
                {info.about[1]}
              </motion.p>
              <motion.p
                transition={motionConfig.transition({ delay: 0.2 })}
                initial={motionConfig.initial}
                whileInView={motionConfig.inView}>
                {info.about[2]}
              </motion.p>
            </div>
            <motion.div
              transition={motionConfig.transition({ delay: 0.25 })}
              initial={motionConfig.initial}
              whileInView={motionConfig.inView}
              className='profile'>
              <img
                src={Profile}
                alt=''
              />
            </motion.div>
          </div>

          <motion.div
            transition={motionConfig.transition}
            initial={motionConfig.initial}
            whileInView={motionConfig.inView}
            className='education'>
            <h3>Education</h3>
            <p>
              Here’s the following that I’d studied at Palawan State University:
            </p>
            <ul className=''>
              <motion.li
                transition={motionConfig.transition({ delay: 0.1 })}
                initial={motionConfig.initial}
                whileInView={motionConfig.inView}>
                <div className=''>
                  <img src={Graduated} />
                </div>
                <div className=''>
                  <p>{info.education[0].degree}</p>
                  <small>{info.education[0].year}</small>
                </div>
              </motion.li>
              <motion.li
                transition={motionConfig.transition({ delay: 0.15 })}
                initial={motionConfig.initial}
                whileInView={motionConfig.inView}>
                <div className=''>
                  <img src={Book} />
                </div>
                <div className=''>
                  <p>{info.education[1].degree}</p>
                  <small>{info.education[1].year}</small>
                </div>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            transition={motionConfig.transition}
            initial={motionConfig.initial}
            whileInView={motionConfig.inView}
            className='skills'>
            <h3>Skills</h3>
            <p>Here’s the following technologies that I knew:</p>
            <div className='skillset'>
              {Object.values(skills).map((skill, index) => (
                <motion.ul
                  transition={motionConfig.transition({
                    delay: 0.05 * ++index,
                  })}
                  initial={motionConfig.initial}
                  whileInView={motionConfig.inView}
                  className=''
                  key={index}>
                  {skill.map((skill, index) => (
                    <li
                      className=''
                      onMouseLeave={onHoverOut}
                      key={index}>
                      <a
                        className='ex'
                        onMouseOver={onHover}
                        data-description={skill.description}>
                        <img
                          src={skill.icon}
                          alt={skill.name}
                        />
                        {skill.name}
                      </a>
                      <PopUp data={skill} />
                    </li>
                  ))}
                </motion.ul>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  )
}

export default About
