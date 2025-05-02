const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  basePath: '/wiki',
  assetPrefix: '/wiki/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // optional but recommended for GitHub Pages
})
