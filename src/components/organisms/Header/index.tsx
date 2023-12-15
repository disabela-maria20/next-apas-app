import Style from './Header.module.scss'

import Menu from '@/components/molecules/Menu'

const Header = () => {
  return (
    <>
      <Menu />
      <header
        className={Style.header}
        style={{ backgroundImage: 'url("./images/bg-gradient-blue.webp")' }}
        id="home"
      >
        <img
          src="./images/header-illustration.webp"
          alt="ilustração mercado"
          width={1920}
          height={450}
          className={Style.headerImg}
        />
        <section className={Style.headerPosition}>
          <div className={Style.container}>
            <div className={Style.headerBlock}>
              <div className={Style.headerFlex}>
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
                {/* <span className={Style.date}>15.08.2023</span> */}
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header
