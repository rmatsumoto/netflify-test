import React from 'react'
import Layout from '../components/Layout'
import Header from '../examples/HeaderTwo'
import {graphql} from 'gatsby'

const exampleSecond = ({data}) => {
  const {
    site: {
      info: {
        author
      }
    }
  
  } = data

  return (
    <Layout> 
      <Header />
      <p>Hello from examples page</p>    
      <h5>{author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info:siteMetadata {
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

export default exampleSecond
