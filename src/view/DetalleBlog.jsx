import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TituloSeccion } from "../components/ElementosGenerales";
// import { BlogsDB } from "../DB/BlogsDB";
import { Route, Routes } from "react-router";
import Blog1RazonesVillaVSHotel from "./BLOGS/Blog1RazonesVillaVSHotel";
import Blog2GuiaVacacionesPuntaCana from "./BLOGS/Blog2GuiaVacacionesPuntaCana";
import CajaFinal from "../components/Blog/CajaFinal";
import { useAuth } from "../context/AuthContext";
import { fetchFindAnyContains } from "../libs/FetchFirebase";
import BotonQuery from "../components/BotonQuery";

export default function DetalleBlog() {
  const usuario = useAuth().usuario;
  const [currentPost, setCurrentPost] = useState(null);

  const [relacionados, setRelacionados] = useState([]);

  useEffect(() => {
    if (usuario && currentPost) {
      (async () => {
        console.log(currentPost);
        const postAux = await fetchFindAnyContains(
          "post",
          "keyWords",
          currentPost.keyWords,
          3
        );
        setRelacionados(postAux);
        console.log(postAux);
      })();
    }
  }, [currentPost, usuario]);

  return (
    <>
      <Routes>
        <Route
          path="razones-por-las-que-hospedarte-en-una-villa-es-mejor-que-un-hotel"
          element={
            <Blog1RazonesVillaVSHotel
              setCurrentPost={setCurrentPost}
              currentPost={currentPost}
              relacionados={relacionados}
            />
          }
        />
        <Route
          path="Guia-Definitiva-y-Recomendaciones-para-unas-Vacaciones-Perfectas-en-Punta-Cana"
          element={
            <Blog2GuiaVacacionesPuntaCana
              setCurrentPost={setCurrentPost}
              currentPost={currentPost}
              relacionados={relacionados}
            />
          }
        />
      </Routes>
      {relacionados.length > 0 && (
        <ContenedorFinal>
          <CajaFinal relacionados={relacionados} />
        </ContenedorFinal>
      )}
      {/* <Footer /> */}
    </>
  );
}
const ContenedorFinal = styled.div`
  padding: 0 ${theme.config.paddingLateral};
`;
