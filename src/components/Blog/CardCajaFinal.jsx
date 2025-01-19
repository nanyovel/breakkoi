import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { NavLink } from "react-router";

export default function CardCajaFinal({ blog }) {
  return (
    <Card>
      <CajaImgCard>
        <Img src={blog.imgPrincipal} />
      </CajaImgCard>
      <CajaDown>
        <CajaTexto>
          <Texto>{blog.titulo}</Texto>
        </CajaTexto>
        <CajaLeerMas>
          <TextLeerMas>Leer Mas...</TextLeerMas>
        </CajaLeerMas>
      </CajaDown>
    </Card>
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
`;
const Card = styled.div`
  width: 30%;
  /* border: 1px solid ${theme.primary.neutral600}; */
  min-height: 350px;
  background-color: ${theme.primary.sand};
  transition: all ease 0.2s;
  box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: ${theme.config.sombra};
  }
`;
const CajaImgCard = styled.div`
  width: 100%;
  /* margin-bottom: 15px; */
`;
const Img = styled.img`
  width: 100%;
  border-bottom: 1px solid ${theme.primary.neutral500};
`;
const CajaDown = styled.div`
  padding: 0 15px;
`;
const CajaTexto = styled.div`
  width: 100%;
`;
const Texto = styled.h2`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  /* text-align: center; */
  font-size: 1.2rem;
  font-weight: 700;
  color: ${theme.secondary.coral};
  &:hover {
    color: ${theme.secondary.rojoTerracota};
    cursor: pointer;
  }
`;

const CajaLeerMas = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const TextLeerMas = styled.p`
  width: 100%;
  /* text-align: center; */
  color: ${theme.secondary.azulLink};
  &:hover {
    color: ${theme.secondary.azulText};
  }
`;
