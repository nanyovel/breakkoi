import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BtnGeneral, TituloSeccion } from "../components/ElementosGenerales";
import { NavLink } from "react-router";

export default function ResetPassword() {
  return (
    <>
      {/* <Header /> */}
      <CajaContenido>
        <Titulo>Reestablecer contraseña</Titulo>
        <Subtitulo>
          Enviaremos un enlace a tu correo de reestablecimiento de contraseña.
        </Subtitulo>
        <WrapInputs>
          <CajaInput>
            <TituloInput>Correo electronico</TituloInput>
            <Input type="text" />
          </CajaInput>

          <CajaInput className="btn">
            <BtnSimple>Enviar enlace</BtnSimple>
          </CajaInput>
        </WrapInputs>
      </CajaContenido>
      {/* <Footer /> */}
    </>
  );
}

const CajaContenido = styled.div`
  min-height: 200px;
`;
const Titulo = styled(TituloSeccion)`
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
  margin-top: 25px;
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
`;

const Subtitulo = styled.h3`
  color: ${theme.secondary.coral};
  font-size: 1.4rem;
  text-decoration: underline;
  text-align: center;
  width: 100%;
`;
