import { useEffect, useRef } from 'react'

import Style from './Video.module.scss'

const Burger = (): JSX.Element => {
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleMouseOver = () => {
      if (video.current) {
        video.current.controls = true
      }
    }

    const handleMouseOut = () => {
      if (video.current) {
        video.current.controls = false
      }
    }

    if (video.current) {
      video.current.addEventListener('mouseover', handleMouseOver)
      video.current.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
      if (video.current) {
        video.current.removeEventListener('mouseover', handleMouseOver)
        video.current.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  return (
    <video
      src="./video/video-apas.mp4"
      controls
      className={Style.video}
      ref={video}
      poster="./images/play.webp"
    />
  )
}

export default Burger
