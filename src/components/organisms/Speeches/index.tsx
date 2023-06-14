import 'keen-slider/keen-slider.min.css'
import Style from './Speeches.module.scss'

import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

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

  const [sliderRef] = useKeenSlider(
    {
      breakpoints: {
        '(min-width: 0)': {
          slides: {
            spacing: 15,
            perView: 1
          }
        },
        '(min-width: 576px)': {
          slides: {
            spacing: 15,
            perView: 2
          }
        },
        '(min-width: 992px)': {
          slides: {
            spacing: 15,
            perView: 3
          }
        }
      }
    },
    []
  )
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
            <div className="keen-slider" ref={sliderRef}>
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
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Speeches
