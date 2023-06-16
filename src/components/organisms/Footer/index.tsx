import Style from './Footer.module.scss'

const index = () => {
  const LINK = [
    {
      id: 0,
      name: 'Home',
      link: ''
    },
    {
      id: 1,
      name: 'Sobre',
      link: ''
    },
    {
      id: 2,
      name: 'Credenciamento',
      link: ''
    },
    {
      id: 4,
      name: 'Palestras',
      link: ''
    },
    {
      id: 5,
      name: 'Palestrantes',
      link: ''
    },
    {
      id: 6,
      name: 'Contato',
      link: ''
    }
  ]

  const REDES = [
    { id: 0, name: 'linkedin', link: '' },
    { id: 1, name: 'instagram', link: '' },
    { id: 2, name: 'facebook', link: '' }
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
                    <a href="">
                      <img
                        src={`./images/${redes.name}.webp`}
                        alt={`rede social ${redes.name}`}
                        width={29}
                        height={29}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className={Style.navBar}>
              <ul>
                {LINK.map((link) => (
                  <li key={link.id}>
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
          <section className={Style.contact}>
            <h3>Precisa de ajuda?</h3>
            <p>Entre em contato com</p>
            <a href="tel:+">(11) 3647-5000</a> <br />
            <a href="mailto:exemplo@exemplo.com.br">central.apas@apas.com.br</a>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default index
