require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Asif Khan`,
    description: `For over 3 years, I've been helping startups, corporate businesses, non-profits, and pets launch their online businesses and I can do the same for you.`,
    author: `@asif10388`,
    siteUrl: `https://asifkhandev.netlify.app`,
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
    // {
    //   resolve: "gatsby-transformer-cloudinary",
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     uploadFolder: "work-images",
    //   },
    // },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `work-images/`,
        context: true,
        tags: true,
        maxResults: 50,
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
        background_color: `#00ebc7`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
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
