import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          data
          title
          person {
            age
            name
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  )
}

export default ComponentName
