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
      <main>
        <About />
        <Speeches />
        {/* <Stages /> */}
        <FAQ />
        <Marks />
        <Maps />
      </main>
      <Footer />
    </>
  )
}

export default Home
