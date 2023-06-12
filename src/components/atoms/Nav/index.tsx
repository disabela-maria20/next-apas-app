import React from 'react'

import Style from './Nav.module.scss'

interface NavProps {
  open: boolean
}

const Nav: React.FC<NavProps> = ({ open }) => {
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
    <nav className={Style.navBar}>
      <ul className={`${open ? Style.open : Style.close}`}>
        {LINK.map((link) => (
          <li key={link.id}>
            <a href="">{link.name}</a>
          </li>
        ))}
        <ul className={Style.redes}>
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
      </ul>
    </nav>
  )
}

export default Nav
