import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'
import Markdown from 'react-markdown'

import { Contact, Layout } from '~/components'
import contentAbout from '~/content/about.md'
import contentContact from '~/content/contact.md'
import contentFooter from '~/content/footer.md'

const AboutPage: NextPage = () => (
  <Layout
    className='min-h-full p-8 py-24 max-w-prose mx-auto flex flex-col justify-center items-center text-2xl sm:space-y-8'
    // variants={{
    //   exit: { opacity: 0, scale: 0.5 },
    //   initial: { opacity: 1, scale: 0.5 },
    // }}
  >
    <Link href='/'>
      <motion.a layoutId='logo' className='self-center cursor-pointer'>
        <div className='relative group children:(overflow-visible transform transition-all)'>
          <GlyphDigitalZionOuter className='h-40 w-auto text-tmp filter drop-shadow-glowBlue group-hover:(scale-105 drop-shadow-glowBlueLg)' />
          <GlyphDigitalZionInner className='absolute top-0 left-0 w-full h-auto filter drop-shadow-glowWhite group-hover:(scale-115 drop-shadow-glowWhiteLg)' />
        </div>
      </motion.a>
    </Link>
    <div className='w-max-content max-w-full space-y-20 sm:space-y-28'>
      <section className='markdown'>
        <Markdown>{contentAbout}</Markdown>
      </section>
      <section className='space-y-2 sm:space-y-6'>
        <div className='markdown'>
          <Markdown>{contentContact}</Markdown>
        </div>
        <Contact />
      </section>
      {!!contentFooter && (
        <section className='markdown'>
          <Markdown>{contentFooter}</Markdown>
        </section>
      )}
    </div>
  </Layout>
)

export default AboutPage
