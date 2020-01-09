import React from "react"
import { graphql } from "gatsby"
export default ({ data }) => {
  return (
    <div>
      <h1>NEWS</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <div>              
            <span>{node.frontmatter.date}</span> : {node.frontmatter.title}
          </div>
        </div>
      ))}
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
  }
`