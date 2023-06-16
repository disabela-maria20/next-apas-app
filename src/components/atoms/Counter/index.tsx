import { useEffect, useState } from 'react'

import Style from './Counter.module.scss'

const Counter: React.FC = (): JSX.Element => {
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
    const finalDate: string = '2023-08-15'
    const finalDateTime: number = new Date(finalDate).getTime()

    const updateCountdown = () => {
      const currentTime: Date = new Date()
      const currentDateTime: number = currentTime.getTime()
      const midnight: Date = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        23,
        59,
        59
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
    updateCountdown() // Atualizar imediatamente ao montar o componente

    return () => clearInterval(timer)
  }, [])

  if (
    timeLeft.days > 0 ||
    timeLeft.hours > 0 ||
    timeLeft.minutes > 0 ||
    timeLeft.seconds > 0
  ) {
    return (
      <article className={Style.bgColor}>
        <div className={Style.container}>
          <div className={Style.flexCouter}>
            <h2>
              Faltam
              <strong>
                {timeLeft.days} {timeLeft.days === 1 ? 'dia' : 'dias'}
              </strong>
              <strong>
                {timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}:
                {timeLeft.minutes < 10
                  ? '0' + timeLeft.minutes
                  : timeLeft.minutes}
                :
                {timeLeft.seconds < 10
                  ? '0' + timeLeft.seconds
                  : timeLeft.seconds}
              </strong>
            </h2>
            <a href="" className={Style.link}>
              <img
                src="./images/arrow.png"
                alt="seta para esquerda"
                width={24}
                height={24}
              />
              inscreva-se
            </a>
          </div>
        </div>
      </article>
    )
  }

  return <></>
}

export default Counter
