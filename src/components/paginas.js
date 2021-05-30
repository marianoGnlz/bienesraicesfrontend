import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "./layout"
import { graphql } from "gatsby"
import ListadoPropiedades from "./listadoPropiedades"

const ContenidoPagina = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

export const query = graphql`
  query($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        contenido
        imagen {
          sharp: localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                quality: 50
                breakpoints: [1080, 1366, 1920]
              )
            }
          }
        }
      }
    }
  }
`

const Paginas = ({
  data: {
    allStrapiPaginas: { nodes },
  },
}) => {
  const { nombre, contenido, imagen } = nodes[0]
  const image = getImage(imagen.sharp)
  return (
    <Layout>
      <main className="contenedor">
        <h1>{nombre}</h1>
        <ContenidoPagina>
          <GatsbyImage image={image} alt="imagen" />
          <p>{contenido}</p>
        </ContenidoPagina>
      </main>
      {nombre === "Propiedades" ? <ListadoPropiedades /> : null}
    </Layout>
  )
}

export default Paginas
