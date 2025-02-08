import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import ImgPeople from "./../../../public/icon/people.png";
import ImgCama from "./../../../public/icon/cama.png";
import ImgHabitacion from "./../../../public/icon/habitacion.png";
import ImgDucha from "./../../../public/icon/ducha.png";

export default function Principal({ principal, resumido }) {
  return (
    <Container className={resumido ? "resumido" : ""}>
      <CajaItem className={`${resumido ? " resumido " : ""}`}>
        {!resumido && <Img src={ImgPeople} />}
        <Titulo>{principal.huespedes.qty + " Huespedes"}</Titulo>
      </CajaItem>
      <CajaItem className={`${resumido ? " resumido " : ""}`}>
        {!resumido && <Img src={ImgHabitacion} />}
        <Titulo>{principal.habitaciones.qty + " Habitaciones"}</Titulo>
      </CajaItem>
      <CajaItem className={`${resumido ? " resumido " : ""}`}>
        {!resumido && <Img src={ImgCama} />}
        <Titulo>{principal.camas.qty + " Camas"}</Titulo>
      </CajaItem>
      <CajaItem className={`${resumido ? " resumido " : ""}`}>
        {!resumido && <Img src={ImgDucha} />}
        <Titulo>{principal.bannios.qty + " Baños"}</Titulo>
      </CajaItem>
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
