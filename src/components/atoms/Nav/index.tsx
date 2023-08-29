import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { BsPersonCircle } from 'react-icons/bs'

import Style from './Nav.module.scss'

interface NavProps {
  open: boolean
  setOpen: (value: boolean) => void
}

const Nav: React.FC<NavProps> = ({ open, setOpen }) => {
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
    <nav className={`${Style.navBar}`}>
      <div className={`${!open ? Style.open : Style.close}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <AnchorLink href="#about">Sobre</AnchorLink>
          </li>
          <li>
            <Link href="https://eventonsg.com.br/certificado/">
              certificado
            </Link>
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
          <li>
            <Link href="">
              <span style={{ fontSize: 0 }}>Entrar</span>
              <BsPersonCircle style={{ fontSize: 25 }} />
            </Link>
          </li>
        </ul>
        <ul className={Style.redes}>
          {REDES?.map((redes) => (
            <li key={redes.id}>
              <a href={redes.link}>
                <img
                  src={`./images/${redes.name}.svg`}
                  alt={`rede social ${redes.name}`}
                  width={44}
                  height={44}
                />
                <span>{redes.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
