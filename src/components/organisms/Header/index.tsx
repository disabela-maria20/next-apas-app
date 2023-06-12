import Style from './Header.module.scss'

import Menu from '@/components/molecules/Menu'

const Header = () => {
  return (
    <header className={Style.header}>
      <Menu />
    </header>
  )
}

export default Header
