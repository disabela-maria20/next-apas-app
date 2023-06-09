import 'swiper/css'
import 'swiper/css/navigation'
import { memo } from 'react'

import Style from './Previous.module.scss'

import PAS from './Previous.json'

import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// eslint-disable-next-line import-helpers/order-imports
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Previous = () => {
  return (
    <article className={Style.previous}>
      <div className={Style.container}>
        <section>
          <h2 className={Style.title}>veja o que rolou em 2022</h2>
          <div className={Style.dataFlex}>
            <h2 className={Style.data}>
              34
              <span>palestrantes</span>
            </h2>
            <h2 className={Style.data}>
              37
              <span>patrocionadores</span>
            </h2>
            <h2 className={Style.data}>
              12
              <span>horas de evento</span>
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
                src={`/images/speaker2022/${data.image}`}
                sizes="230px 250px"
                visibleByDefault={true}
                threshold={100}
                alt={data.nome}
                role="presentation"
              />
              <h3>{data.nome}</h3>
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
                <li>Virtualização, Conexão e Convergência Digital. &nbsp;</li>
                <li> Tecnologia: da retaguarda ao consumidor final. &nbsp;</li>
                <li>
                  Além do Físico: o varejo mais Digital e mais Humano. &nbsp;
                </li>
              </ul>
              <ul>
                <li>
                  Praticando o Impensável: as transformações do varejo. &nbsp;
                </li>
                <li>Como construir uma jornada de compras memorável. &nbsp;</li>
                <li> Desafios e Riscos na sustentação do negócio. &nbsp;</li>
              </ul>

              <ul>
                <li> O futuro na prática de hoje.&nbsp;</li>
                <li> A loja 4.0 conectada com o consumidor digital. &nbsp;</li>
                <li>
                  Experiências inovadoras no chão de loja e no mundo virtual.
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
