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
      <Header />
      <About />
      <FAQ />
      <Previous />
      {/* <Marks /> */}
      <Footer />
    </>
  )
}

export default Home
