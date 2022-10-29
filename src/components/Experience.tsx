import React, { useState, useRef, useEffect, useMemo } from 'react'
import experiences from '../shared/experiences'

import '../styles/sass/components/_experience.scss'
import { motion } from 'framer-motion'
import { contentAnimation } from '../config/animate'
import Description from './Decription'

const Experience = ({ onViewPort }: { onViewPort: () => void | Function }) => {
  const ulContent: React.MutableRefObject<any> = useRef(null)
  const [tabIndex, settabIndex] = useState(0)
  const memo = useMemo(
    () => <Description experience={experiences[tabIndex]} />,
    [tabIndex],
  )

  useEffect(() => {}, [tabIndex])

  const changeTab = (e: any): void => {
    let index = e.target.dataset.index
    if (index) {
      settabIndex(index)
      document.querySelectorAll('.bullet-container li').forEach((val) => {
        val.classList.remove('active')
      })

      document.querySelectorAll('.bullet-content li').forEach((val) => {
        val.classList.remove('show')
      })

      ulContent.current.children[index].classList.add('show')
      if (e.target.nodeName === 'LI') {
        e.target.classList.add('active')
      } else {
        document
          .querySelectorAll('.bullet-container li')
          [index].classList.add('active')
      }
    }
  }

  return (
    <motion.div className='experience section'>
      <div className='section-content'>
        <h2 id='experience'>Where I've Worked</h2>
        <motion.div onViewportEnter={() => onViewPort()}></motion.div>
        <motion.p
          {...contentAnimation}
          className='description'>
          Following companies that I'd worked for, I started working in 2018,
          stopped when it has a pandemic, and then I'd continue my career in
          2022:
        </motion.p>
        <div className='content'>
          <motion.div
            {...contentAnimation}
            className='tab-container'>
            <ul className='bullet-container'>
              <li
                data-index={0}
                className='active'
                onClick={changeTab}></li>
              <li
                data-index={1}
                className=''
                onClick={changeTab}></li>
              <li
                data-index={2}
                className=''
                onClick={changeTab}></li>
              <li
                data-index={3}
                className='position'
                onClick={changeTab}>
                <div className='bullet'></div>
              </li>
            </ul>
            <ul
              ref={ulContent}
              className='bullet-content'>
              <li className='show'>
                <a
                  data-index={0}
                  onClick={changeTab}>
                  {experiences[0].name}
                </a>
              </li>
              <li className=''>
                <a
                  data-index={1}
                  onClick={changeTab}>
                  {experiences[1].name}
                </a>
              </li>
              <li className=''>
                <a
                  data-index={2}
                  onClick={changeTab}>
                  {experiences[2].name}
                </a>
              </li>
              <li className=''>
                <a
                  data-index={3}
                  onClick={changeTab}>
                  {experiences[3].name}
                </a>
              </li>
            </ul>
          </motion.div>
          {memo}
        </div>
        <motion.div onViewportEnter={() => onViewPort()}></motion.div>
      </div>
    </motion.div>
  )
}

export default Experience
