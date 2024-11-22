import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import RostroMujer1 from "./../../public/img/rostroMujer1.jpg";
import RostroMujer2 from "./../../public/img/rostroMujer2.jpg";
import RostroHombre1 from "./../../public/img/rostroHombre1.jpg";
import EEUU from "./../../public/img/estados-unidos.png";

export default function CardResennia({ nombre, ImgPerson, ImgBandera, texto }) {
  return (
    <CajaPersona>
      <CajaInterna className="persona">
        <CajaImg>
          <Img src={ImgPerson} />
        </CajaImg>
        <CajaNombre>
          <CajitaBandera>
            <Img className="bandera" src={ImgBandera} />
          </CajitaBandera>
          <Nombre>{nombre}</Nombre>
        </CajaNombre>
      </CajaInterna>
      <CajaInterna>
        <CajaSubtitulo>
          <Subtitulo>{texto}</Subtitulo>
        </CajaSubtitulo>
      </CajaInterna>
    </CajaPersona>
  );
}

const CajaPersona = styled.article`
  height: auto;
  align-items: center;
  border: 1px solid ${theme.primary.turquoise};
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  width: 400px;
  background-color: ${theme.primary.turquoise};
  color: white;
`;
const CajaInterna = styled.div`
  &.persona {
    width: 150px;
    /* border: 2px solid blue; */
    text-align: center;
  }
`;
const CajaImg = styled.div`
  height: 100px;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 60%;
  aspect-ratio: 1/1;
  /* object-fit: cover; */
  &.bandera {
    width: 20px;
  }
`;
const CajitaBandera = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
`;
const CajaNombre = styled.div`
  display: flex;
  /* border: 1px solid red; */
  width: 150px;
  overflow: hidden;
  text-align: center;
  align-items: center;
  gap: 5px;
`;
const Nombre = styled.h3`
  font-size: 1rem;
`;
const CajaSubtitulo = styled.div``;
const Subtitulo = styled.p``;
