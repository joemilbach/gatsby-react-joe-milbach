module.exports = {
  siteMetadata: {
    title: `Custom Gatsby Starter with React Bootstrap`,
    description: ``,
    author: `Joe Milbach`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-react-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#74b709`,
        display: `minimal-ui`,
        icon: `src/images/icon-310x310.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
