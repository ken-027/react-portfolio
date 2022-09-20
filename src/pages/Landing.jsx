import { useState, useRef, useEffect } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Profile from '../assets/profile.png'
import Book from '../assets/book.png'
import Graduated from '../assets/graduated.png'
import experiences from '../shared/experiences'
import skills from '../shared/skills'
import works from '../shared/works'

import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'

import { FaShareSquare, FaGithub } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'

const About = () => (
  <AnimationOnScroll
    animateIn='animate__fadeInUp'
    animateOut='animate__fadeOutUp'
    animateOnce={true}
    className='about section'>
    <h2 id='about'>About Me</h2>
    <div className='description'>
      <AnimationOnScroll
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        delay={600}
        animateOnce={true}>
        <p>
          Hello, My name is Kenneth and I love learning and watching tutorial
          videos on the internet, and I enjoy those stuff.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        delay={700}
        animateOnce={true}>
        <p>
          My interest in programming started back in 2015 when I’m in the second
          semester of my first year of college, reading programming tutorials
          that I downloaded from the internet is my habit.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        delay={800}
        animateOnce={true}>
        <p>
          Fast-forward to today, I’d gained many experiences and now my main
          focus these days is to build modern UI website for clients and
          companies.
        </p>
      </AnimationOnScroll>
    </div>
    <AnimationOnScroll
      animateIn='animate__fadeInUp'
      animateOut='animate__fadeOutUp'
      animateOnce={true}
      delay={900}
      className='profile'>
      <img
        src={Profile}
        alt=''
      />
    </AnimationOnScroll>
    <AnimationOnScroll
      animateIn='animate__fadeInUp'
      animateOut='animate__fadeOutUp'
      animateOnce={true}
      className='education'>
      <h3>Education</h3>
      <p>Here’s the following that I’d studied at Palawan State University:</p>
      <ul className=''>
        <li>
          <div className=''>
            <img src={Graduated} />
          </div>
          <div className=''>
            <p>Bachelor of Sciene in Information Technology</p>
            <small>2014-2018</small>
          </div>
        </li>
        <li>
          <div className=''>
            <img src={Book} />
          </div>
          <div className=''>
            <p>Bachelor of Sciene in Architecture</p>
            <small>2013-2014</small>
          </div>
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
        <ul className=''>
          {skills.language.map((skill, index) => (
            <li className='' key={index}>
              <a>{skill}</a>
            </li>
          ))}
        </ul>
        <ul className=''>
          {skills.frontend.map((frontend, index) => (
            <li key={index}>
              <a>{frontend}</a>
            </li>
          ))}
        </ul>
        <ul className=''>
          {skills.backend.map((backend, index) => (
            <li key={index}>
              <a>{backend}</a>
            </li>
          ))}
        </ul>
      </div>
    </AnimationOnScroll>
  </AnimationOnScroll>
)

const Experience = () => {
  const ulContent = useRef(null)
  const [tabIndex, settabIndex] = useState(0)

  // useEffect(() => {}, [tabIndex])

  const Description = () => {
    return (
      <AnimationOnScroll
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        animateOnce={true}
        className='box'>
        <p>{experiences[tabIndex].position}</p>
        <p>@{experiences[tabIndex].company}</p>
        <small>{experiences[tabIndex].location}</small>
        <small>
          {experiences[tabIndex].date.started} -{' '}
          {experiences[tabIndex].date.ended}
        </small>
        <ul>
          {experiences[tabIndex].description.map((description, index) => (
            <li key={index}><span className="animate__animated animate__fadeInRight">{description}</span></li>
          ))}
        </ul>
      </AnimationOnScroll>
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
      <Description />
    </AnimationOnScroll>
  )
}

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
    </div>
  </AnimationOnScroll>
)

const Contact = () => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })

  return (
    <AnimationOnScroll
      animateIn='animate__fadeInUp'
      animateOut='animate__fadeOutUp'
      animateOnce={true}
      className='contact section'>
      <h2 id='contact'>Get In Touch</h2>
      <AnimationOnScroll
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        animateOnce={true}
        className='form'>
        <div>
          <div className='group'>
            <label>Name</label>
            <input
              type='text'
              value={name}
              placeholder='Your Name'
              onChange={(e) => setName(e.target.val)}
            />
          </div>
          {errors.name ? <p className='error'>Error here</p> : null}
        </div>
        <div>
          <div className='group'>
            <label>Subject</label>
            <input
              value={subject}
              type='text'
              placeholder='Your Subject'
              onChange={(e) => setSubject(e.target.val)}
            />
          </div>
          {errors.subject ? <p className='error'>Error here</p> : null}
        </div>
        <div>
          <div className='group'>
            <label>Email</label>
            <input
              value={email}
              type='email'
              placeholder='Your Email'
              onChange={(e) => setEmail(e.target.val)}
            />
          </div>
          {errors.email ? <p className='error'>Error here</p> : null}
        </div>
        <div>
          <div className='group'>
            <label>Message</label>
            <textarea
              value={message}
              placeholder='Your Message'
              onChange={(e) => setMessage(e.target.val)}
              cols='30'
              rows='8'></textarea>
            {errors.message ? <p className='error'>Error here</p> : null}
          </div>
        </div>
        <button className='btn'>
          <i>
            <FiSend size={20} />
          </i>
          Send Message
        </button>
      </AnimationOnScroll>
    </AnimationOnScroll>
  )
}

const Footer = () => (
  <footer>
    <h4>Design & Built by Kenneth Andales</h4>
    <a href='mailto:keanolida7296@gmail.com'>keanolida7296@gmail.com</a>
    <a href='tel:+639072363667'>+639072363667</a>
  </footer>
)

const Dashboard = () => {
  return (
    <div className='container'>
      <Nav />
      <section className='header'>
        <p className='animate__animated animate__backInLeft'>Hi, my name is</p>
        <h1 className='name animate__animated animate__bounceIn'>Kenneth Andales</h1>
        <p className='animate__animated animate__fadeInUp'>
          I’m a Full Stack Developer. I've gained many experiences as a
          programmer in different companies. Currently, I'm focused on building
          modern UI websites.
        </p>
      </section>
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
      <Sidebar />
    </div>
  )
}

export default Dashboard
