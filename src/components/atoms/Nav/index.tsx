import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
            <Link href="/#about">Sobre</Link>
          </li>
          <li>
            <Link href="/2022">Rolou em 2023</Link>
          </li>
          {/* <li>
            <Link href="/#speakers">palestrantes</Link>
          </li> */}
          {/* <li>
            <Link href="/#marks">patrocinadores</Link>
          </li> */}
          <li>
            <Link href="/galeria">galeria</Link>
          </li>
          <li>
            <Link href="/#contact">Contato</Link>
          </li>
          <li>
            <Link href="https://painel.eventonsg.com.br/user/login">
              <span style={{ fontSize: 0 }}>Entrar</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                style={{ fontSize: 25 }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                ></path>
              </svg>
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
