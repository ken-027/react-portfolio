import { useEffect } from 'react'
import logo from '../assets/kenlogo.gif'

const Loading = () => {
  
  useEffect(() => {
    const delay = async() => {
      return await new Promise(resolve => setTimeout(resolve, 3000));
    }

    delay()

    return () => {

    }
  }, [])

  return (
    <div>
      Loading
      <img
        src={logo}
        alt='logo'
      />
    </div>
  )
}

export default Loading
