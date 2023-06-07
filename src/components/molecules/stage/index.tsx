import React, { useEffect, useRef } from 'react'

import Styled from './Stage.module.scss'

const Stage = () => {
  const arrStage = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const circle = arrStage.current?.querySelector('circle')

    arrStage.current
      ?.querySelectorAll('polygon')
      .forEach((item, index, list) => {
        console.log(list)
        list[index].addEventListener('mouseover', (e: MouseEvent): void => {
          const elem = e.target as HTMLDivElement
        })
      })
  }, [])
  return (
    <div className={Styled.containerStage}>
      <div className={Styled.containerBox}>
        <div className={Styled.blockStage} ref={arrStage}>
          <span>
            <svg width="220" height="220" className={Styled.top}>
              <polygon points="55,55 220,0 110,220" />
            </svg>
          </span>

          <span>
            <svg width="220" height="220" className={Styled.botton}>
              <polygon points="55,55 220,0 110,220" />
            </svg>
          </span>

          <span>
            <svg width="220" height="220" className={Styled.right}>
              <polygon points="55,55 220,0 110,220" />
            </svg>
          </span>

          <span>
            <svg width="220" height="220" className={Styled.left}>
              <polygon points="55,55 220,0 110,220" />
            </svg>
          </span>
          <span>
            <svg width="100" height="100" className={Styled.circle}>
              <circle cx="45" cy="45" r="45" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Stage
