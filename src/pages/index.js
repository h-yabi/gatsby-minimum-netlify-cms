import React from "react"
import { graphql, Link } from "gatsby"
export default ({ data }) => {
  return (
    <div>
      <h1>NEWS</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <div>              
            <span>{node.frontmatter.date}</span> : <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(limit: 5) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
            path
          }
        }
      }
    }
  }
`