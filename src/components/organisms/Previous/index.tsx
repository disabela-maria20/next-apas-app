import Style from './Previous.module.scss'
import 'swiper/css'

import PAS from './Previous.json'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// eslint-disable-next-line import-helpers/order-imports
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Previous = () => {
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
      <h3>Palestrantes</h3>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },

          1200: {
            slidesPerView: 6,
            spaceBetween: 50
          },
          1400: {
            slidesPerView: 7,
            spaceBetween: 50
          }
        }}
        modules={[Autoplay]}
      >
        {PAS.map((data) => (
          <SwiperSlide key={data.id}>
            <section className={Style.BlockImage}>
              <LazyLoadImage
                effect="black-and-white"
                src={`/images/speaker2022/${data.image}`}
                alt={data.nome}
              />
              <h3>{data.nome}</h3>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

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
