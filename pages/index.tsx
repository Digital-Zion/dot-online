import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'

import { Layout } from '~/components'

const IndexPage: NextPage = () => (
  <Layout
    className='h-full'
    // variants={{
    //   exit: { opacity: 1, scale: 0.25 },
    //   initial: { opacity: 1, scale: 0.25 },
    // }}
  >
    <div className='absolute inset-center w-full max-w-1/2 max-h-1/2'>
      <Link href='/about'>
        <motion.a layoutId='logo' className='h-40 cursor-pointer'>
          <div className='relative group children:(w-full h-auto overflow-visible filter transform transition-all)'>
            <GlyphDigitalZionOuter className='text-tmp drop-shadow-glowBlue group-hover:(scale-105 drop-shadow-glowBlueLg)' />
            <GlyphDigitalZionInner className='absolute top-0 left-0 drop-shadow-glowWhite group-hover:(scale-115 drop-shadow-glowWhiteLg)' />
          </div>
        </motion.a>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
