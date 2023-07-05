import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/ymk5nta.css" />
        <meta name="theme-color" content="#1d1f48" />
        <title>Home | APAS</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="lazyOnload"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.KEY_RECAPTCHA}`}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R3G0NYVTFP"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R3G0NYVTFP');
            `
          }}
        />
      </body>
    </Html>
  )
}
