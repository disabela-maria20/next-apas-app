/* eslint-disable import-helpers/order-imports */
// eslint-disable-next-line import-helpers/order-imports
import AliceCarousel from 'react-alice-carousel'

import Style from './Previous.module.scss'

import 'react-alice-carousel/lib/alice-carousel.css'
import { useEffect, useState } from 'react'

const Previous = () => {
  const [image, setImage] = useState<any>()

  const Item = () => {
    const multiplicador = 30
    const imagens = []
    for (let i = 0; i < multiplicador; i++) {
      imagens.push(
        <div className={Style.BlockImage}>
          <img src="/images/foto.png" />
          <h3>
            walter <br /> longo
          </h3>
        </div>
      )
    }
    return setImage(imagens)
  }
  useEffect(() => {
    Item()
  }, [])

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    992: { items: 3 },
    1200: { items: 4 },
    1700: { items: 5 },
    1900: { items: 6 },
    2000: { items: 7 }
  }

  return (
    <article className={Style.previous}>
      <div className={Style.container}>
        <section>
          <h2 className={Style.title}>o que rolou em 2022</h2>
          <div className={Style.dataFlex}>
            <h2 className={Style.data}>
              xxx
              <span>pesoas</span>
            </h2>
            <h2 className={Style.data}>
              xx
              <span>marcas</span>
            </h2>
            <h2 className={Style.data}>
              xx
              <span>palestras</span>
            </h2>
          </div>
        </section>
      </div>
      <h3>Palestrantes participantes</h3>
      <AliceCarousel
        activeIndex={0}
        infinite={true}
        items={image}
        autoPlayInterval={2030}
        autoPlay={true}
        disableButtonsControls={true}
        disableDotsControls={true}
        mouseTracking
        paddingLeft={20}
        paddingRight={20}
        responsive={responsive}
      />
      <section className={Style.theme}>
        <h2>principais temas</h2>
        <div className={Style.themeCenter}>
          <p>
            lorem ipsum
            <strong>lorem ipsum</strong>
          </p>
          <p>
            lorem ipsum
            <strong>lorem ipsum</strong>
          </p>
        </div>
      </section>
    </article>
  )
}

export default Previous
