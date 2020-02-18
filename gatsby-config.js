/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Pandas Eating Lots',
    description: 'A simple description about this hello world site',
    author: 'tkomstadius',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" promt and disables browser UI (including back butotn)
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
