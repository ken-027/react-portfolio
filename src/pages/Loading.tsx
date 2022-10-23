import React, { useState, useEffect } from 'react'
import logo from '../assets/webdeveloperlogo.gif'
import '../styles/sass/components/_loading.scss'

const Loading = (): React.ReactElement => {
  const [isUnmount, setisUnmount] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setisUnmount(true)
    }, 2600)
  }, [isUnmount])

  return (
    <div className='loading'>
      <div
        className={`image ${
          isUnmount ? `animate__animated animate__fadeOut` : ``
        }`}>
        <img
          src={logo}
          alt='logo'
        />
      </div>
    </div>
  )
}

export default Loading
