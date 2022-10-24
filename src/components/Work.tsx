import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import works from '../shared/works'
import { FaShareSquare, FaGithub } from 'react-icons/fa'

import '../styles/sass/components/_work.scss'
import { IWork } from '../ts-interfaces'

const Work = (): React.ReactElement => (
  <AnimationOnScroll
    animateIn='animate__fadeInUp'
    animateOut='animate__fadeOutUp'
    animateOnce={true}
    // offset={400}
    className='work section'>
    <div className='section-content'>
      <h2 id='work'>Some Things I've Built</h2>
      <AnimationOnScroll
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        animateOnce={true}
        // delay={200}
        offset={400}>
        <p className='description'>
          As I maintained and developed projects for every company that I've
          worked for, Here's some extra project that I made while I'd still
          learning different technologies:
        </p>
      </AnimationOnScroll>
      <div className='container'>
        {works.map((work: IWork, index: number) => (
          <AnimationOnScroll
            key={index}
            animateIn='animate__fadeInUp'
            animateOut='animate__fadeOutUp'
            animateOnce={true}
            // delay={200}
            offset={400}
            className='row'>
            <div className='box'>
              <p>{work.title}</p>
              <p>{work.description}</p>
              <ul className='techno'>
                {work.technologies.map((technology: string, index: number) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
              <ul className='links'>
                <li>
                  <a
                    target='_blank'
                    href={work.repository}>
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href={work.website}>
                    <FaShareSquare />
                  </a>
                </li>
              </ul>
            </div>
            <div className='image-container'>
              <div className='images'>
                {work.images.map((image: string, index: number) => (
                  <img
                    className='img'
                    key={index}
                    src={image}
                    alt={work.title}
                  />
                ))}
              </div>
            </div>
          </AnimationOnScroll>
        ))}
        {/* <AnimationOnScroll
          animateIn='animate__fadeInUp'
          animateOut='animate__fadeOutUp'
          animateOnce={true}
          className='manymore'>
          <p className=''>more to come</p>
        </AnimationOnScroll> */}
      </div>
    </div>
  </AnimationOnScroll>
)

export default Work
