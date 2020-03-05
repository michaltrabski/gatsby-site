import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BookItem from "../components/BookItem"
import styled from "styled-components"
import { darken } from "polished"
// import Image from "../components/image"
// import SEO from "../components/seo"

const LinkButton = styled.div`
  text-align: right;

  a {
    color: ${props => (!!props.color ? props.color : "black")};
    text-decoration: none;
    background-color: rebeccapurple;
    ${
      "" /* background-color: ${darken(0.0, props => (!!props.bg ? props.bg : "blue"))}; */
    }
    background-color: ${darken(0.0, "#ffc107")};
    border: 1px solid ${darken(0.05, "#ffc107")};
    padding: 8px;
    border-radius: 2px;
    margin: 5px;
    display: inline-block;

    &:hover {
      background-color: ${darken(0.08, "#ffc107")};
      border: 1px solid ${darken(0.16, "#ffc107")};
    }
  }
`

const IndexPage = props => {
  const [data, setData] = useState(props.data.allBook.edges)
  // console.log("1", data)
  useEffect(() => {
    let x = {
      node: {
        id: "2Casd1CosDSNQAugqYdQj1K",
        title: "xxx",
        summary: "xxx.",
        author: {
          id: "eNFafds2LNcNDrrhwFVLAc03",
          name: "GRZfdsdfEGORZ BRUDNIK",
        },
      },
    }
    setData(prevData => [...prevData, x])
    setData(prevData => [x])
  }, [])

  return (
    <section>
      {/* <p>{JSON.stringify(data[0])}</p> */}
      <h1>Witam</h1>
      {data.map(edge => {
        const { id, title, summary, author, imageUrl } = edge.node

        return (
          <BookItem key={id} title={title} author={author} imageUrl={imageUrl}>
            <div>
              {summary.substring(0, 250)}...{" "}
              <Link to={`book/${id}`}>(czytaj dalej)</Link>
            </div>
            <LinkButton color="red" bg="yellow">
              <Link to={`book/${id}`}>Join Conversation</Link>
            </LinkButton>
          </BookItem>
        )
      })}
    </section>
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
