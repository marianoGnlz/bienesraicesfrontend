import styled from "@emotion/styled"
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react"
import Iconos from "./iconos"
import urlSlug from 'url-slug'


const Card = styled.div`
  border: 1px solid #E1E1E1;
  img {
    max-width: 100%;
  }
`;

const Contenido = styled.div`
  padding: 2rem;
  h3 {
    font-family: 'Lato', sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }
  .precio {
    font-size: 2rem;
    color: #75AB00;
  }
`;

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #75ab00;
  width: 100%;
  color: #fff;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
`;



const PropiedadPreview = ({ propiedad }) => {
  const {
    nombre,
    imagen,
    wc,
    estacionamiento,
    habitaciones,
    precio,
  } = propiedad
  const image = getImage(imagen.sharp)
  return (
    <Card>
      <GatsbyImage 
        image={image}
        alt="iamgen"
      />
      <Contenido>
        <h3>{nombre}</h3>
        <p className="precio">$ {precio}</p>
        <Iconos 
          wc={wc}
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
        />

      <Boton to={urlSlug(nombre)}>
        Visitar Propiedad
      </Boton>
      </Contenido>
    </Card>
  )
}

export default PropiedadPreview
