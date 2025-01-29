import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TituloH1 } from "../components/ElementosGenerales";
import Card from "./partes03Blog/Card";
import { useAuth } from "../context/AuthContext";
import { fetchGetDocs, fetchGetDocsLimit } from "../libs/FetchFirebase";

export default function ListaBlog() {
  const usuario = useAuth().usuario;
  const [listaBlog, setListaBlog] = useState([]);
  const [datosParseados, setDatosParseados] = useState(false);

  useEffect(() => {
    (async () => {
      if (usuario) {
        const listaBlogAux = await fetchGetDocsLimit(
          "post",
          "createAt",
          "desc",
          10
        );
        console.log(listaBlogAux);
        setListaBlog(listaBlogAux);
        setDatosParseados(true);
      }
    })();
  }, []);
  return (
    <>
      <Container>
        <Titulo>Ultimas entradas</Titulo>
        <WrapBlogs>
          {datosParseados && (
            <>
              <Card blog={listaBlog[0]} />
              <Card blog={listaBlog[1]} />
            </>
          )}
        </WrapBlogs>
      </Container>
      {/* <Footer /> */}
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
