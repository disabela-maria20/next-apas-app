import React, { useState, useEffect, useCallback } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Style from './Gallery.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Index: React.FC = () => {
  const [numbers, setNumbers] = useState<string[]>([])
  const [count, setCount] = useState(131)
  const [modal, setModal] = useState<boolean>(false)
  const [item, setItem] = useState<any>()
  useEffect(() => {
    const formattedNumbers: string[] = []
    for (let i = 1; i <= count; i++) {
      formattedNumbers.push(String(i).padStart(3, '0'))
    }
    setNumbers(formattedNumbers)
  }, [count])

  const handleClick = () => {
    setCount((prevCount) => prevCount + 10)
  }

  const Open = (state: boolean, number: any) => {
    setItem(number)
    setModal(state)
  }

  return (
    <section className={Style.gallery}>
      <div className={Style.container}>
        <h1>Fotos</h1>
        <div className={Style.grid}>
          {numbers.map((number, index) => (
            <LazyLoadImage
              effect="blur"
              src={`/images/event/Image_${number}.webp`}
              key={index}
              onClick={() => Open(true, number)}
            />
          ))}
        </div>
        {count < 131 && <button onClick={handleClick}>Mostrar +</button>}
        <div className={`${Style.modal} ${modal ? Style.active : ''}`}>
          <span onClick={() => setModal(false)} className={Style.close}>
            &#9587;
          </span>
          <LazyLoadImage
            effect="blur"
            src={`/images/event/Image_${item}.webp`}
          />
        </div>
      </div>
    </section>
  )
}

export default Index
