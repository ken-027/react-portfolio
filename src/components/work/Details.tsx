import React from 'react'
import { IWork } from '../../ts-interfaces'
import { FaShareSquare, FaGithub } from 'react-icons/fa'
import { Popover } from 'antd'

const Details = ({ info }: { info: IWork }) => {
  const onLink = (website: string) => website && window.open(website, '_blank')

  return (
    <div className='details'>
      <p className='title'>
        {info.website ? (
          <a
            target='_blank'
            href={info.website}>
            {info.title} <FaShareSquare />
          </a>
        ) : (
          <Popover
            content={
              <div>
                <p>No website link provided!</p>
              </div>
            }
            trigger='hover'>
            <a>
              {info.title}
              <FaShareSquare />
            </a>
          </Popover>
        )}
      </p>
      <p>{info.description}</p>
      <ul className='techno'>
        {info.technologies.map((technologies: string[]) => (
          <div className='row'>
            {technologies.map((technology: string, index: number) => (
              <li key={index}>{technology}</li>
            ))}
          </div>
        ))}
      </ul>
      <ul className='links'>
        {info.repository ? (
          <li>
            <a
              target='_blank'
              href={info.repository}>
              <FaGithub />
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default Details
