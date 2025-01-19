import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TituloH1 } from "../components/ElementosGenerales";
import Card from "./partes03Blog/Card";
import { BlogsDB } from "../DB/BlogsDB";

export default function ListaBlog() {
  return (
    <>
      <Header />
      <Container>
        <Titulo>Ultimas entradas</Titulo>
        <WrapBlogs>
          <Card blog={BlogsDB[0]} />
          <Card blog={BlogsDB[1]} />
        </WrapBlogs>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  min-height: 200px;
`;
const Titulo = styled(TituloH1)`
  padding-top: 30px;
`;
const WrapBlogs = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
  gap: 25px;
  margin-bottom: 80px;
`;
