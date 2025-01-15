import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Galeria from "./PartesVilla/Galeria";
import DescripcionVilla from "./PartesVilla/DescripcionVilla";
import Amenidades from "./PartesVilla/Amenidades";
import ControlesDetalles from "./PartesVilla/ControlesDetalles";
import CopyDescription from "./PartesVilla/CopyDescription";
import Principal from "./PartesVilla/Principal";
import Location from "./PartesVilla/Location";
import { BtnGeneral } from "../components/ElementosGenerales";
import CajaResennias from "./PartesVilla/CajaResennias";
import LugaresCercanos from "./PartesVilla/LugaresCercanos";
import CajaAnfritrion from "./PartesVilla/CajaAnfritrion";

export default function DetalleVilla() {
  const galeriaRef = useRef(null);
  const lugaresCercanosRef = useRef(null);
  const amenidadesRef = useRef(null);
  const resenniasRef = useRef(null);

  const hacerScroll = (e) => {
    const nameDataset = e.target.dataset.name;
    console.log(nameDataset);

    if (nameDataset == "galeria") {
      galeriaRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (nameDataset == "lugaresCercanos") {
      lugaresCercanosRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (nameDataset == "amenidades") {
      amenidadesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (nameDataset == "resennias") {
      resenniasRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        // Ajustar el scroll 100px hacia arriba después de desplazarse
        window.scrollBy({ top: -100, behavior: "smooth" });
      }, 500); // Ajusta este tiempo si es necesario
    }
  };
  return (
    <>
      <Header noFixed={true} />
      <Container>
        <TituloVilla ref={galeriaRef}>Villa Koi Punta Cana</TituloVilla>
        <Galeria />
        <ControlesDetalles hacerScroll={hacerScroll} />
        <Seccion className="anchoCompleto sinBorde">
          <Subtitulo className=" pocoMargin">
            Villa de lujo en Punta Cana: La escapada que necesitas.
          </Subtitulo>

          <DescripcionVilla hacerScroll={hacerScroll} />
        </Seccion>
        <Seccion>
          <Subtitulo>Principal</Subtitulo>
          <Principal />
        </Seccion>
        <Seccion>
          <Subtitulo ref={lugaresCercanosRef}>Lugares cercanos</Subtitulo>
          <LugaresCercanos />
        </Seccion>
        <Seccion>
          <Subtitulo ref={amenidadesRef}>Amenidades</Subtitulo>
          <Amenidades />
        </Seccion>

        <Seccion>
          <Subtitulo>Detalles</Subtitulo>
          <CopyDescription />
        </Seccion>
        <Seccion>
          <Subtitulo>Ubicacion</Subtitulo>
          <Location />
        </Seccion>
        <Seccion>
          <Subtitulo ref={resenniasRef}>Ult. Reseñas</Subtitulo>
          <CajaResennias />
        </Seccion>
        <Seccion className="anchoCompleto">
          <Subtitulo>Anfritrion</Subtitulo>
          <CajaAnfritrion />
        </Seccion>
      </Container>

      <Footer />
    </>
  );
}

const Container = styled.div`
  position: relative;
  padding: 0 200px;
  margin-bottom: 300px;
`;
const TituloVilla = styled.h1`
  padding: 20px;
  color: ${theme.primary.turquoise};
  font-size: 1.6rem;
`;
const Seccion = styled.section`
  margin-bottom: 50px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${theme.primary.turquoise};
  border-bottom: 1px solid ${theme.secondary.coral};
  /* background-color: red; */
  width: 65%;
  &.sinBorde {
    border: none;
  }
  &.anchoCompleto {
    width: auto;
  }
  height: auto;
`;
const Subtitulo = styled.h2`
  color: ${theme.secondary.coral};
  border-bottom: 1px solid ${theme.secondary.coral};
  margin-bottom: 15px;
  &.pocoMargin {
    margin-bottom: 15px;
  }
`;

const BtnSimple = styled(BtnGeneral)``;
