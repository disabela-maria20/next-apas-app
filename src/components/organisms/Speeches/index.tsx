import { LazyLoadImage } from 'react-lazy-load-image-component'

import 'swiper/css'
import 'swiper/css/navigation'
import Style from './Speeches.module.scss'

import { Autoplay, Navigation } from 'swiper'
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
      id: 3,
      name: 'Nome Um Sobrenome',
      company: 'Empresa',
      url: 'speaker-1.png'
    }
  ]

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
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
            >
              {URLIMAGES.map((data) => (
                <SwiperSlide key={data.id}>
                  <section>
                    <LazyLoadImage
                      effect="blur"
                      src={`./images/speaker/${data.url}`}
                      sizes="230px "
                      visibleByDefault={true}
                      threshold={100}
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
