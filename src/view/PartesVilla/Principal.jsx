import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import ImgCama from "./../../../public/icon/cama.png";
import ImgHabitacion from "./../../../public/icon/habitacion.png";
import ImgPeople from "./../../../public/icon/people.png";
import ImgDucha from "./../../../public/icon/ducha.png";

export default function Principal() {
  const Principal = [
    {
      texto: "6 Huespedes",
      icono: ImgPeople,
    },
    {
      texto: "3 habitaciones",
      icono: ImgHabitacion,
    },
    {
      texto: "3 Camas",
      icono: ImgCama,
    },
    {
      texto: "2 baños",
      icono: ImgDucha,
    },
  ];
  return (
    <Container>
      {Principal.map((pri, index) => {
        return (
          <CajaItem key={index}>
            <Img src={pri.icono} />
            <Titulo>{pri.texto}</Titulo>
          </CajaItem>
        );
      })}
    </Container>
  );
}

const Container = styled.div``;
const CajaItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
  padding-left: 35px;
`;
const Img = styled.img`
  width: 25px;
`;
const Titulo = styled.h2`
  font-size: 1.2rem;
  color: ${theme.primary.neutral600};
`;
