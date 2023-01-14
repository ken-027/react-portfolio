import { AnimationProps } from 'framer-motion'

export const motionAnimate = ({
	duration = 1,
	delay = 0,
}: {
  duration?: number
  delay?: number
}): AnimationProps | any => ({
	initial: {
		opacity: 0,
		y: 100,
	},
	transition: {
		duration: duration,
		ease: 'easeInOut',
		delay: delay,
	},
	animate: { opacity: [0, 0.5, 1], y: 0 },
})

export const navAnimation = (delay = 0, once = true): AnimationProps | any => ({
	transition: {
		ease: 'easeInOut',
		delay: delay,
		duration: 0.3
	},
	viewport: { once: once },
	initial: { x: 100, opacity: 0 },
	whileInView: { x: 0, opacity: [0, 0.5, 1] }
})


export const contentAnimation: AnimationProps | any = {
	transition: {
		duration: 0.8,
		ease: 'easeInOut',
		type: 'spring',
		stiffness: 200,
		velocity: 2,
	},
	viewport: { once: true, margin: '100px' },
	whileInView: { opacity: [0, 0.5, 1], y: [50, 0] },
}

export const labelAnimation: AnimationProps | any = {
	transition: {
		duration: 0.6,
		ease: 'easeInOut',
		type: 'spring',
		stiffness: 200,
		velocity: 2,
	},
	viewport: { once: true },
	whileInView: { opacity: [0, 0.5, 1], y: [10, 0] },
}

export const footerAnimation = (delay = 0.01): AnimationProps | any => ({
	transition: { delay: delay },
	viewport: { once: true },
	whileInView: { opacity: [0, 0.5, 1] }
})