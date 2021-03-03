/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`,

})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby tutorial",
    description: "random desc",
    author: "Ryota Matsumoto",
    data: ["moo", "cow", "moocow"],
    person: {
      name: "piper",
      age: 36
    }
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qhxkf8hxgno8`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN
      }
    }
  ]
}
