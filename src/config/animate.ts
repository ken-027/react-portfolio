import { AnimationProps } from 'framer-motion'

export const motionAnimate = ({
  duration = 1,
  delay = 0,
  animateType = 'spring',
}: {
  duration?: number
  delay?: number
  animateType?: string
}): AnimationProps => ({
  initial: {
    x: -500,
  },
  animate: {
    x: 0,
  },
  transition: {
    type: animateType,
    stiffness: 150,
    duration: duration,
    delay: delay,
  },
})
