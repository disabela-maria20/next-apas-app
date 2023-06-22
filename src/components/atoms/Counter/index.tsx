import React, { useCallback, useEffect, useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Style from './Counter.module.scss'

const Counter: React.FC = (): JSX.Element => {
  const scroll = useRef<HTMLDivElement | null>(null)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const finalDate: string = '2023-08-15T01:00:00'
    const finalDateTime: number = new Date(finalDate).getTime()

    const updateCountdown = () => {
      const currentTime: Date = new Date()
      const currentDateTime: number = currentTime.getTime()
      const midnight: Date = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        0,
        0,
        0
      )
      const midnightDateTime: number = midnight.getTime()

      if (finalDateTime > currentDateTime) {
        const diffInMs: number = finalDateTime - currentDateTime
        const diffInSeconds: number = Math.floor(diffInMs / 1000)
        const days: number = Math.floor(diffInSeconds / (24 * 60 * 60))
        const hours: number = Math.floor(
          (diffInSeconds % (24 * 60 * 60)) / (60 * 60)
        )
        const minutes: number = Math.floor((diffInSeconds % (60 * 60)) / 60)
        const seconds: number = Math.floor(diffInSeconds % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        const diffInMs: number = midnightDateTime - currentDateTime
        const diffInSeconds: number = Math.floor(diffInMs / 1000)
        const hours: number = Math.floor(diffInSeconds / (60 * 60))
        const minutes: number = Math.floor((diffInSeconds % (60 * 60)) / 60)
        const seconds: number = Math.floor(diffInSeconds % 60)

        setTimeLeft({ days: 0, hours, minutes, seconds })
      }
    }

    const timer = setInterval(updateCountdown, 1000)
    updateCountdown()

    return () => clearInterval(timer)
  }, [])

  const handleScroll = useCallback(() => {
    const scrollTop: number = window.scrollY
    const clientHeight: number = scroll.current?.clientHeight ?? 0

    if (scrollTop > clientHeight) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  if (
    timeLeft.days > 0 ||
    timeLeft.hours > 0 ||
    timeLeft.minutes > 0 ||
    timeLeft.seconds > 0
  ) {
    return (
      <article
        className={`${Style.bgColor} ${isScrolling ? Style.active : ''}`}
        ref={scroll}
      >
        <div className={Style.container}>
          <div className={Style.flexCouter}>
            <h2>
              Faltam
              <strong>
                {timeLeft.days} {timeLeft.days === 1 ? 'dia' : 'dias'}
              </strong>
              <div className={Style.timeContainer}>
                <span className={Style.timeDiv}>
                  {timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}h
                </span>
                <span className={Style.timeDiv}>
                  {timeLeft.minutes < 10
                    ? '0' + timeLeft.minutes
                    : timeLeft.minutes}
                  :
                </span>
                <span className={Style.timeDiv}>
                  {timeLeft.seconds < 10
                    ? '0' + timeLeft.seconds
                    : timeLeft.seconds}
                </span>
              </div>
            </h2>
            <AnchorLink href="#accreditation" className={Style.link}>
              <img
                src="./images/arrow.png"
                alt="seta para esquerda"
                width={36}
                height={24}
              />
              inscreva-se
            </AnchorLink>
          </div>
        </div>
      </article>
    )
  }

  return <></>
}

export default Counter
