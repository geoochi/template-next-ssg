import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              ";(function () {if (window.matchMedia('(prefers-color-scheme: dark)').matches) {document.documentElement.classList.add('dark')}})()",
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
