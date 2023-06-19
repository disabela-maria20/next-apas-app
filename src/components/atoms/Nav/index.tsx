'use client'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Style from './Nav.module.scss'

interface NavProps {
  open: boolean
}

const Nav: React.FC<NavProps> = ({ open }) => {
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
      name: 'Credenciamento',
      link: '#accreditation'
    },
    {
      id: 4,
      name: 'Palestras',
      link: '#speeches'
    },
    {
      id: 5,
      name: 'Palestrantes',
      link: '#speakers'
    },
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
    { id: 1, name: 'instagram', link: 'https://www.instagram.com/apasnext/' },
    { id: 2, name: 'facebook', link: 'https://www.facebook.com/ApasNext' }
  ]
  return (
    <nav className={Style.navBar}>
      <ul className={`${open ? Style.open : Style.close}`}>
        {LINK?.map((link) => (
          <li key={link.id}>
            <AnchorLink href={link.link}>{link.name}</AnchorLink>
          </li>
        ))}
        <ul className={Style.redes}>
          {REDES?.map((redes) => (
            <li key={redes.id}>
              <a href={redes.link}>
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
      </ul>
    </nav>
  )
}

export default Nav
