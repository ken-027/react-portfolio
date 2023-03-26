import { motion, Variant } from 'framer-motion'
import styles from '@/styles/main.module.scss'

type variant = {
  visible: Variant
  hidden: Variant
}

const Linkedin = () => {
  const svgVariant: variant = {
    hidden: {
      y: 100,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.05,
      },
    },
    visible: {
      y: 0,
      // transition: {
      //   duration: 0.05,
      //   when: 'beforeChildren',
      //   staggerChildren: 0.1,
      // },
    },
  }

  const pathVariant: variant = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        ease: 'easeInOut',
        duration: 4,
      },
    },
  }

  return (
    <motion.svg
      viewBox='0 0 48 48'
      fill='none'
      variants={svgVariant}
      initial='hidden'
      animate='visible'
      className={styles.linkedin}
      xmlns='http://www.w3.org/2000/svg'>
      <motion.path
        variants={pathVariant}
        d='M48 41.3333C48 45.016 45.016 48 41.3333 48H6.66667C2.98533 48 0 45.016 0 41.3333V6.66667C0 2.984 2.98533 0 6.66667 0H41.3333C45.016 0 48 2.984 48 6.66667V41.3333Z'
        fill='#0288D1'
      />
      <motion.path
        variants={pathVariant}
        d='M8 17.3333H14.6667V40H8V17.3333ZM11.3133 14.6667H11.276C9.28667 14.6667 8 13.184 8 11.332C8 9.44 9.32667 8 11.352 8C13.38 8 14.6293 9.44 14.6667 11.332C14.6667 13.1827 13.38 14.6667 11.3133 14.6667ZM40 40H33.3333V27.868C33.3333 24.9373 31.7 22.9373 29.0773 22.9373C27.076 22.9373 25.9933 24.2867 25.468 25.5907C25.276 26.0573 25.3333 27.348 25.3333 28V40H18.6667V17.3333H25.3333V20.8213C26.2947 19.3333 27.8 17.3333 31.6507 17.3333C36.4213 17.3333 39.9987 20.3333 39.9987 27.032L40 40Z'
        fill='white'
      />
    </motion.svg>
  )
}

export default Linkedin
