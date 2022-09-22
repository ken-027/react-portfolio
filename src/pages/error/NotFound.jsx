import logo from '../../assets/logo.svg'
import 'animate.css/animate.min.css'

function NotFound() {
  return (
    <div className='notfound'>
      <div className='image animate__animated animate__pulse'>
        <img
          src={logo}
          alt='logo'
        />
      </div>
      <h1>404 <span className='animate__animated animate__bounceInUp'>Not Found</span>
      </h1>
    </div>
  )
}

export default NotFound
