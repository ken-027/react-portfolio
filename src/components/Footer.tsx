import React from 'react'
import { motion } from 'framer-motion'
import info from '../shared/info'
import { BiGitRepoForked } from 'react-icons/bi'
import '../styles/sass/components/_footer.scss'
import { Popover } from 'antd'
import { contentAnimation } from '../config/animate'

const Footer = (): React.ReactElement => (
  <motion.footer
    {...contentAnimation}
    className='footer'>
    <h4>Design & Built by {info.user.fullName}</h4>
    {/* <a href={`mailto:${info.user.email}`}>{info.user.email}</a>
      <a href={`tel:${info.user.phone}`}>{info.user.phone}</a> */}
    <div className='links'>
      <ul className='navigation'>
        <motion.li {...contentAnimation}>
          <a href='#about'>About</a>
        </motion.li>
        <motion.li {...contentAnimation}>
          <a href='#experience'>Experience</a>
        </motion.li>
        <motion.li {...contentAnimation}>
          <a href='#work'>Work</a>
        </motion.li>
        <motion.li {...contentAnimation}>
          <a href='#contact'>Contact</a>
        </motion.li>
      </ul>

      <ul className='contacts'>
        {info.contacts.map((contact, index: number) => {
          const Icon = contact.icon as React.ElementType
          return (
            <li key={index}>
              <Popover
                arrowPointAtCenter
                color={'#E45323'}
                content={
                  <div>
                    <p>{contact.name}</p>
                  </div>
                }
                // title={<p className='popup-title'>{contact.name}</p>}
                overlayClassName='popup link'
                placement='bottom'
                trigger='hover'>
                {contact.link ? (
                  <a
                    target='_blank'
                    href={contact.link}>
                    <Icon />
                    {contact.text}
                  </a>
                ) : (
                  <p>
                    <Icon />
                    {contact.text}
                  </p>
                )}
              </Popover>
            </li>
          )
        })}
      </ul>
      <ul>
        <li>
          <Popover
            arrowPointAtCenter
            color={'#E45323'}
            content={
              <div>
                <p>{info.websiteRepo}</p>
              </div>
            }
            title={<p className='popup-title'>Redirect to</p>}
            overlayClassName='popup link'
            placement='bottom'
            trigger='hover'>
            <a
              target='_blank'
              href={info.websiteRepo}>
              <BiGitRepoForked /> Gibhub Repo
            </a>
          </Popover>
        </li>
      </ul>
    </div>
  </motion.footer>
)

export default Footer
