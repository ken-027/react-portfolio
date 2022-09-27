import { AnimationOnScroll } from 'react-animation-on-scroll'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import skills from '../shared/skills'
import info from '../shared/info'

import Profile from '../assets/profile.png'
import Book from '../assets/book.png'
import Graduated from '../assets/graduated.png'

const PopUp = ({ data }) => (
  <div className='rating animate__animated animate__fadeIn'>
    <h6>Skills Rating</h6>
    <div className='stars'>
      {[...Array(10)].map((x, index) => {
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

const About = () => {
  const onHover = (e) => {
    let liParent = e.target.offsetParent
    let hoverContainer = liParent.children[1]

    document.querySelectorAll('li .rating').forEach((el) => {
      el.classList.remove('show')
    })

    hoverContainer.classList.add('show')
  }

  const onHoverOut = (e) => {
    document.querySelectorAll('li .rating').forEach((el) => {
      el.classList.remove('show')
    })
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
          <p>
            Here’s the following that I’d studied at Palawan State University:
          </p>
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
            <li>
              <AnimationOnScroll
                animateIn='animate__fadeInUp'
                animateOut='animate__fadeOutUp'
                delay={300}
                animateOnce={true}>
                <div className=''>
                  <img src={Book} />
                </div>
                <div className=''>
                  <p>{info.education[1].degree}</p>
                  <small>{info.education[1].year}</small>
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
          <p>Here’s the following technologies that I knew:</p>
          <div className='skillset'>
            {Object.values(skills).map((skill, index) => (
              <AnimationOnScroll
                animateIn='animate__fadeInUp'
                animateOut='animate__fadeOutUp'
                delay={++index * 200}
                key={index}
                animateOnce={true}>
                <ul className=''>
                  {skill.map((skill, index) => (
                    <li
                      className=''
                      onMouseLeave={onHoverOut}
                      key={index}>
                      <a
                        onMouseOver={onHover}
                        data-description={skill.description}>
                        <img
                          src={skill.icon}
                          alt={skill.name}
                        />
                        {skill.name}
                      </a>
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
