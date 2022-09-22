import { AnimationOnScroll } from 'react-animation-on-scroll'
import works from '../shared/works'
import { FaShareSquare, FaGithub } from 'react-icons/fa'

const Work = () => (
  <AnimationOnScroll
    animateIn='animate__fadeInUp'
    animateOut='animate__fadeOutUp'
    animateOnce={true}
    className='work section'>
    <h2 id='work'>Some Things I've Built</h2>
    <div className=''>
      {works.map((work, index) => (
        <div key={index}>
          <AnimationOnScroll
            animateIn='animate__fadeInUp'
            animateOut='animate__fadeOutUp'
            animateOnce={true}
            className='box'>
            <div className=''>
              <p>{work.title}</p>
              <p>{work.description}</p>
              <ul className='techno'>
                {work.technologies.map((technology, index) => (
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
            <div className='images'>
              {work.images.map((image, index) => (
                <img
                  className='img'
                  key={index}
                  src={image}
                  alt={work.title}
                />
              ))}
            </div>
          </AnimationOnScroll>
        </div>
      ))}
      <p className='manymore'>many more to come</p>
    </div>
  </AnimationOnScroll>
)

export default Work
