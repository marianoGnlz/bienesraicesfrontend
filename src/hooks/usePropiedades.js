import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          categorias {
            nombre
          }
          agentes {
            nombre
            telefono
            email
          }
          imagen {
            sharp: localFile {
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  `)
  return datos.allStrapiPropiedades.nodes.map(
    ({
      nombre,
      descripcion,
      id,
      agentes,
      categorias,
      estacionamiento,
      habitaciones,
      imagen,
      precio,
      wc,
    }) => ({
      nombre,
      descripcion,
      id,
      agentes,
      categorias,
      estacionamiento,
      habitaciones,
      imagen,
      precio,
      wc,
    })
  )
}

export default usePropiedades
