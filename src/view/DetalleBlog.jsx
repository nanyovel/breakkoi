import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TituloSeccion } from "../components/ElementosGenerales";
import { BlogsDB } from "../DB/BlogsDB";
import { Route, Routes } from "react-router";
import Blog1RazonesVillaVSHotel from "./BLOGS/Blog1RazonesVillaVSHotel";
import Blog2GuiaVacacionesPuntaCana from "./BLOGS/Blog2GuiaVacacionesPuntaCana";
import CajaFinal from "../components/Blog/CajaFinal";

export default function DetalleBlog() {
  const post = BlogsDB[0];
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="razones-por-las-que-hospedarte-en-una-villa-es-mejor-que-un-hotel"
          element={<Blog1RazonesVillaVSHotel />}
        />
        <Route
          path="Guia-Definitiva-y-Recomendaciones-para-unas-Vacaciones-Perfectas-en-Punta-Cana"
          element={<Blog2GuiaVacacionesPuntaCana />}
        />
      </Routes>
      <ContenedorFinal>
        <CajaFinal />
      </ContenedorFinal>
      <Footer />
    </>
  );
}
const ContenedorFinal = styled.div`
  padding: 0 ${theme.config.paddingLateral};
`;
