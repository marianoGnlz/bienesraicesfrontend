import { graphql, useStaticQuery } from "gatsby"

const useInicio = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { nombre: { eq: "Inicio" } }) {
        nodes {
          id
          nombre
          contenido
          imagen {
            sharp: localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP, AVIF]
                  transformOptions: {
                    duotone: {
                      highlight: "#222222"
                      shadow: "#192550"
                      opacity: 30
                    }
                  }
                )
              }
            }
          }
        }
      }
    }
  `)
  return resultado.allStrapiPaginas.nodes.map(
    ({ nombre, contenido, imagen }) => ({
      nombre,
      contenido,
      imagen,
    })
  )
}

export default useInicio
