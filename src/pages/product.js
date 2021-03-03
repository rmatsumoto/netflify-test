import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import styles from "../components/product.module.css"

import Image from "gatsby-image"

const Products = ({ data }) => {
  const { allContentfulProduct: { nodes: products } } = data

  console.log(products)
  return (
    <Layout>
      <section className={styles.page}>
        {products.map((product) => {
          return <article key={product.id}>
            <div className={styles.productImage}>
              <Image fluid={product.image.fluid} alt={product.title} />
            </div>
            <h3>{product.title} <span>${product.price}</span></h3>
            <Link to={`/products/${product.slug}`}>More Details</Link>
          </article>
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
    {
        allContentfulProduct {
            nodes {
                image {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
                price
                title
                slug
                id
            }
        }
    }
`

export default Products
