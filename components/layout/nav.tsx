import { PropsWithChildren, useState, useEffect } from 'react'
import logo from '@/assets/logo.png'
import styles from '@/styles/main.module.scss'
import variableStyle from '@/styles/variables.module.scss'
import { Divide as Hamburger } from 'hamburger-react'
import Image from 'next/image'

type props = PropsWithChildren<{}>
type link = {
  link: string
  text: string
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
  const totalLinks = links.length - 1

  useEffect(() => {
    const body = document.getElementsByTagName('html')[0] as HTMLElement

    body.style.overflowY = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const toggle = () => setisOpen((prevState) => !prevState)

  return (
    <>
      <nav className={styles.nav}>
        <a href='./'>
          <Image
            src={logo}
            alt='Logo'
            width={40}
            height={40}
            priority
          />
        </a>

        <button
          className={styles.burger}
          onClick={toggle}>
          <Hamburger
            toggled={isOpen}
            rounded
            distance='md'
            direction='right'
            color={
              isOpen ? variableStyle.primaryColor : variableStyle.tertiaryColor
            }
            size={30}
          />
        </button>
        <div
          className={`${styles.linkContainer} ${
            isOpen ? styles.linkShow : ''
          }`}>
          <ul className={''}>
            {links.map((item, index) => (
              <li
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
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
