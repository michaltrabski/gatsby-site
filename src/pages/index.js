import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BookItem from "../components/BookItem"
import styled from "styled-components"
// import Image from "../components/image"
// import SEO from "../components/seo"

const LinkButton = styled.div`
  text-align: right;

  a {
    color: white;
    text-decoration: none;
    background-color: rebeccapurple;
    padding: 8px;
    border-radius: 2px;
    margin: 5px;
    display: inline-block;

    &:hover {
      background-color: indigo;
    }
  }
`

const IndexPage = props => {
  // console.log(props.data.allBook.edges)
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => {
        const { id, title, summary, author, imageUrl } = edge.node

        return (
          <BookItem key={id} title={title} author={author} imageUrl={imageUrl}>
            <div>
              {summary.substring(0, 250)}...{" "}
              <Link to={`book/${id}`}>(czytaj dalej)</Link>
            </div>
            <LinkButton>
              <Link to={`book/${id}`}>Join Conversation</Link>
            </LinkButton>
          </BookItem>
        )
      })}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      ======
      <br />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allBook {
      edges {
        node {
          id
          title
          summary
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
