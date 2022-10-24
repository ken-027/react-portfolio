import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import skills from '../shared/skills'
import info from '../shared/info'

import Profile from '../assets/profile.png'
import Graduated from '../assets/graduated.png'

import '../styles/sass/components/_about.scss'
import { ISkill, Skill } from '../ts-interfaces'

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

const About = (): React.ReactElement => {
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
    <AnimationOnScroll
      animateIn='animate__fadeInUp'
      animateOut='animate__fadeOutUp'
      offset={400}
      animateOnce={true}
      className='about section'>
      <div className='section-content'>
        <h2 id='about'>About Me</h2>
        <div className='me'>
          <div className='description'>
            <AnimationOnScroll
              animateIn='animate__fadeInUp'
              animateOut='animate__fadeOutUp'
              delay={400}
              animateOnce={true}>
              <p>{info.about[0]}</p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn='animate__fadeInUp'
              animateOut='animate__fadeOutUp'
              delay={500}
              animateOnce={true}>
              <p>{info.about[1]}</p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn='animate__fadeInUp'
              animateOut='animate__fadeOutUp'
              delay={600}
              animateOnce={true}>
              <p>{info.about[2]}</p>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll
            animateIn='animate__fadeInUp'
            animateOut='animate__fadeOutUp'
            animateOnce={true}
            delay={400}
            className='profile'>
            <img
              src={Profile}
              alt=''
            />
          </AnimationOnScroll>
        </div>

        <AnimationOnScroll
          animateIn='animate__fadeInUp'
          animateOut='animate__fadeOutUp'
          animateOnce={true}
          className='education'>
          <h3>Education</h3>
          <p>Here's the course that I take at Palawan State University:</p>
          <ul className=''>
            <li>
              <AnimationOnScroll
                animateIn='animate__fadeInUp'
                animateOut='animate__fadeOutUp'
                animateOnce={true}>
                <div className=''>
                  <img src={Graduated} />
                </div>
                <div className=''>
                  <p>{info.education[0].degree}</p>
                  <small>{info.education[0].year}</small>
                </div>
              </AnimationOnScroll>
            </li>
          </ul>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn='animate__fadeInUp'
          animateOut='animate__fadeOutUp'
          animateOnce={true}
          className='skills'>
          <h3>Skills</h3>
          <p>
            Here are the following Programming Languages and Frameworks that I
            know:
          </p>
          <div className='skillset'>
            {Object.values(skills).map((skill: Skill, index: number) => (
              <AnimationOnScroll
                animateIn='animate__fadeInUp'
                animateOut='animate__fadeOutUp'
                delay={++index * 200}
                key={index}
                animateOnce={true}>
                <h3 className='name'>{skill.name}</h3>
                <ul className=''>
                  {skill.skills.map((skill: ISkill, index: number) => (
                    <li
                      className=''
                      onMouseLeave={onHoverOut}
                      key={index}>
                      <AnimationOnScroll
                        animateIn='animate__fadeInUp'
                        animateOut='animate__fadeOutUp'
                        delay={++index * 100}
                        key={index}
                        animateOnce={true}>
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
                      </AnimationOnScroll>
                      <PopUp data={skill} />
                    </li>
                  ))}
                </ul>
              </AnimationOnScroll>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </AnimationOnScroll>
  )
}

export default About
