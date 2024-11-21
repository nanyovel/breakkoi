import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { BtnGeneral } from "./BtnGeneral";

export default function FormContact() {
  return (
    <Container>
      <CajaInput>
        <TituloInput>Nombre</TituloInput>
        <Input type="text" />
      </CajaInput>
      <CajaInput>
        <TituloInput>Telefono</TituloInput>
        <Input type="text" />
      </CajaInput>
      <CajaInput>
        <TituloInput>Correo</TituloInput>
        <Input type="text" />
      </CajaInput>
      <CajaInput>
        <TituloInput>Mensaje</TituloInput>
        <TextArea type="text" />
      </CajaInput>
      <BtnSimple>Enviar</BtnSimple>
    </Container>
  );
}

const Container = styled.div`
  min-width: 400px;
  min-height: 200px;
  width: 400px;
  /* display: inline-block; */
  /* width: 400px; */
  margin: auto;
  border: 1px solid ${theme.primary.turquoise};
  border-radius: 10px;
  padding: 15px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CajaInput = styled.div`
  width: 100%;
`;
const TituloInput = styled.p`
  color: ${theme.complementary.midnightBlue};
  /* color: red; */
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${theme.primary.turquoiseBrillante};
  background-color: ${theme.complementary.midnightBlue};
`;
const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 5px;
  color: ${theme.primary.turquoiseBrillante};
  background-color: ${theme.complementary.midnightBlue};
  min-height: 80px;
  resize: vertical;
`;
const BtnSimple = styled(BtnGeneral)`
  border: 1px solid ${theme.primary.turquoise};
`;
