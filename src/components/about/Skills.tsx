import React from 'react'
import { motion } from 'framer-motion'
import { contentAnimation, labelAnimation } from '../../config/animate'
import { ISkill, Skill } from '../../ts-interfaces'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Skills = ({ skill }: { skill: Skill }) => {
  // const PopUp = ({ data }: { data: ISkill }): React.ReactElement => (
  //   <div className='rating animate__animated animate__fadeIn'>
  //     <h6>Skills Rating</h6>
  //     <div className='stars'>
  //       {[Array(10)].map((x: any, index: number) => {
  //         return data.rating > index ? (
  //           <AiFillStar key={index} />
  //         ) : (
  //           <AiOutlineStar key={index} />
  //         )
  //       })}
  //       |{data.rating}/10
  //     </div>
  //     <p>{data.description}</p>
  //   </div>
  // )

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
            {/* <PopUp data={skill} /> */}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Skills
