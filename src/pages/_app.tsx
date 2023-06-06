import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const test: string = 'amarelo'
  console.log(test)
  return <Component {...pageProps} />
}
