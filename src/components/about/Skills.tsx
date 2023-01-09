import React from 'react'
import { motion } from 'framer-motion'
import { contentAnimation, labelAnimation } from '../../config/animate'
import { ISkill, Skill } from '../../ts-interfaces'
import { Popover } from 'antd'

const Skills = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      {...contentAnimation}
      // delay={++index * 200}
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
            key={index}>
            <Popover
              color={'#E45323'}
              autoAdjustOverflow
              // title={`Rating ${skill.rating}`}
              title={
                <p className='popup-title'>
                  {skill.name} <small>Rating {skill.rating}</small>
                </p>
              }
              placement='bottomLeft'
              overlayClassName='popup skill'
              content={
                <div>
                  <p>{skill.description}</p>
                </div>
              }
              trigger={['hover', 'click']}>
              <a
                className='ex'
                data-description={skill.description}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                />
                {skill.name}
              </a>
              {/* <PopUp data={skill} /> */}
            </Popover>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Skills
