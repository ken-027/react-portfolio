import { AnimationOnScroll } from 'react-animation-on-scroll'
import info from '../shared/info'

const Footer = () => (
  <footer>
    <AnimationOnScroll
      animateIn='animate__fadeInUp'
      animateOut='animate__fadeOutUp'
      animateOnce={true}
      className='footer'
      offset={10}>
      <h4>Design & Built by {info.user.fullName}</h4>
      <a href={`mailto:${info.user.email}`}>{info.user.email}</a>
      <a href={`tel:${info.user.phone}`}>{info.user.phone}</a>
    </AnimationOnScroll>
  </footer>
)

export default Footer
