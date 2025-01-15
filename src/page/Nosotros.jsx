import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <>
      <Header />
      <CajaContenido></CajaContenido>
      <Footer />
    </>
  );
}
const CajaContenido = styled.div`
  width: 100%;
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
  min-height: 200px;
  background-color: red;
`;
