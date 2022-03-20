import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

import { aria, content } from './packages/@replygirl/windicss-plugins'

const fonts = {
  base: ['"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
}

const glows = {
  blue: {
    blur: '0.25em',
    color: 'rgba(0, 80, 255, 0.25)',
    offset: '0.25rem',
  },
  blueLg: {
    blur: '0.5em',
    color: 'rgba(0, 80, 255, 0.25)',
    offset: '0.25rem',
  },
  white: {
    blur: '0.25rem',
    color: 'rgba(255, 255, 255, 0.1)',
    offset: '0.25rem',
  },
  whiteLg: {
    blur: '1rem',
    color: 'rgba(255, 255, 255, 0.075)',
    offset: '0.5rem',
  },
}

export default defineConfig({
  darkMode: 'class',
  extract: {
    exclude: ['node_modules', '.*/**/*'],
    include: ['**/*.{tsx,jsx,css}'],
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@windicss/plugin-animations')({}),

    // https://windicss.org/plugins/community/heropatterns.html
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@windicss/plugin-heropatterns')({}),

    // https://windicss.org/plugins/community/interaction-variants.html
    require('@windicss/plugin-interaction-variants'),

    // https://windicss.org/plugins/community/question-mark.html
    require('@windicss/plugin-question-mark'),

    // https://windicss.org/plugins/community/scrollbar.html
    require('@windicss/plugin-scrollbar'),

    // https://windicss.org/plugins/official/aspect-ratio.html
    require('windicss/plugin/aspect-ratio'),

    // https://windicss.org/plugins/official/line-clamp.html
    require('windicss/plugin/line-clamp'),

    // https://windicss.org/plugins/official/scroll-snap.html
    require('windicss/plugin/scroll-snap'),

    // https://windicss.org/plugins/official/typography.html
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),

    aria,

    content,
  ],
  preflight: {
    includeAll: true,
  },
  safelist: ['hidden', 'markdown', 'h1 h2 h3 h4 h5 h6 p em strong a ol ul li'],
  shortcuts: {
    'bg-image-contain': 'bg-no-repeat bg-center bg-contain',
    'bg-image-cover': 'bg-no-repeat bg-center bg-cover',
    'focus-ring':
      'focus:outline-none focus-visible:(outline-none ring ring-offset-2 ring-indigo-500)',
    'inset-center':
      'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',

    'inset-x-center': 'left-1/2 transform -translate-x-1/2',
    'inset-y-center': 'top-1/2 transform -translate-y-1/2',
  },
  theme: {
    borderColor: theme =>
      Object.assign(
        { DEFAULT: theme('colors.black', 'currentColor') },
        theme('colors') ?? {}
      ),
    extend: {
      backgroundImage: {
        logo: `url('/images/logos/jaded.svg')`,
      },
      colors: {
        tmp: '#003691',
      },
      dropShadow: {
        glowBlue: `${glows.blue.offset} ${glows.blue.offset} ${glows.blue.blur} ${glows.blue.color}) drop-shadow(-${glows.blue.offset} -${glows.blue.offset} ${glows.blue.blur} ${glows.blue.color}) drop-shadow(${glows.blue.offset} -${glows.blue.offset} ${glows.blue.blur} ${glows.blue.color}) drop-shadow(-${glows.blue.offset} ${glows.blue.offset} ${glows.blue.blur} ${glows.blue.color}) drop-shadow(${glows.blue.offset} 0 ${glows.blue.blur} ${glows.blue.color}) drop-shadow(-${glows.blue.offset} 0 ${glows.blue.blur} ${glows.blue.color}) drop-shadow(0 ${glows.blue.offset} ${glows.blue.blur} ${glows.blue.color}) drop-shadow(0 -${glows.blue.offset} ${glows.blue.blur} ${glows.blue.color}`,
        glowBlueLg: `${glows.blueLg.offset} ${glows.blueLg.offset} ${glows.blueLg.blur} ${glows.blueLg.color}) drop-shadow(-${glows.blueLg.offset} -${glows.blueLg.offset} ${glows.blueLg.blur} ${glows.blueLg.color}) drop-shadow(${glows.blueLg.offset} -${glows.blueLg.offset} ${glows.blueLg.blur} ${glows.blueLg.color}) drop-shadow(-${glows.blueLg.offset} ${glows.blueLg.offset} ${glows.blueLg.blur} ${glows.blueLg.color}) drop-shadow(${glows.blueLg.offset} 0 ${glows.blueLg.blur} ${glows.blueLg.color}) drop-shadow(-${glows.blueLg.offset} 0 ${glows.blueLg.blur} ${glows.blueLg.color}) drop-shadow(0 ${glows.blueLg.offset} ${glows.blueLg.blur} ${glows.blueLg.color}) drop-shadow(0 -${glows.blueLg.offset} ${glows.blueLg.blur} ${glows.blueLg.color}`,
        glowWhite: `${glows.white.offset} ${glows.white.offset} ${glows.white.blur} ${glows.white.color}) drop-shadow(-${glows.white.offset} -${glows.white.offset} ${glows.white.blur} ${glows.white.color}) drop-shadow(${glows.white.offset} -${glows.white.offset} ${glows.white.blur} ${glows.white.color}) drop-shadow(-${glows.white.offset} ${glows.white.offset} ${glows.white.blur} ${glows.white.color}) drop-shadow(${glows.white.offset} 0 ${glows.white.blur} ${glows.white.color}) drop-shadow(-${glows.white.offset} 0 ${glows.white.blur} ${glows.white.color}) drop-shadow(0 ${glows.white.offset} ${glows.white.blur} ${glows.white.color}) drop-shadow(0 -${glows.white.offset} ${glows.white.blur} ${glows.white.color}`,
        glowWhiteLg: `${glows.whiteLg.offset} ${glows.whiteLg.offset} ${glows.whiteLg.blur} ${glows.whiteLg.color}) drop-shadow(-${glows.whiteLg.offset} -${glows.whiteLg.offset} ${glows.whiteLg.blur} ${glows.whiteLg.color}) drop-shadow(${glows.whiteLg.offset} -${glows.whiteLg.offset} ${glows.whiteLg.blur} ${glows.whiteLg.color}) drop-shadow(-${glows.whiteLg.offset} ${glows.whiteLg.offset} ${glows.whiteLg.blur} ${glows.whiteLg.color}) drop-shadow(${glows.whiteLg.offset} 0 ${glows.whiteLg.blur} ${glows.whiteLg.color}) drop-shadow(-${glows.whiteLg.offset} 0 ${glows.whiteLg.blur} ${glows.whiteLg.color}) drop-shadow(0 ${glows.whiteLg.offset} ${glows.whiteLg.blur} ${glows.whiteLg.color}) drop-shadow(0 -${glows.whiteLg.offset} ${glows.whiteLg.blur} ${glows.whiteLg.color}`,
      },
      screens: {
        '2xs': '360px',
        xs: '480px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: colors.black,
            lineHeight: 1.25,
            p: {
              marginBottom: '0.5rem',
              marginTop: '0.5rem',
            },
          },
        },
      },
    },
    fontFamily: {
      mono: [
        'Space Mono',
        'Helvetica Mono',
        'SF Mono',
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
        ...fonts.base,
      ],
      sans: [
        '"Clash"',
        '-apple-system',
        'BlinkMacSystemFont',
        'Arial',
        ...fonts.base,
      ],
      serif: ['"Erode"', 'Times New Roman', 'serif', ...fonts.base],
    },
  },
})
