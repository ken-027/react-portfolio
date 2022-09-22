import { useState, useRef, useEffect } from 'react'
import experiences from '../shared/experiences'

import { AnimationOnScroll } from 'react-animation-on-scroll'

const Experience = () => {
  const ulContent = useRef(null)
  const [tabIndex, settabIndex] = useState(0)

  useEffect(() => {}, [tabIndex])

  const Description = () => {
    const [animation, setAnimation] = useState('')
    useEffect(() => {
      setAnimation('animate__fadeInUp')
      return () => setAnimation('animate__fadeInDown')
    }, [animation, tabIndex])

    return (
      <div className='box'>
        <p>{experiences[tabIndex].position}</p>
        <p className=''>@{experiences[tabIndex].company}</p>
        <small>{experiences[tabIndex].location}</small>
        <small>
          {experiences[tabIndex].date.started} -{' '}
          {experiences[tabIndex].date.ended}
        </small>
        <ul>
          {experiences[tabIndex].description.map((description, index) => (
            <li
              className={`animate__animated ${animation}`}
              key={index}>
              {description}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const changeTab = (e) => {
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
      e.target.classList.add('active')
    }
  }

  return (
    <AnimationOnScroll
      animateIn='animate__fadeInUp'
      animateOut='animate__fadeOutUp'
      animateOnce={true}
      className='experience section'>
      <h2 id='experience'>Where I've Worked</h2>
      <AnimationOnScroll
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        animateOnce={true}
        className=''>
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
          <li className='show'>{experiences[0].name}</li>
          <li className=''>{experiences[1].name}</li>
          <li className=''>{experiences[2].name}</li>
          <li className=''>{experiences[3].name}</li>
        </ul>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        animateOnce={true}>
        <Description tabIndex={tabIndex} />
      </AnimationOnScroll>
    </AnimationOnScroll>
  )
}

export default Experience
