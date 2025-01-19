import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

import CardVillas from "./partes02Propiedades/CardVillas";
import { TituloH1 } from "../components/ElementosGenerales";
import { NavLink } from "react-router";
import { Villas } from "../DB/Villas";

export default function ListaPropiedades() {
  return (
    <>
      <Header />
      <Container>
        <Titulo>Propiedades</Titulo>
        <CajaVilla>
          <Enlace to={Villas[0].url}>
            <CardVillas villa={Villas[0]} />
          </Enlace>
        </CajaVilla>
        {/* <CajaVilla>
          <CardVillas />
        </CajaVilla>
        <CajaVilla>
          <CardVillas />
        </CajaVilla> */}
      </Container>
      <Footer />
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
  color: auto;
  text-decoration: auto;
  &:active {
    color: auto;
  }
  &:target {
    color: auto;
  }
`;
const Titulo = styled(TituloH1)``;
