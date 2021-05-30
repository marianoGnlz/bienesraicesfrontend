import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import React from "react"
import * as heroCSS from "../css/hero.module.css"

const ImageBackground = styled(BackgroundImage)`
    height: 300px;
`

const Encuentra = () => {
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        childImageSharp {
          gatsbyImageData(formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)
  
  const image = getImage(imagen.childImageSharp)
  const bgImage = convertToBgImage(image)
  return(
      <ImageBackground tag="section" {...bgImage}>
            <div className={heroCSS.imagenbg}>
                <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </div>
      </ImageBackground>
  );
}

export default Encuentra
