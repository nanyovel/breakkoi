import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import RostroMujer1 from "./../../public/img/rostroMujer1.jpg";
import RostroMujer2 from "./../../public/img/rostroMujer2.jpg";
import RostroHombre1 from "./../../public/img/rostroHombre1.jpg";
import EEUU from "./../../public/img/estados-unidos.png";
import ImgStar from "./../../public/img/estrella.png";

export default function CardResennia({
  nombre,
  ImgPerson,
  ImgBandera,
  texto,
  filasDeDos,
  puntuacion,
  modal,
}) {
  const qtyEstrella = [];
  let contador = 0;
  while (contador < puntuacion) {
    qtyEstrella.push("");
    contador++;
  }
  return (
    <CajaPersona
      className={`
      ${filasDeDos ? " filasDeDos " : ""}
      ${modal ? "modal" : ""}
      `}
    >
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
      <CajaInterna className="texto">
        <CajaSubtitulo>
          <Subtitulo>{texto}</Subtitulo>
        </CajaSubtitulo>
        <CajaPuntuacion>
          {qtyEstrella.map((star, index) => {
            return <ImgEstrella key={index} src={ImgStar} />;
          })}
        </CajaPuntuacion>
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
  &.filasDeDos {
    flex: 1 1 calc(50% - 10px);
    /* margin-bottom: 15px; */
  }
  &.modal {
    margin: auto;
    margin-bottom: 15px;
    width: 100%;
  }
`;
const CajaInterna = styled.div`
  &.persona {
    width: 150px;
    /* border: 2px solid blue; */
    text-align: center;
  }
  &.texto {
    height: 100%;
  }
`;
const CajaImg = styled.div`
  height: 100px;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 60%;
  aspect-ratio: 1/1;
  object-fit: cover;
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
const CajaSubtitulo = styled.div`
  /* border: 1px solid red; */
  height: 80%;
  align-content: center;
`;
const Subtitulo = styled.p``;
const CajaPuntuacion = styled.div`
  height: 20%;
`;
const ImgEstrella = styled.img`
  width: 20px;
`;
