import info from "../shared/info"

const Footer = () => (
  <footer>
    <h4>Design & Built by {info.user.fullName}</h4>
    <a href={`mailto:${info.user.email}`}>{info.user.email}</a>
    <a href={`tel:${info.user.phone}`}>{info.user.phone}</a>
  </footer>
)

export default Footer
