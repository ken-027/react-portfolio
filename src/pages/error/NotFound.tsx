import React from 'react'
import logo from '../../assets/logo.svg'
import 'animate.css/animate.min.css'
import '../../styles/sass/components/_not_found.scss'

const NotFound = (): React.ReactElement => {
  return (
    <div className='notfound'>
      <div className='image animate__animated animate__pulse'>
        <img
          src={logo}
          alt='logo'
        />
      </div>
      <h1>
        404{' '}
        <span className='animate__animated animate__bounceInUp'>Not Found</span>
      </h1>
    </div>
  )
}

export default NotFound
