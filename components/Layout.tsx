import classNames, { type Argument } from 'classnames'
import { type Variant, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

interface _Variants {
  initial?: Variant
  animate?: Variant
  exit?: Variant
}

const _variants: Required<_Variants> = {
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 1, scale: 1 },
  initial: { opacity: 1, scale: 1 },
}

export const Layout = ({
  children,
  className,
  title,
  description,
  variants,
}: {
  children?: React.ReactNode
  className?: Argument
  title?: string
  description?: string
  variants?: _Variants
}) => (
  <>
    <NextSeo {...{ description, title }} openGraph={{ description, title }} />
    <motion.main
      variants={{ ..._variants, ...variants }}
      className={classNames(className)}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ type: 'anticipate' }}
    >
      {children}
    </motion.main>
  </>
)
