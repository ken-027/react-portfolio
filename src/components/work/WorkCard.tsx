import React from 'react'
import { IWork } from '../../ts-interfaces'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { contentAnimation } from '../../config/animate'
import { Popover } from 'antd'

const WorkCard = ({
  info,
}: {
  info: Omit<
    IWork & {
      company?: string
      development?: 'solo' | 'team' | 'duo'
    },
    'website' | 'images' | 'repository'
  > & { repository?: string; website?: string }
}) => {
  const hasRepo: boolean = info.repository ? true : false
  const hasWebsite: boolean = info.website ? true : false

  return (
    <motion.div
      {...contentAnimation}
      className='work-box box'>
      <div className='title'>
        <p className=''>{info.title}</p>
      </div>
      {info.company && <p>{info.company}</p>}
      {info.developmentType && info.development && (
        <p>
          {`${info.developmentType} Development`} ({info.development})
        </p>
      )}
      <p>{info.description}</p>
      <div className='techno-container'>
        {info.technologies.map((technology, index: number) => (
          <p key={index}>{technology}</p>
        ))}
      </div>
      {(hasRepo || hasWebsite) && (
        <ul className='links'>
          <li>
            <Popover
              arrowPointAtCenter
              color={'#E45323'}
              content={
                <div>
                  <p>{info.repository || 'Not uploaded to github'}</p>
                </div>
              }
              title={hasRepo && <p className='popup-title'>Redirect to</p>}
              overlayClassName='popup link'
              placement='bottomLeft'
              trigger='hover'>
              {hasRepo && (
                <a
                  target='_blank'
                  href={info.repository}>
                  <FaGithub />
                </a>
              )}
            </Popover>
          </li>
        </ul>
      )}
    </motion.div>
  )
}

export default WorkCard
