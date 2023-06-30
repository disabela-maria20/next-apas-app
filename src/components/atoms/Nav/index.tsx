import AnchorLink from 'react-anchor-link-smooth-scroll'

import Style from './Nav.module.scss'

interface NavProps {
  open: boolean
  setOpen: (value: boolean) => void
}

const Nav: React.FC<NavProps> = ({ open, setOpen }) => {
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
    <nav className={`${Style.navBar} `}>
      <div className={`${!open ? Style.open : Style.close}`}>
        <ul>
          <li onClick={() => setOpen(true)}>
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li onClick={() => setOpen(true)}>
            <AnchorLink href="#about">Sobre</AnchorLink>
          </li>
          <li onClick={() => setOpen(true)}>
            <a href="https://apasnext.com.br/credenciamento/">Credenciamento</a>
          </li>
          <li onClick={() => setOpen(true)}>
            <AnchorLink href="#contact">Contato</AnchorLink>
          </li>
        </ul>
        <ul className={Style.redes}>
          {REDES?.map((redes) => (
            <li key={redes.id}>
              <a href={redes.link}>
                <img
                  src={`./images/${redes.name}.webp`}
                  alt={`rede social ${redes.name}`}
                  width={44}
                  height={44}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
