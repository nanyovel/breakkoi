import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import {
  IconoComida,
  IconoFotos,
  IconoShare,
} from "../../components/ConjuntoIconos";

export default function ControlesDetalles({ hacerScroll }) {
  return (
    <CajaControles>
      <CajitaDetalles>
        <IconoShare width="1.3rem" />
        <TituloFunt>Compartir</TituloFunt>
      </CajitaDetalles>
      <CajitaDetalles>
        <IconoFotos width="1.3rem" />
        <TituloFunt>Ver mas fotos</TituloFunt>
      </CajitaDetalles>
      <CajitaDetalles>
        <IconoComida width="1.3rem" />
        <TituloFunt data-name="lugaresCercanos" onClick={(e) => hacerScroll(e)}>
          Lugares cercados
        </TituloFunt>
      </CajitaDetalles>
    </CajaControles>
  );
}
const Container = styled.div``;

const CajaControles = styled.div`
  width: 100%;
  /* min-height: 50px; */
  display: flex;
  border-bottom: 1px solid ${theme.primary.neutral200};
  /* margin-bottom: 15px; */
`;
const CajitaDetalles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 5px;
`;
const TituloFunt = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const CajaAnfitrion = styled.div``;
const ImgAvatar = styled.img`
  border-radius: 50%;
  width: 60px;
  aspect-ratio: 1/1;
`;
const Titulo = styled.h3`
  font-size: 0.9rem;
  font-weight: 400;
`;
const NombreAnfitrion = styled.p``;
