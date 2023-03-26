import { PropsWithChildren, useState, useEffect } from 'react'
import logo from '@/assets/logo.svg'
import styles from '@/styles/main.module.scss'
import variableStyle from '@/styles/variables.module.scss'
import { Divide as Hamburger } from 'hamburger-react'
import { m, AnimatePresence, Variant } from 'framer-motion'

type props = PropsWithChildren<{}>
type link = {
  link: string
  text: string
}

type variant = {
  hidden: Variant
  visible: Variant
  exit: Variant
}

const Nav: React.FC<props> = ({}) => {
  const links: link[] = [
    { link: '#about', text: 'About' },
    { link: '#experience', text: 'Experience' },
    { link: '#portfolio', text: 'Portfolio' },
    { link: '#contact', text: 'Contact' },
    { link: './resume.pdf', text: 'Resume' },
  ]
  const [isOpen, setisOpen] = useState<boolean>(false)
  const [onComplete, setonComplete] = useState<boolean>(true)
  const totalLinks = links.length - 1
  const toggle = () => setisOpen((prevState) => !prevState)
  const navVariants: variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.05,
      },
    },
  }

  const listVariant: variant = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.7,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.3,
      },
    },
  }

  // useEffect(() => {
  //   if (isOpen) {
  //     set
  //   }
  // }, [onComplete])

  useEffect(() => {
    const body = document.getElementsByTagName('html')[0] as HTMLElement

    body.style.overflowY = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <>
      <nav className={styles.nav}>
        <m.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          href='./'>
          <img
            src={logo}
            alt='Logo'
            width={40}
            height={40}
          />
        </m.a>

        <button
          className={styles.burger}
          onClick={toggle}>
          <Hamburger
            toggled={isOpen}
            rounded
            distance='md'
            duration={0.7}
            direction='right'
            color={variableStyle.primaryColor}
            size={30}
          />
        </button>
        <AnimatePresence
          mode='wait'
          onExitComplete={() => {
            setonComplete(true)
            console.log(onComplete)
          }}>
          {isOpen ? (
            <m.div
              variants={navVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className={styles.linkContainer}>
              <ul>
                {links.map((item, index) => (
                  <m.li
                    // exit='hidden'
                    // initial='hidden'
                    // animate='visible'
                    variants={listVariant}
                    key={index}
                    className={
                      index === totalLinks ? styles.btnResumeContainer : ''
                    }>
                    <a
                      href={item.link}
                      onClick={() => toggle()}
                      target={index === totalLinks ? '_blank' : '_self'}
                      className={index === totalLinks ? styles.button : ''}>
                      {item.text}
                    </a>
                  </m.li>
                ))}
              </ul>
            </m.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Nav
