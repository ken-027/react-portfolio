const motionConfig = {
  initial: { opacity: 0, y: '10vh' },
  inView: { y: '0%', opacity: 1 },
  transition: ({ delay = 0.1 }) => ({ type: 'spring', delay: delay }),
}

export default motionConfig
