import React from "react"

export default () => (
  <footer style={{ textAlign: "center", backgroundColor: "lightgray" }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)
