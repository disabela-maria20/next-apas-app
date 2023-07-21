import 'swiper/css'
import 'swiper/css/navigation'
import { useState, memo, useEffect, useCallback } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Style from './Speeches.module.scss'

import URLIMAGES from './Speeches.json'

import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type Speaker = {
  id: number
  name: string
  profession: string
  company: string
  description: string
  lecture: string
  image: string
}

const Speeches = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [dados, setDados] = useState<Speaker | undefined>()
  const Open = (state: boolean, data: Speaker) => {
    setModal(state)
    setDados(data)
  }
  const handleCloseModal = useCallback(() => {
    setModal(false)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleCloseModal])

  return (
    <>
      <section className={Style.theme}>
        <div className={Style.container}>
          <h2>principais temas</h2>
          <ul>
            <li>
              Escalando com a TI: A Influência da Arquitetura Tecnológica no
              Crescimento do Varejo
            </li>
            <li>Guia Rápido de Inovação para Supermercados</li>
            <li>
              Home Delivery: Como Transformar o Desafio em Oportunidade no
              Varejo
            </li>
            <li>
              Como a eficiência operacional contribui com a lucratividade do
              negócio
            </li>
            <li>
              A Caminhada para o Sucesso através da Inovação: Lições do Grupo
              Pereira
            </li>
            <li>A Jornada Omnichannel: 450% de crescimento em 3 anos</li>
          </ul>
        </div>
      </section>
      <section
        className={Style.speaker}
        id="speakers"
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
              pagination={{
                clickable: true
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
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
                  <section onClick={() => Open(true, data as never)}>
                    <LazyLoadImage
                      src={`${data.image}`}
                      sizes="230px 150px"
                      role="presentation"
                      alt=""
                      loading="lazy"
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
      <section className="">
        <div
          id="open-modal"
          className={`${Style.modalWindow} ${modal ? Style.active : ''}`}
        >
          <div>
            <span
              className={Style.modalClose}
              onClick={handleCloseModal}
              role="button"
            >
              ×
            </span>
            <div className={Style.modalFlex}>
              <img
                src={dados?.image}
                alt={dados?.name}
                width={350}
                height={300}
              />
              <div className={Style.text}>
                <h2>{dados?.name}</h2>
                <h3>{dados?.profession}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: dados?.description as string
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Speeches)
