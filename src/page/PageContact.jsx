import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import ImgCarta from "../../public/img/carta.png";
import { TituloSeccion } from "../components/ElementosGenerales";

export default function PageContact() {
  return (
    <>
      <Header />
      <CajaPrincipal>
        <CajaTitulo>
          <TituloSimple>Envianos un mensaje</TituloSimple>
          <Subtitulo>Nos interesa saber lo que tienes que decir</Subtitulo>
        </CajaTitulo>
        <WrapContenido>
          <FormContact />
          <CajaImg>
            <Img src={ImgCarta} />
          </CajaImg>
        </WrapContenido>
      </CajaPrincipal>
      <Footer />
    </>
  );
}
const CajaPrincipal = styled.div`
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
  margin-bottom: 60px;
`;
const TituloSimple = styled(TituloSeccion)``;
const CajaTitulo = styled.div`
  width: 100%;
  padding-left: 60px;
  padding-top: 30px;
  margin-bottom: 25px;
`;

const Subtitulo = styled.h3`
  color: ${theme.secondary.coral};
  font-size: 1.4rem;
  text-decoration: underline;
`;
const WrapContenido = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin: auto;
  /* border: 1px solid red; */
`;
const CajaImg = styled.div`
  width: 40%;
  /* border: 1px solid blue; */
`;
const Img = styled.img`
  width: 100%;
`;
