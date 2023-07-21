import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Style from './Footer.module.scss'

const index = () => {
  const LINK = [
    {
      id: 0,
      name: 'Home',
      link: '#home'
    },
    {
      id: 1,
      name: 'Sobre',
      link: '#about'
    },
    {
      id: 2,
      name: 'Credenciamento - Em Breve',
      link: '#'
    },
    // {
    //   id: 2,
    //   name: 'Credenciamento',
    //   link: '#accreditation'
    // },
    // {
    //   id: 4,
    //   name: 'Palestras',
    //   link: '#speeches'
    // },
    // {
    //   id: 5,
    //   name: 'Palestrantes',
    //   link: '#speakers'
    // },
    {
      id: 6,
      name: 'Contato',
      link: '#contact'
    }
  ]

  const REDES = [
    {
      id: 0,
      name: 'linkedin',
      link: 'https://www.linkedin.com/company/apas-next'
    },
    {
      id: 1,
      name: 'instagram',
      link: 'https://instagram.com/nextbyapas?igshid=MzRlODBiNWFlZA=='
    },
    { id: 2, name: 'facebook', link: 'https://www.facebook.com/ApasNext' }
  ]
  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        <div className={Style.flex}>
          <section>
            <nav className={Style.redes}>
              <ul>
                {REDES.map((redes) => (
                  <li key={redes.id}>
                    <a href={redes.link}>
                      <img
                        src={`./images/${redes.name}.svg`}
                        alt={`rede social ${redes.name}`}
                        width={29}
                        height={29}
                        role="presentation"
                      />
                      <span>{redes.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className={Style.navBar}>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <AnchorLink href="#about">Sobre</AnchorLink>
                </li>
                <li>
                  <a href="https://eventonsg.com.br/credenciamento/">
                    Credenciamento
                  </a>
                </li>
                <li>
                  <Link href="/2022">Rolou em 2022</Link>
                </li>
                <li>
                  <AnchorLink href="#speakers">palestrantes</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#marks">patrocinadores</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contact">Contato</AnchorLink>
                </li>
              </ul>
            </nav>
          </section>
          <section className={Style.contact}>
            <h3>Precisa de ajuda?</h3>
            <p>Entre em contato com</p>
            <a
              href="tel:+(11) 3647-5000"
              target="JET"
              title="Telefone"
              aria-label="Telefone da APAS"
              rel="noreferrer"
              role="link"
            >
              (11) 3647-5000
            </a>
            <a
              href="mailto:central.apas@apas.com.br "
              target="JET"
              title="E-mail"
              aria-label="E-mail da APAS"
              rel="noreferrer"
              role="link"
            >
              central.apas@apas.com.br
            </a>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default index
