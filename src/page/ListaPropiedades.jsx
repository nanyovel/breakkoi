import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

import CardVillas from "./partes02Propiedades/CardVillas";
import { TituloH1 } from "../components/ElementosGenerales";
import { NavLink } from "react-router";
import { Villas } from "../DB/Villas";
import { fetchGetDocs } from "../libs/FetchFirebase";

export default function ListaPropiedades() {
  const [listaPropiedades, setListaPropiedades] = useState([]);
  useEffect(() => {
    (async () => {
      const propiedadesAux = await fetchGetDocs("propiedades", []);
      console.log(propiedadesAux);
      setListaPropiedades(propiedadesAux);
    })();
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Container>
        <Titulo>Propiedades</Titulo>
        <CajaVilla>
          {listaPropiedades.map((pro, index) => {
            return (
              <Enlace key={index} to={pro.url}>
                <CardVillas villa={pro} />
              </Enlace>
            );
          })}
        </CajaVilla>
        {/* <CajaVilla>
          <CardVillas />
        </CajaVilla>
        <CajaVilla>
          <CardVillas />
        </CajaVilla> */}
      </Container>
      {/* <Footer /> */}
    </>
  );
}

const Container = styled.div`
  padding: 20px ${theme.config.paddingLateral};
`;
const CajaVilla = styled.div`
  margin-bottom: 25px;
`;
const Enlace = styled(NavLink)`
  margin-bottom: 25px;
  display: inline-block;
  color: auto;
  text-decoration: auto;
  width: 100%;
  &:active {
    color: auto;
  }
  &:target {
    color: auto;
  }
`;
const Titulo = styled(TituloH1)``;
