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
