import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
// import * as techStyles from "./tech.module.css"


export default function Home({ data }) {
  console.log(data)
  return (
      <Container>
        <h1>
          This is my tech blog.
        </h1>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.nodes.map((node) => (
          <div key={node.id}>
            <h3>{node.frontmatter.date}</h3>
            <h3><a href={node.slug.toLowerCase()} >{node.frontmatter.title}</a></h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </Container>
  )
}

export const query = graphql`
query Tech {
  allMdx(filter: {frontmatter: {categories: {ne: "travel"}}}) {
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
}`