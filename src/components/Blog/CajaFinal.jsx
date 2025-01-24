import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { BlogsDB } from "./../../DB/BlogsDB";
import { NavLink } from "react-router";
import CardCajaFinal from "./CardCajaFinal";

export default function CajaFinal() {
  return (
    <Container>
      <Titulo>Articulos relacionados:</Titulo>
      <CajaCard>
        <CardCajaFinal blog={BlogsDB[0]} />
        <CardCajaFinal blog={BlogsDB[1]} />
      </CajaCard>
    </Container>
  );
}
const Container = styled.div`
  box-shadow: ${theme.config.sombra};
  margin-bottom: 100px;
`;
const Enlace = styled(NavLink)`
  text-decoration: none;
`;
const Titulo = styled.h2`
  color: ${theme.primary.turquoise};
  font-size: 2.4rem;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
`;
const CajaCard = styled.div`
  width: 100%;
  min-height: 400px;
  /* background-color: red; */
  padding: 10px;
  display: flex;
  gap: 25px;
`;
