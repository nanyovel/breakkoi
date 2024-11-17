import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";

export default function ContenedorPrincipal({ children }) {
  return <Container>{children}</Container>;
}
const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  z-index: 5000;
  padding: 0 80px;
`;