/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'

import Styled from './Stage.module.scss'

import Speeches from './DataEvent.json'

import { LineUp } from '@/components/molecules'

const COLOR: string[] = ['#5f249f', '#00b5d7', '#007186', '#676eff']

type PropsPales = {
  id: number
  name: string
  duration: string
  description: string
}

const Stages = () => {
  const circlediv = useRef<HTMLDivElement>(null)
  const blockTable = useRef<HTMLDivElement>(null)
  const blockDiv = useRef<HTMLDivElement | null>(null)
  const triangle = useRef<NodeListOf<HTMLDivElement> | null>(null)

  const [componente, setComponente] = useState<PropsPales[]>()

  useEffect(() => {
    setComponente(Speeches[0])

    triangle.current = blockDiv.current?.querySelectorAll(
      'div'
    ) as NodeListOf<HTMLDivElement>
    const handleMouseOver = (i: number) => {
      circlediv.current?.setAttribute('style', `background-color:${COLOR[i]}`)
      blockTable.current?.setAttribute('style', `color:${COLOR[i]}`)
      setComponente(Speeches[i])
    }

    triangle.current?.forEach((item: HTMLDivElement, index: number) => {
      item.addEventListener('mouseover', () => handleMouseOver(index))
    })

    return () => {
      triangle.current?.forEach((item: HTMLDivElement, index: number) => {
        item.removeEventListener('mouseover', () => handleMouseOver(index))
      })
    }
  }, [])

  return (
    <>
      {/* <LineUp /> */}
      <article className={Styled.stage} id="speeches">
        <div className={Styled.container}>
          <h2>Palestras</h2>
          <section className={Styled.stageGrid}>
            <div>
              <h2>
                customer <br /> experience
              </h2>
              <div className={Styled.containerStage} ref={blockDiv}>
                <div className={Styled.top}></div>
                <div className={Styled.botton}></div>
                <div className={Styled.right}></div>
                <div className={Styled.left}></div>
                <span className={Styled.circle} ref={circlediv}></span>
              </div>
            </div>
            <div ref={blockTable} style={{ color: '#5f249f' }}>
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
    </>
  )
}

export default Stages
