import { FormspreeProvider } from '@formspree/react'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { type AppProps } from 'next/app'
import 'windi.css'

import '~/styles/fonts-clash.css'
import '~/styles/fonts-erode.css'
import '~/styles/fonts-gambetta.css'
import '~/styles/fonts-general-sans.css'
import '~/styles/fonts-miedinger*.css'
import '~/styles/fonts-times-newer-roman.css'
import '~/styles/fonts-rowan.css'
import '~/styles/main.css'
import '~/styles/inputs.css'
import '~/styles/markdown.css'

function App({ Component, pageProps, router }: AppProps) {
  const url = `https://digitalzion.online${router.route}`

  return (
    <>
      <FormspreeProvider
        project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID!}
      >
        <DefaultSeo
          titleTemplate='%s - Digital Zion'
          title='Digital Zion'
          canonical={url}
        />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={url} />
        </AnimatePresence>
      </FormspreeProvider>
    </>
  )
}

export default App
