module.exports = {
  siteMetadata: {
    title: `AI Unplugged`,
    description: `Activities and teaching material on artificial intelligence.`,
    author: `@gillkyle, @stefanseegerer`,
    siteUrl: `https://aiunplgged.org`,
  },
  pathPrefix: "/gatsby-starter-paper-css-landing-page",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
