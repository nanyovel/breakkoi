import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import ImgCama from "./../../../public/icon/cama.png";
import ImgHabitacion from "./../../../public/icon/habitacion.png";
import ImgPeople from "./../../../public/icon/people.png";
import ImgDucha from "./../../../public/icon/ducha.png";

export default function Principal({ resumido }) {
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
  console.log(Principal.length);
  return (
    <Container className={resumido ? "resumido" : ""}>
      {Principal.map((pri, index) => {
        return (
          <CajaItem
            key={index}
            className={`
            ${resumido ? " resumido " : ""}
            ${index < Principal.length - 1 ? " borderRight " : ""}
          
          `}
          >
            {!resumido && <Img src={pri.icono} />}
            <Titulo>{pri.texto}</Titulo>
          </CajaItem>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  &.resumido {
    display: flex;
    /* border: 1px solid blue; */
    border-bottom: 1px solid ${theme.primary.neutral600};
    justify-content: center;
  }
`;
const CajaItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
  padding-left: 35px;
  &.resumido {
    padding-left: 0;
    display: flex;
    width: 25%;
    justify-content: center;
    &.borderRight {
      border-right: 1px solid;
    }
  }
`;
const Img = styled.img`
  width: 25px;
`;
const Titulo = styled.h2`
  font-size: 1.2rem;
  color: ${theme.primary.neutral600};
  /* border: 1px solid red; */
  /* width: 100%; */
`;
