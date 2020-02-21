import React from "react"
import Layout from "../components/layout"
import BookItem from "../components/BookItem"

const BookTemplate = props => {
  // console.log("props", props.pageContext)

  const { title, author, summary, imageUrl } = props.pageContext
  // console.log("summary", summary.substring(0, 100))
  return (
    <Layout>
      <BookItem title={title} author={author} imageUrl={imageUrl}>
        <p>{summary}</p>
      </BookItem>
    </Layout>
  )
}

export default BookTemplate
