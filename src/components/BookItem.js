import React from "react"
import styled from "styled-components"

const BookItemWrapper = styled.section`
  border: 1px solid lightgray;
  box-shadow: 1px 1px 5px lightgray;
  border-radius: 2px;
  margin-bottom: 20px;
  padding: 8px;
  display: flex;

  h1,
  h2 {
    color: rgba(0, 0, 0, 0.8);
  }
  span {
    color: gray;
    font-size: 0.5em;
  }
`

const ImgWrapper = styled.div`
  max-width: 200px;
  margin-right: 8px;
  img {
    max-width: 200px;
  }
`
const ContentWrapper = styled.div`
  flex-grow: 1;
`

const BookItem = ({ title, author, summary, imageUrl, children }) => {
  return (
    <BookItemWrapper>
      <ImgWrapper>
        <img src={imageUrl} />
      </ImgWrapper>
      <ContentWrapper>
        <h1>
          {title}
          <span>{!!author ? author.name : "brak autora"}</span>
        </h1>
        <p>{summary}</p>
        <div>{children}</div>
      </ContentWrapper>
    </BookItemWrapper>
  )
}

export default BookItem
