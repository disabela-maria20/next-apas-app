import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="img/icone.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/ymk5nta.css" />
        <meta name="theme-color" content="#1d1f48" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="lazyOnload"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.KEY_RECAPTCHA}`}
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y370T3RYFS"
        ></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y370T3RYFS', { page_path: window.location.pathname });
            `
          }}
        />
      </body>
    </Html>
  )
}
