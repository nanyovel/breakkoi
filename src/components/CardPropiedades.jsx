import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import ImgVilla1 from "./../assets/store/villa1.jpg";
import { BtnGeneral } from "./BtnGeneral";

export default function CardPropiedades({ imgMain, nombre }) {
  return (
    <Container>
      <CajaInterna>
        <Img src={imgMain} />
        <BtnSimple>Reservar</BtnSimple>
      </CajaInterna>
      <CajaInterna className="titulo">
        <Titulo>
          <Ancla>{nombre}</Ancla>
        </Titulo>
      </CajaInterna>
    </Container>
  );
}
const Container = styled.div`
  height: 200px;
  width: 400px;
  border: 1px solid ${theme.primary.turquoise};
  border-radius: 5px;
  cursor: pointer;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  transition: all ease 0.2s;
  &:hover {
    -moz-box-box-shadow: 2px 4px 11px 0px ${theme.primary.turquoise};
    -webkit-box-shadow: 2px 4px 11px 0px ${theme.primary.turquoise};
    box-shadow: 2px 4px 11px 0px ${theme.primary.turquoise};
    border: 1px solid #423f3f9e;
  }
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
  background-color: ${theme.primary.turquoise};
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Titulo = styled.h2`
  /* border: 1px solid red; */
  color: ${theme.primary.turquoise};
  color: white;
  height: 100%;
  text-align: center;
  vertical-align: center;
  align-content: center;
  font-size: 2rem;
  /* display: inline; */
  &:hover {
    text-decoration: underline;
  }
`;
const Ancla = styled.a``;
const BtnSimple = styled(BtnGeneral)`
  position: absolute;
  background-color: ${theme.secondary.coral};
  bottom: 0;
  right: 0;
`;
