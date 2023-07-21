/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'

import Styled from './Stage.module.scss'

import Speeches from './DataEvent.json'

import { LineUp } from '@/components/molecules'

const COLOR: string[] = ['#1d1f48', '#00b5d7', '#5f249f', '#d6c800']
const TITLEARRAY: string[] = [
  'Expansão Omnichannel',
  'Da TI básica às tecnologias emergentes',
  'Cultura de inovação e aceleração digital',
  'Evolução do Supply Chain e operações'
]
const Stages = () => {
  const circlediv = useRef<HTMLDivElement>(null)
  const blockTable = useRef<HTMLDivElement>(null)
  const blockDiv = useRef<HTMLDivElement | null>(null)
  const triangle = useRef<NodeListOf<HTMLDivElement> | null>(null)
  const [arrTitle, setArrTitle] = useState(
    'CULTURA DE INOVAÇÃO E ACELERAÇÃO DIGITAL'
  )
  const [componente, setComponente] = useState<any[]>()

  useEffect(() => {
    setComponente(Speeches[0])

    triangle.current = blockDiv.current?.querySelectorAll(
      'div'
    ) as NodeListOf<HTMLDivElement>
    const handleMouseOver = (i: number) => {
      circlediv.current?.setAttribute('style', `background-color:${COLOR[i]}`)
      blockTable.current?.setAttribute('style', `color:${COLOR[i]}`)
      setComponente(Speeches[i])
      setArrTitle(TITLEARRAY[i])
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
      <LineUp />
      <article className={Styled.stage} id="speeches">
        <div className={Styled.container}>
          <h2>Palestras</h2>
          <section className={Styled.stageGrid}>
            <div>
              <h2>{arrTitle}</h2>
              <div className={Styled.containerStage} ref={blockDiv}>
                <div className={Styled.top}></div>
                <div className={Styled.botton}></div>
                <div className={Styled.right}></div>
                <div className={Styled.left}></div>
                <span className={Styled.circle} ref={circlediv}></span>
              </div>
            </div>
            <div ref={blockTable} style={{ color: '#5f249f' }}>
              {componente?.map((data) => (
                <section key={data.id}>
                  <div className={Styled.gridTime}>
                    <div className={Styled.time}>
                      <strong>{data.time}</strong>
                      <p>
                        <strong>{data.duration}</strong>
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
