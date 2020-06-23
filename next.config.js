const emoji = require('remark-emoji')
const externalLinks = require('remark-external-links')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [emoji, externalLinks],
  },
})

module.exports = withMDX({
  pageExtensions: ['tsx', 'md', 'mdx'],
})
