import { useState } from 'react'

import Style from './Menu.module.scss'

import { Burger, Counter, Logo, Nav, Range } from '@/components/atoms'

const Menu = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <>
      <div className={Style.bgNav}>
        <div className={Style.container}>
          <div className={Style.flexDeskTop}>
            <div className={Style.flexMobile}>
              <Logo />
              <Burger open={!open} setOpen={() => setOpen(!open)} />
            </div>
            <Nav open={open} />
          </div>
        </div>
      </div>
      <Counter />
      <Range />
    </>
  )
}

export default Menu
