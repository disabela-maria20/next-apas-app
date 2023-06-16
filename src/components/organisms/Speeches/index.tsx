import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'

import Style from './Speeches.module.scss'

const Speeches = () => {
  const URLIMAGES = [
    {
      id: 0,
      name: 'Nome Um Sobrenome',
      company: 'Empresa',
      url: './images/speaker/speaker-1.png'
    },
    {
      id: 1,
      name: 'Nome Dois Sobrenome',
      company: 'Empresa',
      url: './images/speaker/speaker-2.png'
    },
    {
      id: 2,
      name: 'Nome Três Sobrenome',
      company: 'Empresa',
      url: './images/speaker/speaker-3.png'
    }
  ]

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    992: { items: 3 }
  }
  return (
    <>
      <section className={Style.theme}>
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
            <AliceCarousel
              activeIndex={0}
              infinite={true}
              autoPlayInterval={2030}
              autoPlay={true}
              disableButtonsControls={true}
              disableDotsControls={true}
              mouseTracking
              paddingLeft={20}
              paddingRight={20}
              responsive={responsive}
            >
              {URLIMAGES.map((data) => (
                <div key={data.id} className="keen-slider__slide">
                  <img
                    src={data.url}
                    alt="Palestrante"
                    width={317}
                    height={346}
                  />
                  <h3>{data.name}</h3>
                  <p>{data.company}</p>
                </div>
              ))}
            </AliceCarousel>
          </article>
        </div>
      </section>
    </>
  )
}

export default Speeches
