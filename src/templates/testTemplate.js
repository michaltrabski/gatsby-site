import React, { useEffect } from "react"
import BookItem from "../components/BookItem"

const TestTemplate = props => {
  const { slug, content } = props.pageContext

  return (
    <section>
      <p>slug= {slug}</p>
      <p>content= {content}</p>
    </section>
  )
}

export default TestTemplate
