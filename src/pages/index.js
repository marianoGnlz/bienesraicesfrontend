import { css } from "@emotion/react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import { convertToBgImage } from "gbimage-bridge"

const ImagenBackGround = styled(BackgroundImage)`
  height: 600px;
`

const Index = () => {
  const inicio = useInicio()
  const { nombre, contenido, imagen } = inicio[0]
  console.log(imagen)
  const image = getImage(imagen.sharp)
  const bgImage = convertToBgImage(image)
  return (
    <Layout>
      <ImagenBackGround tag="section" {...bgImage} fadeIn="soft">
        <div>
          <h1>Venta de casas y departamentos exclusivos</h1>
        </div>
      </ImagenBackGround>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default Index
