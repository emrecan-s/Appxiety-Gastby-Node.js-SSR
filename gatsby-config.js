module.exports = {
  siteMetadata: {
    title: 'Appxiety',
    siteUrl: 'https://needstobetheproductionurl.com'
  },
  plugins: [
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /icons/ // See below to configure properly
      }
    }
  },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/appxiety.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
}
