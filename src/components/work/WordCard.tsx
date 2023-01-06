import React from 'react'
import { IWork } from '../../ts-interfaces'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { contentAnimation } from '../../config/animate'

const WordCard = ({ info }: { info: IWork }) => {
  return (
    <motion.div
      {...contentAnimation}
      className='work-box'>
      <div className='title'>
        <p className=''>{info.title}</p>
        {info.repository && (
          <a
            href={info.repository}
            target='_blank'>
            <FaGithub />
          </a>
        )}
      </div>
      <p>{info.description}</p>
      <div className='technologies'>
        {info.technologies.map((technologies) =>
          technologies.map((technology, index: number) => (
            <p key={index}>{technology}</p>
          )),
        )}
      </div>
    </motion.div>
  )
}

export default WordCard
