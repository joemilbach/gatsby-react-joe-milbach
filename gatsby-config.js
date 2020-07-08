module.exports = {
  siteMetadata: {
    title: `Joe Milbach Web Developer/Designer`,
    description: `Hello. As a Web Developer / Designer, I work on projects ranging from websites to web applications. I love taking an idea and giving it life on the web. My web designs are user-centric and focus on utilizing the latest technology.`,
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
        icon: `src/images/icn/icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/icn/`,
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Titillium Web`,
            variants: [`300`,`300italic`,`700`,`700italic`,`900`,`200`]
          },
        ],
      },
    },
  ],
}
