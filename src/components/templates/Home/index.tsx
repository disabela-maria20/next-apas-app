import Styled from './Home.module.scss'

import { Maps } from '@/components/molecules'
import {
  About,
  FAQ,
  Footer,
  Header,
  Marks,
  Previous,
  Speeches,
  Stages
} from '@/components/organisms'

const Home = () => {
  return (
    <>
      <img src="./images/craquelado.webp" alt="" className={Styled.watermark} />
      <Header />
      <main>
        <About />
        <Speeches />
        <Stages />
        <Previous />
        <FAQ />
        <Marks />
        <Maps />
        <Footer />
      </main>
    </>
  )
}

export default Home
