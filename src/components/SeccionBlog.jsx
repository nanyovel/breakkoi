import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import ImgGirlSand from "./../../public/img/girlSand.jpg";
import ImgPlata from "./../../public/img/playa.jpg";
import ImgplayaRomantica from "./../../public/img/playaRomantica.jpg";
import MaletaPlaya from "./../../public/img/maletaPlaya.jpg";
import FoodCaribbean from "./../../public/img/foodCaribbean.jpg";

export default function SeccionBlog() {
  return (
    <Container>
      <CajaInterna className="izquieda">
        <WrapPost className="destacada">
          <CajaImg className="destacada">
            <Img src={ImgGirlSand} />
          </CajaImg>
          <CajaTitulo className="destacada">
            <Titulo>
              5 Razones por las que Hospedarte en una Villa es Mejor que un
              Hotel
            </Titulo>
          </CajaTitulo>
        </WrapPost>
        <WrapPost className="subDestacada">
          <CajaImg className="subDestacada">
            <Img src={ImgPlata} />
          </CajaImg>
          <CajaTitulo className="subDestacada">
            <Titulo>
              Guía Definitiva y recomendaciones que debes saber para pasar unas
              Vacaciones Perfectas en Punta Cana
            </Titulo>
          </CajaTitulo>
        </WrapPost>
      </CajaInterna>
      <CajaInterna className="derecha">
        <WrapPost className="itemsRigt">
          <CajaImg className="itemsRigt">
            <Img src={ImgplayaRomantica} />
          </CajaImg>
          <CajaTitulo className="itemsRigt">
            <Titulo>
              Los 10 Mejores Planes para Disfrutar de Punta Cana como un Experto
            </Titulo>
          </CajaTitulo>
        </WrapPost>
        <WrapPost className="itemsRigt">
          <CajaImg className="itemsRigt">
            <Img src={MaletaPlaya} />
          </CajaImg>
          <CajaTitulo className="itemsRigt">
            <Titulo>
              Qué Empacar para unas Vacaciones en el Paraíso: Punta Cana Edition
            </Titulo>
          </CajaTitulo>
        </WrapPost>
        <WrapPost className="itemsRigt">
          <CajaImg className="itemsRigt">
            <Img src={FoodCaribbean} />
          </CajaImg>
          <CajaTitulo className="itemsRigt">
            <Titulo>
              Delicias Locales: Qué Comer en Punta Cana para Vivir el Sabor del
              Caribe
            </Titulo>
          </CajaTitulo>
        </WrapPost>
      </CajaInterna>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  height: 550px;
  /* overflow: hidden; */
  /* gap: 15px; */
`;

const CajaInterna = styled.div`
  /* height: 100%; */
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.izquieda {
    /* gap: 30px; */
    width: 70%;
    margin-right: 15px;

    /* margin-bottom: 15px; */
  }
  &.derecha {
    /* gap: 20px; */
    /* max-height: 550px; */
    width: 30%;
    /* display: flex;
    flex-direction: column; */
    /* position: relative; */
    /* grid-template-rows: 1fr 1fr 1fr; */
    /* border: 2px solid blue; */
    /* overflow: hidden; */
  }
`;

const WrapPost = styled.a`
  cursor: pointer;
  display: block;
  /* overflow: hidden; */
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  transition: all ease 0.2s;
  width: 100%;

  &:hover {
    -moz-box-box-shadow: 2px 4px 11px 0px ${theme.primary.turquoise};
    -webkit-box-shadow: 2px 4px 11px 0px ${theme.primary.turquoise};
    box-shadow: 2px 4px 11px 0px ${theme.primary.turquoise};
    border: 1px solid #423f3f9e;
  }
  &.destacada {
    height: 69%;
    /* margin-bottom: 20px; */
  }
  &.subDestacada {
    height: 28%;
    display: flex;
    flex-direction: row-reverse;
  }
  &.itemsRigt {
    height: 32%;
    /* margin-bottom: 15px; */
    width: 100%;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
  }
`;

const CajaImg = styled.div`
  &.destacada {
    width: 100%;
    height: 85%;
    position: relative;
    /* overflow: hidden; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.subDestacada {
    width: 70%;
    height: 100%;
    background-color: green;
  }
  &.itemsRigt {
    height: 70%;
    width: 100%;
  }
`;
const CajaTitulo = styled.div`
  padding: 5px;
  font-size: 1.2rem;
  &.destacada {
    height: 15%;
  }
  &.subDestacada {
    display: flex;
    align-items: center;
  }
  &.itemsRigt {
    height: 30%;
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Titulo = styled.h2`
  color: ${theme.secondary.coral};
  font-size: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
