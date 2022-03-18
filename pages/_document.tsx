import Document, { Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head></Head>
        <body className='transition-all'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
