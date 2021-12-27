import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
// import * as travelStyles from "./tech.module.css"


export default function Home({ data }) {
  console.log(data)
  return (
      <Container>
        <h1>
          This is my travel blog.
        </h1>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.nodes.map((node) => (
          <div key={node.slug}>
            <h3>{node.frontmatter.date}</h3>
            <h3><a href={node.slug} >{node.frontmatter.title}</a></h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </Container>
  )
}

export const query = graphql`
query Travel {
  allMdx(filter: {frontmatter: {categories: {eq: "travel"}}}) {
    nodes {
      slug
      frontmatter {
        categories
        date
        title
      }
      excerpt
    }
    totalCount
  }
}
`