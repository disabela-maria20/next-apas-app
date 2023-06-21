import { LazyLoadImage } from 'react-lazy-load-image-component'

import Style from './Speeches.module.scss'
import 'swiper/css'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Speeches = () => {
  const URLIMAGES = [
    {
      id: 0,
      name: 'Nome Um Sobrenome',
      company: 'Empresa',
      url: 'speaker-1.png'
    },
    {
      id: 1,
      name: 'Nome Dois Sobrenome',
      company: 'Empresa',
      url: 'speaker-2.png'
    },
    {
      id: 2,
      name: 'Nome Três Sobrenome',
      company: 'Empresa',
      url: 'speaker-3.png'
    },
    {
      id: 0,
      name: 'Nome Um Sobrenome',
      company: 'Empresa',
      url: 'speaker-1.png'
    }
  ]

  const responsives = {
    0: { items: 1 },
    568: { items: 2 },
    992: { items: 4 },
    1200: { items: 4 }
  }

  return (
    <>
      <section className={Style.theme} id="speakers">
        <div className={Style.container}>
          <h2>principais temas</h2>
          <ul>
            <li>Lorem ipsum Lorem ipsum</li>
            <li>Lorem ipsum Lorem ipsum</li>
            <li>Lorem ipsum Lorem ipsum</li>
            <li>Lorem ipsum Lorem ipsum</li>
          </ul>
        </div>
      </section>
      <section
        className={Style.speaker}
        style={{ backgroundImage: 'url("./images/bg-gradient.webp")' }}
      >
        <div className={Style.container}>
          <h2>palestrantes</h2>

          <article className={Style.speakerSlide}>
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
                  slidesPerView: 3,
                  spaceBetween: 40
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 40
                }
              }}
              modules={[Autoplay]}
            >
              {URLIMAGES.map((data) => (
                <SwiperSlide key={data.id}>
                  <section>
                    <LazyLoadImage
                      effect="blur"
                      src={`./images/speaker/${data.url}`}
                    />

                    <h3>{data.name}</h3>
                    <p>{data.company}</p>
                  </section>
                </SwiperSlide>
              ))}
            </Swiper>
          </article>
        </div>
      </section>
    </>
  )
}

export default Speeches
