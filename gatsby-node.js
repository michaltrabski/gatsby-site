/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const bookTemplate = path.resolve(`src/templates/bookTemplate.js`)

  return graphql(
    `
      {
        allBook {
          edges {
            node {
              id
              title
              summary
              imageUrl
              author {
                name
              }
            }
          }
        }
      }
    `,
    { limit: 10000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    const data = result.data.allBook.edges

    data.forEach(book => {
      console.log("data", data)

      createPage({
        // Path for this page — required
        path: `/book/${book.node.id}`,
        component: bookTemplate,
        context: book.node,
      })
    })
  })
}
