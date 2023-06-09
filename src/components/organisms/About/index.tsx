import Style from './About.module.scss'

import { Logo, Video } from '@/components/atoms'
import { Sponsor } from '@/components/molecules'

const About = () => {
  const CARD = [
    {
      id: 0,
      title: 'um mercado que cresce no brasil',
      dados: { Porcentagem: 7, desc: 'do pib em 2022' },
      list: [
        {
          id: 0,
          description:
            '<strong> <span>+2,3%</span>  em número de lojas</strong> 94.706 lojas'
        },

        {
          id: 2,
          description:
            '<strong><span>+3,2% </span> em empregos diretos e indiretos</strong> 3,2 milhões em 2022'
        }
      ]
    },
    {
      id: 1,
      title: 'e em são paulo o setor possui',
      dados: { Porcentagem: 30, desc: 'em market share' },
      list: [
        {
          id: 0,
          description:
            '<strong> <span>+2,3% </span> em número de lojas</strong> 20.820 lojas'
        },
        {
          id: 2,
          description:
            '<strong> <span>+3,1%</span>  em empregos diretos</strong> 643.091 pessoas empregadas'
        }
      ]
    }
  ]

  const ICON = [
    './images/store_icone_laran.png',
    './images/profits_icone_laran.png',
    './images/handshake_icone_laran.png'
  ]

  return (
    <article className={Style.about} id="about">
      <div className={Style.container}>
        <section className={Style.aboutGrid}>
          <div className={Style.aboutVideo}>
            <Video />
          </div>
          <div className={Style.aboutBlock}>
            <h2>
              sobre o
              <Logo />
            </h2>
            <p>
              O NSG surge em 2023 com um novo posicionamento, que, através da
              sua nova identidade visual, chega cheio de dinamismo, jovialidade,
              inovação, tecnologia e conexão. Com conteúdos exclusivos, o evento
              proporciona troca de conhecimento, boas práticas, relacionamento,
              integração e exposição de soluções direcionadas ao setor.
              Prepare-se para a 6° edição do NSG!
            </p>
          </div>
        </section>
      </div>
      <article
        className={Style.aboutCard}
        style={{ backgroundImage: 'url("./images/shade-circular.webp")' }}
      >
        <div className={Style.container}>
          <h2>
            Tecnologias, tendências e experiências de consumo &nbsp;
            <span>à frente do nosso tempo</span>
          </h2>
          <h2>
            <span>A hora de transformar</span> o futuro do&nbsp;
            <span>varejo supermercadista é agora.</span>
          </h2>
          <div className={Style.aboutCardGrid}>
            {CARD.map((card) => (
              <section key={card.id}>
                <h3>{card.title}</h3>
                <div className={Style.aboutBorderPorcentagem}>
                  <span>{card.dados.Porcentagem}%</span>
                  <span>{card.dados.desc}</span>
                </div>
                {card.list.map((list) => (
                  <div className={Style.aboutCardList} key={list.id}>
                    <img
                      src={list.id === 2 ? ICON[2] : ICON[list.id]}
                      alt="icone"
                      width={74}
                      height={74}
                    />
                    <div>
                      <p
                        dangerouslySetInnerHTML={{ __html: list.description }}
                      />
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
        <Sponsor />
      </article>
    </article>
  )
}

export default About
