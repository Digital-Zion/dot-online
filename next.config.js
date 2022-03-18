// const { promises: fs } = require('fs')

// const { paramCase } = require('change-case')
const AutoImport = require('unplugin-auto-import/webpack')
const { FileSystemIconLoader } = require('unplugin-icons/loaders')
const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/webpack')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack(config /* , _options */) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    config.plugins.push(new WindiCSSWebpackPlugin())

    config.plugins.push(
      Icons({
        autoInstall: true,
        compiler: 'jsx',
        customCollections: {
          glyph: FileSystemIconLoader('./assets/glyphs'),
          icon: FileSystemIconLoader('./assets/icons'),
        },
        defaultClass: 'inline-block',
        extension: 'jsx',
        jsx: 'react',
      })
    )

    config.plugins.push(
      AutoImport({
        eslintrc: {
          enabled: true,
        },
        resolvers: [
          IconsResolver({
            customCollections: ['glyph', 'icon'],
            enabledCollections: ['mdi'],
            extension: 'jsx',
            prefix: false,
          }),
        ],
      })
    )

    return config
  },
}

module.exports = nextConfig
