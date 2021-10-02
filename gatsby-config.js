module.exports = {
  siteMetadata: {
    title: `Asif Khan`,
    description: `For over 3 years, I've been helping startups, corporate businesses, non-profits, and pets launch their online business.`,
    author: `@asif10388`,
    siteUrl: `https://asifkhan.dev/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `asif-khan`,
        short_name: `asif`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sass`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-smoothscroll`,
  ],
}
