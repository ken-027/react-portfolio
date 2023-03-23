import React from 'react'
import { PropsWithChildren } from 'react'
import styles from '@/styles/main.module.scss'
import Image from 'next/image'
import ContactImage from '@/assets/contact.svg'

type props = PropsWithChildren<{}>

const Contact: React.FC<props> = ({}) => {
  return (
    <section
      id='contact'
      className={styles.padding}>
      <h2 className={styles.h2}>Contact</h2>
      <div className={styles.image}>
        <Image
          src={ContactImage}
          alt='Contact Illustration'
          width={100}
          height={100}
          className={styles.image}
        />
      </div>
      <form className={styles.form}>
        <div>
          <label htmlFor='email'>Name</label>
          <input
            type='text'
            placeholder='john doe'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='johndoe@email.com'
          />
        </div>
        <div>
          <label htmlFor=''>Message</label>
          <textarea
            id=''
            placeholder='greetings'
            cols={30}
            rows={10}></textarea>
        </div>
        <input
          className={styles.submit}
          type='submit'
          value='Send email'
        />
      </form>
    </section>
  )
}

export default Contact
