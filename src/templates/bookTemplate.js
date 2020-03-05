import React, { useEffect } from "react"
import BookItem from "../components/BookItem"

const BookTemplate = props => {
  // console.log("props", props.pageContext)

  const { title, author, summary, imageUrl } = props.pageContext
  useEffect(() => console.log(props))

  // console.log("summary", summary.substring(0, 100))
  return (
    <section>
      <BookItem title={title} author={author} imageUrl={imageUrl}>
        <p>{summary}</p>
        <p>Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor .</p>
      </BookItem>
    </section>
  )
}

export default BookTemplate
