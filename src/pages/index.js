import React from "react"

import Layout from '../components/Layout'
import {ExampleButton} from '../components/button'

export default function Home() {
  return (
    <Layout>      
      <h1>Home page</h1>
      <p>This is some text for homepage</p>
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <ExampleButton>CLick me</ExampleButton>
    </Layout>
  )
}
