import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { FiSend } from 'react-icons/fi'
import { TiWarning } from 'react-icons/ti'

import '../styles/sass/components/_contact.scss'
// import info from '../shared/info'
import {
  serviceId,
  serviceDefaultId,
  templateId,
  templateDefaultId,
  publicKey,
} from '../config'
import { contentAnimation, labelAnimation } from '../config/animate'

const ErrorText = ({ content }: { content: string }): React.ReactElement => {
  const [status, setStatus] = useState('show')

  useEffect(() => {
    // setStatus('show')
    return () => {
      setStatus('hide')
    }
  }, [])

  return (
    <div className='error-container'>
      <p className={`error ${status}`}>
        <TiWarning size={16} /> {content}
      </p>
    </div>
  )
}

// const OtherContact = (): React.ReactElement => (
//   <div className='other-contact'>
//     <ul>
//       <li>
//         <a href={info.socials.discord}>Discord</a>
//       </li>
//       <li>
//         <a href={info.socials.upwork}>Upwork</a>
//       </li>
//       <li>
//         <a href={info.socials.upwork}>Upwork</a>
//       </li>
//     </ul>
//   </div>
// )

const Contact = ({
  onViewPort,
}: {
  onViewPort: () => void | Function
}): React.ReactElement => {
  const form: React.MutableRefObject<any> = useRef(null)
  const [btnText, setbtnText] = useState('Send Message')
  const [isSending, setisSending] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })

  useEffect(() => {}, [])

  const clearFields = () => {
    let currentForm = form.current.elements
    currentForm.email.value = ''
    currentForm.name.value = ''
    currentForm.subject.value = ''
    currentForm.message.value = ''
  }

  const isEmptyFields = () => {
    let error = {
      name: '',
      subject: '',
      email: '',
      message: '',
    }
    let currentForm = form.current.elements
    let isEmptyEmail = currentForm.email.value === ''
    let isEmptyName = currentForm.name.value === ''
    let isEmptySubject = currentForm.subject.value === ''

    if (isEmptyEmail) {
      error.email = 'Email is required'
    }
    if (isEmptyName) {
      error.name = 'Name is required'
    }
    if (isEmptySubject) {
      error.subject = 'Subject is required'
    }

    setErrors(error)

    return isEmptyName || isEmptySubject || isEmptyEmail
  }

  const sendEmail = (e: any): void | boolean => {
    e.preventDefault()

    if (isSending || isEmptyFields()) return false
    // console.log(form.current.elements.email.value)

    setbtnText('Sending ...')
    setisSending(true)
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        // console.log(result.text)
        emailjs
          .sendForm(
            serviceDefaultId,
            templateDefaultId,
            form.current,
            publicKey,
          )
          .then(
            () => {
              // console.log(result.text)
              clearFields()
              setbtnText('Message Sent')
              setTimeout(() => {
                setbtnText('Send Message')
                setisSending(false)
              }, 5000)
            },
            () => {
              // console.log(error.text)
              setbtnText('Failed To Send')
              setTimeout(() => {
                setbtnText('Send Message')
              }, 3000)
              setisSending(false)
            },
          )
      },
      () => {
        // console.log(error.text)
        setbtnText('Failed To Send')
        setTimeout(() => {
          setbtnText('Send Message')
        }, 3000)
        setisSending(false)
      },
    )
  }

  return (
    <motion.div
      {...contentAnimation}
      className='contact section'>
      <div className='section-content'>
        <h2 id='contact'>Get In Touch</h2>
        <motion.div onViewportEnter={() => onViewPort()}></motion.div>
        <motion.p
          {...contentAnimation}
          className='description'>
          You can reach out with this contact form or the links provided in the footer. I appreciate receiving a
          message from you:
        </motion.p>
        <div
          // animateIn='animate__fadeInUp'
          // animateOut='animate__fadeOutUp'
          // delay={600}
          // animateOnce={true}
          className='form'>
          <form
            ref={form}
            onSubmit={sendEmail}>
            <div className='row'>
              <div className='col'>
                <motion.div
                  {...contentAnimation}
                  className='group-container'>
                  <div className='group'>
                    <motion.label {...labelAnimation}>Name</motion.label>
                    <input
                      type='text'
                      placeholder='Your Name'
                      name='name'
                    />
                  </div>
                  {errors.name ? (
                    // <p className='error'>
                    //   <TiWarning size={16} /> {errors.name}
                    // </p>
                    <ErrorText content={errors.name} />
                  ) : null}
                </motion.div>
                <motion.div
                  {...contentAnimation}
                  className='group-container'>
                  <div className='group'>
                    <motion.label {...labelAnimation}>Subject</motion.label>
                    <input
                      type='text'
                      placeholder='Your Subject'
                      name='subject'
                    />
                  </div>
                  {errors.subject ? (
                    // <p className='error'>
                    //   <TiWarning size={16} /> {errors.subject}
                    // </p>
                    <ErrorText content={errors.subject} />
                  ) : null}
                </motion.div>
                <motion.div
                  {...contentAnimation}
                  className='group-container'>
                  <div className='group'>
                    <motion.label {...labelAnimation}>Email</motion.label>
                    <input
                      type='email'
                      placeholder='Your Email'
                      name='email'
                    />
                  </div>
                  {errors.email ? (
                    // <p className='error'>
                    //   <TiWarning size={16} /> {errors.email}
                    // </p>
                    <ErrorText content={errors.email} />
                  ) : null}
                </motion.div>
              </div>
              <motion.div
                {...contentAnimation}
                className='group-container'>
                <div className='group'>
                  <motion.label {...labelAnimation}>Message</motion.label>
                  <textarea
                    placeholder='Your Message'
                    name='message'
                    cols={30}
                    rows={10}></textarea>
                  {errors.message ? (
                    <p className='error'>
                      <TiWarning size={16} /> {errors.message}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            </div>
            <motion.button
              {...contentAnimation}
              type='submit'
              className={`btn ${btnText === 'Sending ...' ? `sending` : ``}`}>
              <i>
                <FiSend size={20} />
              </i>
              {btnText}
            </motion.button>
          </form>
        </div>
        <motion.div onViewportEnter={() => onViewPort()}></motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
