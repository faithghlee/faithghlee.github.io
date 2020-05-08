/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Faith's personal blog`,
    author: 'Faith Lee'

  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    }, 
    `gatsby-plugin-sharp`, 
    {
      resolve: `gatsby-plugin-goodreads`,
      options: {
      developerKey: `x17U0gmPjeyx2ziXVMj2BQ`,
      goodReadsUserId: `96617512`,
      userShelf: "read" //optional
      }
    }, 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
      plugins: [
           `gatsby-remark-relative-images`,
            {
          
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 750, 
                linkImagesToOriginal: false
            }
          }
        ]
      }
      }
    
  ]
 
}