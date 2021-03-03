import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import img from '../images/rebel.jpg'
import Image from 'gatsby-image'

const getImages = graphql `
    {
        fixed:file(relativePath: {eq: "versys-650.jpg"}) {
            childImageSharp {
                fixed (width:400, height:300) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fluid:file(relativePath: {eq: "versys-green.jpg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
    }
`

function Images(props) {
  const data = useStaticQuery(getImages)

  return (
    <div className="images">
      <article className="single-image">
        <h3>Basic image</h3>
        <img src={img} width="100%" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur </h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </div>
  )
}

export default Images