import React from 'react'
import { motion } from 'framer-motion'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import skills from '../shared/skills'
import info from '../shared/info'

import Profile from '../assets/profile.png'
import Graduated from '../assets/graduated.png'

import '../styles/sass/components/_about.scss'
import { ISkill, Skill } from '../ts-interfaces'
import { contentAnimation, labelAnimation } from '../config/animate'

const PopUp = ({ data }: { data: ISkill }): React.ReactElement => (
  <div className='rating animate__animated animate__fadeIn'>
    <h6>Skills Rating</h6>
    <div className='stars'>
      {[Array(10)].map((x: any, index: number) => {
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

const About = ({
  onViewPort,
}: {
  onViewPort: () => void | Function
}): React.ReactElement => {
  const onHover = (e: any): void => {
    // let liParent = e?.target.offsetParent
    // let hoverContainer = liParent.children[1]
    // document.querySelectorAll('li .rating').forEach((el: Element) => {
    //   el.classList.remove('show')
    // })
    // hoverContainer.classList.add('show')
  }

  const onHoverOut = (): void => {
    // document.querySelectorAll('li .rating').forEach((el: Element) => {
    //   el.classList.remove('show')
    // })
  }

  return (
    <div className='about section'>
      <div className='section-content'>
        <motion.h2 id='about'>About Me</motion.h2>
        <motion.div onViewportEnter={() => onViewPort()}></motion.div>
        <div className='me'>
          <div className='description'>
            <motion.p
              // initial={{ opacity: 0, y: 0 }}
              {...contentAnimation}
              className=''>
              {info.about[0]}
            </motion.p>
            <motion.p
              {...contentAnimation}
              className=''>
              {info.about[1]}
            </motion.p>
            <motion.p
              {...contentAnimation}
              className=''>
              {info.about[2]}
            </motion.p>
          </div>
          <motion.div
            {...contentAnimation}
            className='profile'>
            <img
              src={Profile}
              alt=''
            />
          </motion.div>
        </div>
        <div className='education'>
          <motion.h3 {...labelAnimation}>Education</motion.h3>
          <motion.p {...contentAnimation}>
            Here's the course that I take at Palawan State University:
          </motion.p>
          <ul className=''>
            <motion.li {...contentAnimation}>
              <div className=''>
                <img src={Graduated} />
              </div>
              <div className=''>
                <p>{info.education[0].degree}</p>
                <small>{info.education[0].year}</small>
              </div>
            </motion.li>
          </ul>
        </div>
        <motion.div
          {...contentAnimation}
          className='skills'>
          <motion.h3 {...labelAnimation}>Skills</motion.h3>
          <p>
            Here are the following Programming Languages and Frameworks that I
            know:
          </p>
          <div className='skillset'>
            {Object.values(skills).map((skill: Skill, index: number) => (
              <motion.div
                {...contentAnimation}
                // delay={++index * 200}
                key={index}
                className=''>
                <motion.h3
                  {...labelAnimation}
                  className='name'>
                  {skill.name}
                </motion.h3>
                <ul className=''>
                  {skill.skills.map((skill: ISkill, index: number) => (
                    <motion.li
                      {...contentAnimation}
                      className=''
                      onMouseLeave={onHoverOut}
                      key={index}>
                      <a
                        onMouseOver={onHover}
                        className='ex'
                        data-description={skill.description}>
                        <img
                          src={skill.icon}
                          alt={skill.name}
                        />
                        {skill.name}
                      </a>
                      <PopUp data={skill} />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div onViewportEnter={() => onViewPort()}></motion.div>
      </div>
    </div>
  )
}

export default About
