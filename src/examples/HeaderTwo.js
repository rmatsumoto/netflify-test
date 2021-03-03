import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query queryOne {
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
`

const Header = () => {
  const {
    site: {
      siteMetadata:{
        title, 
        description
      }
    }
  } = useStaticQuery(getData)
  

  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>Description: {description}</h2>
    </div>
  )
}

export default Header
