import React from "react"

import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe
          consectetur veritatis atque aspernatur excepturi sit repellat
          possimus, hic rerum ratione nemo tempore aliquam in. Praesentium nam
          esse suscipit architecto.
        </p>
      </div>
    </Layout>
  )
}

export default blog
