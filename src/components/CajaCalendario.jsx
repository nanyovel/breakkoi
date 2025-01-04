import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";

export default function CajaCalendario({ position, top }) {
  return (
    <Container $position={position} $top={top}>
      <Titulo>Calendario</Titulo>
    </Container>
  );
}

const Container = styled.div`
  position: ${(props) => props.$position};
  top: ${(props) => props.$top};
  right: 200px;
  width: 360px;
  height: 300px;
  background-color: #f4a261;
  /* transition: top 0.3s ease, position 0.3s ease; */
`;
const Titulo = styled.h2`
  font-size: 1.6rem;
  color: ${theme.primary.neutral300};
  width: 100;
  text-align: center;
  padding: 10px;
`;
// Estilos para la caja
const Box = styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: 20px;
  width: 200px;
  height: 100px;
  background-color: #f4a261;
  transition: top 0.3s ease, position 0.3s ease;
`;
