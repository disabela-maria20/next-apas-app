import {
  About,
  FAQ,
  Header,
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
      </main>
    </>
  )
}

export default Home
