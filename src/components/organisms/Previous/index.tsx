import 'swiper/css'
import 'swiper/css/navigation'
import { memo } from 'react'

import Style from './Previous.module.scss'

import PAS from './Speeches.json'

import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// eslint-disable-next-line import-helpers/order-imports
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Previous = () => {
  return (
    <article className={Style.previous}>
      <div className={Style.container}>
        <section>
          <h2 className={Style.title}>veja o que rolou em 2023</h2>
          <div className={Style.dataFlex}>
            <h2 className={Style.data}>
              49
              <span>palestrantes</span>
            </h2>
            <h2 className={Style.data}>
              22
              <span>patrocionadores</span>
            </h2>
            <h2 className={Style.data}>
              9H<span> evento</span>
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
            slidesPerView: 3,
            spaceBetween: 40
          },
          990: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 50
          }
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {PAS.map((data) => (
          <SwiperSlide key={data.id}>
            <section className={Style.BlockImage}>
              <LazyLoadImage
                effect="blur"
                src={`${data.image}`}
                sizes="230px 250px"
                visibleByDefault={true}
                threshold={100}
                alt={data.name}
                role="presentation"
              />
              <h3>{data.name}</h3>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className={Style.theme}>
        <h2>principais temas</h2>
        <div className={Style.themeCenter}>
          <div className={Style.container}>
            <div className={Style.themeFlex}>
              <ul>
                <li>
                  Home Delivery: Como Transformar o Desafio em Oportunidade no
                  Varejo &nbsp;
                </li>
                <li>
                  Retail Media na Omniera: Potenciais de Negócio e os Desafios
                  &nbsp;
                </li>
                <li>
                  A Jornada Omnichannel: 450% de crescimento em 3 anos &nbsp;
                </li>
              </ul>
              <ul>
                <li>
                  Escalando com a TI: A Influência da Arquitetura Tecnológica no
                  Crescimento do Varejo &nbsp;
                </li>
                <li>
                  Gestão de TI no Novo Normal: Estruturando Times para Suportar
                  a Transformação Digital no Varejo &nbsp;
                </li>
                <li>
                  Gestão de TI no Novo Normal: Estruturando Times para Suportar
                  a Transformação Digital no Varejo&nbsp;
                </li>
              </ul>

              <ul>
                <li> Guia Rápido de Inovação para Supermercados&nbsp;</li>
                <li>A Cultura Impulsionando a Aceleração Digital &nbsp;</li>
                <li>
                  Supermercados e Plataformas de Marketplace B2B e B2C, desafios
                  e oportunidades num mundo omnichannel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default memo(Previous)
