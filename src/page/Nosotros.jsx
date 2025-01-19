import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TituloH1 } from "../components/ElementosGenerales";
import ImgVilla6 from "./../assets/store/villa6.jpg";
import ImgNinniaPool from "./../assets/store/ninniaPool.png";
import ImgWorkRead from "./../../public/img/trabajoEscrito.jpg";
import ImgbilderClip from "./../../public/img/bilderClip.jpg";
import ImgKidPool from "./../../public/img/kidPool.jpg";
import ImgMujerPlaya from "./../../public/img/mujerPlaya.svg";
import Carrusel from "../components/Carrusel";
import CardPropiedades from "../components/CardPropiedades";

export default function Nosotros() {
  return (
    <>
      <Header />
      <CajaContenido>
        <Titulo>Sobre nosotros</Titulo>
        <Subtitulo>Conocemos un poco mas</Subtitulo>
        <WrapTextoImg>
          <CajaInterna className="texto">
            <TituloLess>¿Quienes somos?</TituloLess>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
          </CajaInterna>
          <CajaInterna className="cajaImg">
            <Img src={ImgWorkRead} />
            <CajaHover className="hover">
              Somos una excelente opcion de alquileres vacacionales en Punta
              Cana.
            </CajaHover>
          </CajaInterna>
        </WrapTextoImg>

        <WrapTextoImg className="reverse">
          <CajaInterna className="texto">
            <TituloLess>Mision</TituloLess>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            {/* </CajaInterna> */}
            {/* <CajaInterna className="texto"> */}
            <TituloLess>Vision</TituloLess>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            {/* </CajaInterna> */}
            {/* <CajaInterna className="texto"> */}
            <TituloLess>Valores</TituloLess>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
            <br />
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eius qui, velit quas similique inventore! Saepe eos nobis
              repellat, dolores, dicta ab corrupti odio nostrum eius quisquam
              necessitatibus hic ullam.
            </Parrafo>
          </CajaInterna>
          <CajaInterna className="cajaImg">
            <Img src={ImgbilderClip} className="vertical" />
            <CajaHover className="hover">
              Tu refugio perfecto, Punta Cana.
            </CajaHover>
          </CajaInterna>
        </WrapTextoImg>
      </CajaContenido>
      <Footer />
    </>
  );
}
const CajaContenido = styled.div`
  width: 100%;
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
  min-height: 200px;
`;
const Titulo = styled(TituloH1)`
  padding-top: 30px;
`;
const Subtitulo = styled.h3`
  color: ${theme.secondary.coral};
  font-size: 1.4rem;
  text-decoration: underline;
  text-align: center;
  width: 100%;
  margin-bottom: 25px;
`;

const WrapTextoImg = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  &.reverse {
    flex-direction: row-reverse;
    margin-bottom: 180px;
  }
`;
const CajaInterna = styled.div`
  width: 48%;
  &.texto {
    align-content: center;
  }
  &.cajaImg {
    position: relative;
    overflow: hidden;
    border-radius: 5px;

    &:hover .hover {
      transform: translateX(0%);
    }
  }
`;
const Img = styled.img`
  width: 100%;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.svg {
    width: 80%;
  }
  &.vertical {
    /* width: 100%; */
  }
`;
const Parrafo = styled.p``;
const CajaHover = styled.div`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.8rem;
  width: 100%;
  height: 100%;
  position: absolute;
  font-weight: 600;
  background-color: #dc143c8c;
  padding: 10px;
  left: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform ease-in-out 0.3s;
`;

const CajaWave = styled.div`
  /* border: 2px solid red; */
  position: absolute;
  bottom: -100px;
  width: 100%;
  /* overflow: hidden; */
`;
const ImgWave = styled.img`
  position: absolute;
  bottom: -5px;
`;
const TituloLess = styled.h3`
  font-size: 1.8rem;
  color: ${theme.secondary.coral};
`;
