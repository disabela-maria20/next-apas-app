import React, { useEffect, useRef, useState } from 'react'

import Styled from './Stage.module.scss'

const COLOR: string[] = ['#36b436', '#912020', '#465b8a', '#8d026f']
const TEXT: string[] = ['Texto 1', 'Texto 2', 'Texto 3', 'Texto 4']
const Stage = () => {
  const arrStage = useRef<HTMLDivElement>(null)
  const circle = useRef<SVGSVGElement>(null)

  const [componente, setComponente] = useState<any>('Texto 1')

  useEffect(() => {
    const circleSvg = circle.current?.querySelector('circle')
    const triangleSvg = arrStage.current?.querySelectorAll('polygon')

    const activateHover = (index: number): void => {
      triangleSvg?.forEach((item, i) => {
        if (i === index) {
          circleSvg?.setAttribute('fill', COLOR[i])
          console.log(TEXT[i])
          setComponente(TEXT[i])
        }
      })
    }

    const handleMouseOver = (index: number) => (): void => {
      activateHover(index)
    }

    triangleSvg?.forEach((item: SVGPolygonElement, index: number) => {
      item.addEventListener('mouseover', handleMouseOver(index))
    })

    return () => {
      triangleSvg?.forEach((item: SVGPolygonElement, index: number) => {
        item.removeEventListener('mouseover', handleMouseOver(index))
      })
    }
  }, [])

  return (
    <>
      <div className={Styled.containerStage}>
        <div className={Styled.containerBox}>
          <div className={Styled.blockStage} ref={arrStage}>
            <span className={Styled.top}>
              <svg width="220" height="220">
                <polygon points="55,55 220,0 110,220" />
              </svg>
              <p>Lorem ipsum dolor sit</p>
            </span>

            <span className={Styled.botton}>
              <svg width="220" height="220">
                <polygon points="55,55 220,0 110,220" />
              </svg>
              <p>Lorem ipsum dolor sit</p>
            </span>

            <span className={Styled.right}>
              <svg width="220" height="220">
                <polygon points="55,55 220,0 110,220" />
              </svg>
              <p>Lorem ipsum dolor sit</p>
            </span>

            <span className={Styled.left}>
              <svg width="220" height="220">
                <polygon points="55,55 220,0 110,220" />
              </svg>
              <p>Lorem ipsum dolor sit</p>
            </span>
            <span>
              <svg
                width="100"
                height="100"
                className={Styled.circle}
                ref={circle}
              >
                <circle cx="45" cy="45" r="45" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {componente}
    </>
  )
}

export default Stage
