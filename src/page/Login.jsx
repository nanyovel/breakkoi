import React, { useState } from "react";
import { theme } from "../config/theme";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BtnGeneral, TituloH1 } from "../components/ElementosGenerales";
import { NavLink } from "react-router";

export default function Login() {
  return (
    <>
      <Header />
      <CajaContenido>
        <Titulo>Iniciar sesion</Titulo>
        <WrapInputs>
          <CajaInput>
            <TituloInput>Correo electronico</TituloInput>
            <Input type="text" />
          </CajaInput>
          <CajaInput>
            <TituloInput>Contraseña</TituloInput>
            <Input type="text" />
          </CajaInput>

          <CajaInput className="btn">
            <BtnSimple>Iniciar sesion</BtnSimple>
          </CajaInput>
          <CajaInput className="links">
            <Enlaces to={"/registro"}>Registrarse</Enlaces>
            <Enlaces to={"/resetPassword"}>Olvide mi contraseña</Enlaces>
          </CajaInput>
        </WrapInputs>
      </CajaContenido>
      <Footer />
    </>
  );
}
const CajaContenido = styled.div`
  min-height: 200px;
`;
const Titulo = styled(TituloH1)`
  padding-top: 30px;
`;

const WrapInputs = styled.div`
  min-width: 400px;
  min-height: 200px;
  width: 400px;
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
  margin-bottom: 200px;
`;
const CajaInput = styled.div`
  width: 100%;
  &.btn {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

const Enlaces = styled(NavLink)`
  color: ${theme.primary.neutral600};
  display: block;
  position: relative;
  transition: color 25ms;
  border-bottom: 3px solid transparent;
  &:hover {
    color: ${theme.primary.neutral500};
    border-bottom: 3px solid;
  }

  text-decoration: none;
`;
const TituloInput = styled.p`
  color: ${theme.complementary.midnightBlue};
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

const BtnSimple = styled(BtnGeneral)`
  border: 1px solid ${theme.primary.turquoise};
  /* height: 40px; */
`;
