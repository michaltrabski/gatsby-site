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

  // const testTemplate = path.resolve(`src/templates/testTemplate.js`)
  // const pages = [
  //   {
  //     slug: "strona1",
  //     content: "content1",
  //     subPages: [{ slug: "podstrona1", content: "subcontent1 lorem ipsum" }],
  //   },
  //   { slug: "strona2", content: "content2", subPages: {} },
  // ]
  // pages.forEach(page => {
  //   createPage({
  //     // Path for this page — required
  //     path: `${page.slug}`,
  //     component: testTemplate,
  //     context: page,
  //   })

  //   page.subPages.forEach(page => {
  //     createPage({
  //       // Path for this page — required
  //       path: `podstrona/${page.slug}`,
  //       component: testTemplate,
  //       context: page,
  //     })
  //   })
  // })

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
      createPage({
        // Path for this page — required
        path: `/book/${book.node.id}`,
        component: bookTemplate,
        context: book.node,
      })
    })
  })
}
