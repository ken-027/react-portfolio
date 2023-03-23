import { useEffect, useState } from 'react'

const useScreenSize = () => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', resize)

    console.log('screen width', width)
    console.log('screen height', height)

    return () => window.removeEventListener('resize', resize)
  }, [width, height])

  return { width, height }
}

export default useScreenSize
