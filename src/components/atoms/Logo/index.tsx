import Style from './Logo.module.scss'

const Logo = (): JSX.Element => {
  return (
    <img
      src="./images/logo.webp"
      alt="Logo nsg"
      width={146}
      height={49}
      className={Style.logo}
    />
  )
}

export default Logo
