import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { BtnGeneral } from "../ElementosGenerales";

export default function OfertaSideBar() {
  return (
    <Container>
      <Titulo>OFERTA</Titulo>
      <WrapSub>
        <Subtitulo>MARZO</Subtitulo>
        <Subtitulo>50 OFF</Subtitulo>
      </WrapSub>
      <WrapSub>
        <Subtitulo>ABRIL</Subtitulo>
        <Subtitulo>30 OFF</Subtitulo>
      </WrapSub>
      <Subtitulo>VILLA KOI</Subtitulo>
      <CajaBtn>
        <BtnSimple>Mas info</BtnSimple>
      </CajaBtn>
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  width: 100%;
  min-height: 400px;
  padding: 15px 5px;
`;
const Titulo = styled.h2`
  width: 100%;
  text-align: center;
  color: ${theme.secondary.goldClear};
  margin-bottom: 20px;

  font-size: 2.3rem;
`;
const WrapSub = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  margin-bottom: 15px;
`;
const Subtitulo = styled.h3`
  color: white;
  width: 100%;
  text-align: center;
  font-size: 2rem;
`;

const CajaBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  align-items: center;
`;
const BtnSimple = styled(BtnGeneral)`
  margin: auto;
  background-color: ${theme.secondary.goldClear};
  color: black;
  &:hover {
    color: ${theme.secondary.goldClear};
    background-color: black;
  }
  &:active {
    color: ${theme.secondary.gold};
    background-color: white;
  }
`;
