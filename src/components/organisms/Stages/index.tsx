/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'

import Styled from './Stage.module.scss'

import Speeches from './DataEvent.json'

const COLOR: string[] = ['#5f249f', '#676eff', '#007186', '#00b5d7']

type PropsPales = {
  id: number
  name: string
  duration: string
  description: string
}

const Stages = () => {
  const arrStage = useRef<HTMLDivElement>(null)
  const circlediv = useRef<HTMLDivElement>(null)
  const triangleSvg = useRef<NodeListOf<SVGPolygonElement> | null>(null)
  const block = useRef<HTMLDivElement>(null)
  const lastHoveredIndex = useRef<number | null>(null)

  const [componente, setComponente] = useState<PropsPales[]>()

  useEffect(() => {
    setComponente(Speeches[0])
    triangleSvg.current = arrStage.current?.querySelectorAll(
      'polygon'
    ) as NodeListOf<SVGPolygonElement>

    const activateHover = (index: number): void => {
      if (lastHoveredIndex.current !== null) {
        triangleSvg.current?.[lastHoveredIndex.current]?.removeAttribute(
          'style'
        )
      }
      circlediv.current?.setAttribute(
        'style',
        `background-color: ${COLOR[index]}`
      )
      block.current?.setAttribute('style', `color:${COLOR[index]}`)
      setComponente(Speeches[index])
      lastHoveredIndex.current = index
    }

    const deactivateHover = (): void => {
      triangleSvg.current?.forEach((item, index) => {
        if (index !== lastHoveredIndex.current) {
          item.style.opacity = '0.3'
        }
      })
    }

    const handleMouseOver = (index: number) => (): void => {
      activateHover(index)
    }

    const handleMouseOut = () => {
      deactivateHover()
    }

    triangleSvg.current?.forEach((item: SVGPolygonElement, index: number) => {
      item.addEventListener('mouseover', handleMouseOver(index))
      item.addEventListener('mouseout', handleMouseOut)
    })

    return () => {
      triangleSvg.current?.forEach((item: SVGPolygonElement, index: number) => {
        item.removeEventListener('mouseover', handleMouseOver(index))
        item.removeEventListener('mouseout', handleMouseOut)
      })
    }
  }, [componente])

  return (
    <article className={Styled.stage}>
      <div className={Styled.container}>
        <h2>Palestras</h2>
        <section className={Styled.stageGrid}>
          <div>
            <h2>
              customer <br /> experience
            </h2>
            <div className={Styled.containerStage}>
              <div className={Styled.containerBox}>
                <div className={Styled.blockStage} ref={arrStage}>
                  <span className={Styled.top}>
                    <svg width="250" height="250">
                      <polygon points="55,55 250,0 110,250" />
                    </svg>
                    <p>
                      Arquitetura e <br /> Sustentação
                    </p>
                  </span>

                  <span className={Styled.botton}>
                    <svg width="250" height="250">
                      <polygon points="55,55 250,0 110,250" />
                    </svg>
                    <p>Fit Digital</p>
                  </span>

                  <span className={Styled.right}>
                    <svg width="250" height="250">
                      <polygon points="55,55 250,0 110,250" />
                    </svg>
                    <p>
                      Customer <br /> Experience
                    </p>
                  </span>

                  <span className={Styled.left}>
                    <svg width="250" height="250">
                      <polygon points="55,55 250,0 110,250" />
                    </svg>
                    <p>
                      Inovações <br /> Tecnológicas
                    </p>
                  </span>
                  <div className={Styled.circle} ref={circlediv}></div>
                </div>
              </div>
            </div>
          </div>
          <div ref={block} style={{ color: '#5f249f' }}>
            {componente?.map((data: PropsPales) => (
              <section key={data.id}>
                <div className={Styled.gridTime}>
                  <div className={Styled.time}>
                    <strong>18h00</strong>
                    <p>
                      duração <strong>{data.duration}</strong>{' '}
                    </p>
                  </div>
                  <div className={Styled.Info}>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                  </div>
                </div>
                <span></span>
              </section>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}

export default Stages
