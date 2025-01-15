import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

import CardVillas from "./partes02Propiedades/CardVillas";
import { TituloSeccion } from "../components/ElementosGenerales";

export default function Propiedades() {
  return (
    <>
      <Header />
      <Container>
        <Titulo>Propiedades</Titulo>
        <CajaVilla>
          <CardVillas />
        </CajaVilla>
        <CajaVilla>
          <CardVillas />
        </CajaVilla>
        <CajaVilla>
          <CardVillas />
        </CajaVilla>
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
const Titulo = styled(TituloSeccion)``;
