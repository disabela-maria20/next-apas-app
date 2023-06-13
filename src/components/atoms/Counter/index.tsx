import { useEffect, useState } from 'react'

import Style from './Counter.module.scss'

const Counter: React.FC = (): JSX.Element => {
  const [days, setDays] = useState<number>(0)

  useEffect(() => {
    const finalDate: string = '2023-08-15'
    const finalDateTime: number = new Date(finalDate).getTime()

    const updateDays = () => {
      const currentTime: number = new Date().getTime()
      const diffInMs: number = finalDateTime - currentTime
      const diffInDays: number = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
      setDays(diffInDays >= 0 ? diffInDays : 0)
    }

    const timer = setInterval(updateDays, 1000)
    updateDays() // Atualizar imediatamente ao montar o componente

    return () => clearInterval(timer)
  }, [])

  if (days >= 0) {
    return (
      <article className={Style.bgColor}>
        <div className={Style.container}>
          <div className={Style.flexCouter}>
            <h2>
              Faltam
              <strong>
                {days} {days === 1 ? 'dia' : 'dias'}
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
