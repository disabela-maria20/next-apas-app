import Style from './Header.module.scss'

import Menu from '@/components/molecules/Menu'

const Header = () => {
  return (
    <header className={Style.header}>
      <Menu />
      <div className={Style.container}>
        <div className={Style.headerBlock}>
          <div>
            <img
              src="./images/logo-header.webp"
              alt="logo promo"
              width={318}
              height={239}
            />
            <h1>
              <span>O EVENTO DE</span>
              TECNOLOGIA E INOVAÇÃO {''}
              <span>EXCLUSIVO</span>
              <p className={Style.subTitle}>
                DO SETOR <br /> SUPERMERCADISTA
              </p>
            </h1>
            <span className={Style.date}>15-08-2023</span>
          </div>
          <img
            src="./images/header-illustration.webp"
            alt="ilustração mercado"
            width={1883}
            height={1523}
            className={Style.Ilus}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
