import { useState, useRef } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import emailjs from '@emailjs/browser'

import { FiSend } from 'react-icons/fi'
import { TiWarning } from 'react-icons/ti'

const Contact = () => {
  const form = useRef(null)
  const [btnText, setbtnText] = useState('Send Message')
  const [isSending, setisSending] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })

  let serviceId = import.meta.env.VITE_EMAIL_SERVICE
  let serviceDefaultId = import.meta.env.VITE_EMAIL_SERVICE_DEFAULT
  let templateId = import.meta.env.VITE_EMAIL_TEMPLATE
  let templateDefaultId = import.meta.env.VITE_EMAIL_TEMPLATE_DEFAULT
  let publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

  // useEffect(() => {}, [])

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

  const sendEmail = (e) => {
    e.preventDefault()

    if (isSending || isEmptyFields()) return false
    // console.log(form.current.elements.email.value)

    setbtnText('Sending ...')
    setisSending(true)
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        // console.log(result.text)
        emailjs
          .sendForm(
            serviceDefaultId,
            templateDefaultId,
            form.current,
            publicKey
          )
          .then(
            (result) => {
              // console.log(result.text)
              clearFields()
              setbtnText('Message Sent')
              setTimeout(() => {
                setbtnText('Send Message')
                setisSending(false)
              }, 5000)
            },
            (error) => {
              // console.log(error.text)
              setbtnText('Send Message')
              setisSending(false)
            }
          )
      },
      (error) => {
        // console.log(error.text)
        setbtnText('Send Message')
        setisSending(false)
      }
    )
  }

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
        <form
          ref={form}
          onSubmit={sendEmail}>
          <div>
            <div className='group'>
              <label>Name</label>
              <input
                type='text'
                placeholder='Your Name'
                name='name'
              />
            </div>
            {errors.name ? (
              <p className='error'>
                <TiWarning size={16} /> {errors.name}
              </p>
            ) : null}
          </div>
          <div>
            <div className='group'>
              <label>Subject</label>
              <input
                type='text'
                placeholder='Your Subject'
                name='subject'
              />
            </div>
            {errors.subject ? (
              <p className='error'>
                <TiWarning size={16} /> {errors.subject}
              </p>
            ) : null}
          </div>
          <div>
            <div className='group'>
              <label>Email</label>
              <input
                type='email'
                placeholder='Your Email'
                name='email'
              />
            </div>
            {errors.email ? (
              <p className='error'>
                <TiWarning size={16} /> {errors.email}
              </p>
            ) : null}
          </div>
          <div>
            <div className='group'>
              <label>Message</label>
              <textarea
                placeholder='Your Message'
                name='message'
                cols='30'
                rows='8'></textarea>
              {errors.message ? (
                <p className='error'>
                  <TiWarning size={16} /> {errors.message}
                </p>
              ) : null}
            </div>
          </div>
          <button
            type='submit'
            className={`btn ${btnText === 'Sending ...' ? `sending` : ``}`}>
            <i>
              <FiSend size={20} />
            </i>
            {btnText}
          </button>
        </form>
      </AnimationOnScroll>
    </AnimationOnScroll>
  )
}

export default Contact
