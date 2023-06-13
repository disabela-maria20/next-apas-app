import Style from './Header.module.scss'

import Menu from '@/components/molecules/Menu'

const Header = () => {
  return (
    <header className={Style.header}>
      <Menu />
      <div>
        <img
          src="./images/logo-header.webp"
          alt="logo promo"
          width={318}
          height={239}
        />
        <h1>
          O EVENTO DE TECNOLOGIA E INOVAÇÃO EXCLUSIVO
          <span>DO SETOR SUPERMERCADISTA</span>
        </h1>
        <span>15-08-2023</span>
      </div>
    </header>
  )
}

export default Header
