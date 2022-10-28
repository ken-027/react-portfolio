import React, { useState, useEffect } from 'react'
// import { BiMenuAltRight } from 'react-icons/bi'
// import { AiOutlineClose } from 'react-icons/ai'
// import { FaDownload } from 'react-icons/fa'
import '../styles/sass/components/_navbar.scss'
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { motion } from 'framer-motion'
import { navAnimation } from '../config/animate'

// import Resume from '../assets/Resume.pdf'

class AnchorPlugin extends ScrollbarPlugin {
  static pluginName = 'anchor'

  onHashChange = () => {
    this.jumpToHash(window.location.hash)
  }

  onClick = (event: any) => {
    const { target } = event

    if (target.tagName !== 'A') {
      return
    }

    const hash = target.getAttribute('href')

    if (!hash || hash.charAt(0) !== '#') {
      return
    }

    this.jumpToHash(hash)
  }

  jumpToHash = (hash: any) => {
    const { scrollbar } = this

    if (!hash) {
      return
    }

    // reset scrollTop
    scrollbar.containerEl.scrollTop = 0

    scrollbar.scrollIntoView(document.querySelector(hash))
  }

  onInit() {
    this.jumpToHash(window.location.hash)

    window.addEventListener('hashchange', this.onHashChange)

    this.scrollbar.contentEl.addEventListener('click', this.onClick)
  }

  onDestory() {
    window.removeEventListener('hashchange', this.onHashChange)

    this.scrollbar.contentEl.removeEventListener('click', this.onClick)
  }
}

const NavDescktop = ({ section }: { section: string }): React.ReactElement => {
  // Scrollbar.use(AnchorPlugin)
  // Scrollbar.use(OverscrollPlugin)
  const [screenWidth, setscreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    // const scroll = document.getElementById('scroll-container')! as HTMLElement
    // const scrollbar = Scrollbar.init(scroll, {
    //   damping: 0.05,
    //   renderByPixels: false,
    //   plugins: {
    //     overscroll: {
    //       effect: 'bounce',
    //     },
    //   },
    // })

    // scrollbar.track.xAxis.element.remove()
  }, [screenWidth])

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => setscreenWidth(window.innerWidth),
      false,
    )

    return () =>
      window.removeEventListener('resize', () =>
        setscreenWidth(window.innerWidth),
      )
  }, [])

  if (screenWidth < 1026) return <></>

  return (
    <nav className='desktop'>
      {/* <motion.div
        {...navAnimation()}
        className='section-content'>
        <a
          href={Resume}
          target='_blank'
          className='btn resume desktop'>
          <FaDownload /> Resume
        </a>
      </motion.div> */}
      <div className='menu-container-desktop'>
        <ul className=''>
          <motion.li
            {...navAnimation(0.1, false)}
            className=''>
            <a
              href='#about'
              className={`ex ${
                section.toLowerCase() === 'about' ? `active` : ``
              }`}>
              About
            </a>
          </motion.li>
          <motion.li
            {...navAnimation(0.1, false)}
            className=''>
            <a
              href='#experience'
              className={`expe ex ${
                section.toLowerCase() === 'experience' ? `active` : ``
              }`}>
              Experience
            </a>
          </motion.li>
          <motion.li
            {...navAnimation(0.15, false)}
            className=''>
            <a
              href='#work'
              className={`ex ${
                section.toLowerCase() === 'work' ? `active` : ``
              }`}>
              Work
            </a>
          </motion.li>
          <motion.li
            {...navAnimation(0.2, false)}
            className=''>
            <a
              href='#contact'
              className={`ex ${
                section.toLowerCase() === 'contact' ? `active` : ``
              }`}>
              Contact
            </a>
          </motion.li>
        </ul>
      </div>
    </nav>
  )
}

export default NavDescktop
