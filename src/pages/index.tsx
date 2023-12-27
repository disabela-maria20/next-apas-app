import { NextPage } from 'next'
import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

import { Home } from '@/components/templates'

const HomePage: NextPage = () => {
  return (
    <>
      <Home />
      <CookieConsent
        buttonText="Aceitar"
        cookieName="Experimentador"
        style={{
          background: '#1d1f48',
          color: 'white',
          fontWeight: 'regular',
          fontSize: 16,
          lineHeight: '27px',
          fontFamily: 'field-gothic'
        }}
        buttonStyle={{
          background: '#5f249f',
          color: 'white',
          fontWeight: 'regular',
          textTransform: 'uppercase',
          padding: '10px 20px',
          borderRadius: '55px'
        }}
        expires={999}
        overlay
      >
        Este site utiliza cookies para melhorar a sua experiência de navegação.
        Ao continuar, você concorda com o uso de cookies, conforme detalhado em
        nossa{' '}
        <Link href="/pdf/Política_de_privacidade.pdf">
          Política de Privacidade
        </Link>{' '}
        e concede autorização para o uso de{' '}
        <Link href="/pdf/AUT._IMAGEM_SOM.pdf">imagens</Link> de acordo com
        nossos termos. Para mais informações ou para ajustar suas configurações,
        por favor, consulte nossa política de privacidade. .
      </CookieConsent>
    </>
  )
}
export default HomePage
