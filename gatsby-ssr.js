/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const Layaut = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layaut {...props}>{element}</Layaut>
}
