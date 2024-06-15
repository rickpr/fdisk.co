import path from 'path'

import GatsbyAdapterNetlify from 'gatsby-adapter-netlify'

module.exports = {
  adapter: GatsbyAdapterNetlify({ excludeDatastoreFromEngineFunction: false }),
  siteMetadata: {
    title: 'Ricardo',
    description: 'Ricardo website',
    authors: ['@adalidabaca', '@rickpr']
  },
  plugins: [
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: path.join(__dirname, 'src', 'files')
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ricardo Piro-Rael',
        short_name: 'fdisk.co',
        start_url: '/',
        background_color: '#121212',
        theme_color: '#121212',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-typescript'
  ]
}
