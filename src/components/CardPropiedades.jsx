import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import ImgVilla1 from "./../assets/store/villa1.jpg";
import { BtnGeneral } from "./BtnGeneral";

export default function CardPropiedades() {
  return (
    <Container>
      <CajaInterna>
        <Img src={ImgVilla1} />
        <BtnSimple>Reservar</BtnSimple>
      </CajaInterna>
      <CajaInterna className="titulo">
        <Titulo>Villa Koi</Titulo>
      </CajaInterna>
    </Container>
  );
}
const Container = styled.div`
  height: 200px;
  width: 300px;
  border: 1px solid ${theme.primary.turquoise};
  border-radius: 5px;
  cursor: pointer;
`;
const CajaInterna = styled.div`
  width: 100%;
  overflow: hidden;
  height: 80%;
  position: relative;
  &.titulo {
    height: 20%;
    display: flex;
    justify-content: space-around;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Titulo = styled.h2`
  /* border: 1px solid red; */
  color: ${theme.primary.turquoise};
  height: 100%;
  text-align: center;
  /* display: inline; */
`;

const BtnSimple = styled(BtnGeneral)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
