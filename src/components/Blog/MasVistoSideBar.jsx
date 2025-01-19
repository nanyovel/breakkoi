import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router";
import { theme } from "../../config/theme";
import { BlogsDB } from "../../DB/BlogsDB";

export default function MasVistoSideBar() {
  return (
    <Container>
      <Titulo>Mas vistos:</Titulo>
      <Lista>
        <Elemento>
          <Enlace to={`/blog/` + BlogsDB[0].url}>{BlogsDB[0].titulo}</Enlace>
        </Elemento>

        <Elemento>
          <Enlace to={`/blog/` + BlogsDB[1].url}>{BlogsDB[1].titulo}</Enlace>
        </Elemento>
      </Lista>
    </Container>
  );
}
const Container = styled.div`
  /* background-color: black; */
  width: 100%;
  min-height: 400px;
  padding: 15px 5px;
  box-shadow: ${theme.config.sombra};
`;
const Titulo = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;
const Lista = styled.ul`
  list-style: none;
  padding-left: 15px;
`;
const Elemento = styled.li`
  line-height: 20px;
  margin-bottom: 15px;
`;
const Enlace = styled(NavLink)`
  text-decoration: none;
  /* color: ${theme.secondary.azulLink}; */
  color: ${theme.secondary.coral};
  &:hover {
    color: ${theme.secondary.azulText};
    color: ${theme.secondary.rojoTerracota};
    cursor: pointer;
  }
`;
