import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { contentAnimation } from '../config/animate'
import { IExperience } from '../ts-interfaces'

const Description = ({
  experience,
}: {
  experience: IExperience
}): React.ReactElement => {
  useEffect(() => {}, [])

  const ListItem = ({ text, index }: { text: string; index: number }) => {
    return (
      <motion.li
        transition={{ delay: 0.1 * index }}
        animate={{ opacity: [0, 0.5, 1], y: [50, 0] }}>
        {text}
      </motion.li>
    )
  }

  return (
    <motion.div
      {...contentAnimation}
      className='box'>
      <p>{experience.position}</p>
      <p className=''>@{experience.company}</p>
      <small>{experience.location}</small>
      <small>
        {experience.date.started} -{' '}
        {experience.date.ended}
      </small>
      <ul>
        {experience.description.map(
          (description: string, index: number) => (
            <ListItem
              key={index}
              text={description}
              index={index}
            />
          ),
        )}
      </ul>
    </motion.div>
  )
}

export default Description
