import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import ContenedorPrincipal from "../components/ContenedorPrincipal";
import Header from "../components/Header";
import ImgVilla1 from "./../assets/store/villa1.jpg";
import ImgVilla2 from "./../assets/store/villa2.jpg";
import ImgVilla3 from "./../assets/store/villa3.jpg";
import ImgVilla4 from "./../assets/store/villa4.jpg";
import ImgVilla5 from "./../assets/store/villa5.jpg";
import ImgVilla6 from "./../assets/store/villa6.jpg";
import Carrusel from "../components/Carrusel";
import CardPropiedades from "../components/CardPropiedades";
import { BtnGeneral } from "../components/BtnGeneral";
import FormContact from "../components/FormContact";

export default function Home() {
  const arrayImg = [
    ImgVilla1,
    ImgVilla2,
    ImgVilla3,
    ImgVilla4,
    ImgVilla5,
    ImgVilla6,
  ];
  return (
    <Container>
      <ContainerHeader>
        <Header />
        <ContainerHero>
          <Carrusel arrayImg={arrayImg} />
        </ContainerHero>
        <CajaTitulo>
          <TituloH1>
            Break
            <Span>Koi</Span>
          </TituloH1>
          <Subtitulo>Punta Cana te espera...</Subtitulo>
          <BtnSimple>Reservar</BtnSimple>
        </CajaTitulo>
      </ContainerHeader>
      <ContenedorPrincipal>
        <Seccion>
          <TituloSeccion>Propiedades</TituloSeccion>
          <CardPropiedades />
        </Seccion>
        <Seccion>
          <TituloSeccion>Contactos</TituloSeccion>
          <FormContact />
        </Seccion>
        <Seccion>
          <TituloSeccion>Quienes Somos</TituloSeccion>
        </Seccion>
      </ContenedorPrincipal>
    </Container>
  );
}
const Container = styled.div``;

// ***** HERO ******
const ContainerHeader = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-bottom: 80px;
`;
const ContainerHero = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  height: 100vh;
`;
const CajaTitulo = styled.div`
  border: 1px solid red;
  min-width: 30%;
  min-height: 30vh;
  position: absolute;
  top: 50vh;
  right: 100px;
  z-index: 2;
  border: 2px solid ${theme.primary.turquoise};
  background-color: rgba(243, 229, 171, 0.9);
  border-radius: 5px;

  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  padding-left: 15px;
  /* background-color: green; */
`;
const TituloH1 = styled.h1`
  font-size: 6rem;
  color: ${theme.primary.turquoise};
  padding: 0;
  font-weight: lighter;
`;
const Span = styled.span`
  color: ${theme.primary.white};
`;
const Subtitulo = styled.h2`
  color: ${theme.secondary.coral};
`;

// ***** RESTO CONTENIDO ******
const Seccion = styled.section`
  margin-bottom: 80px;
`;
const TituloSeccion = styled.h2`
  color: ${theme.primary.turquoise};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: normal;
`;
const BtnSimple = styled(BtnGeneral)``;
