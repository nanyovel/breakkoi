import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import ContenedorPrincipal from "../components/ContenedorPrincipal";
import Header from "../components/Header";
import ImgVilla1 from "./../assets/store/villa1.jpg";
import ImgVilla2 from "./../assets/store/villa2.jpg";
import ImgVilla3 from "./../assets/store/villa3.jpg";
import ImgVilla4 from "./../assets/store/villa4.jpg";
import ImgVilla5 from "./../assets/store/villa5.jpg";
import ImgVilla6 from "./../assets/store/villa6.jpg";
import ImgWorkRead from "./../../public/img/trabajoEscrito.jpg";
import ImgKidPool from "./../../public/img/kidPool.jpg";
import ImgMujerPlaya from "./../../public/img/mujerPlaya.svg";
import Carrusel from "../components/Carrusel";
import CardPropiedades from "../components/CardPropiedades";
import { BtnGeneral } from "../components/BtnGeneral";
import FormContact from "../components/FormContact";
import CardResennia from "../components/CardResennia";
import RostroMujer1 from "./../../public/img/rostroMujer1.jpg";
import RostroMujer2 from "./../../public/img/rostroMujer2.jpg";
import RostroHombre1 from "./../../public/img/rostroHombre1.jpg";
import EEUU from "./../../public/img/estados-unidos.png";
import ALEMANIA from "./../../public/img/alemania.png";
import CANADA from "./../../public/img/canada.png";
import wave from "./../../public/img/wave.svg";
import CardBlog from "../components/SeccionBlog";

export default function Home() {
  const arrayImg = [
    ImgVilla1,
    ImgVilla2,
    ImgVilla3,
    ImgVilla4,
    ImgVilla5,
    ImgVilla6,
  ];
  return (
    <Container>
      <ContainerHeader>
        <Header />
        <ContainerHero>
          <Carrusel arrayImg={arrayImg} />
        </ContainerHero>
        <CajaTitulo>
          <TituloH1>
            Break
            <Span>Koi</Span>
          </TituloH1>
          <Subtitulo>Punta Cana te espera...</Subtitulo>
          <BtnSimple className="ctaMain">Reservar</BtnSimple>
        </CajaTitulo>
        <CajaWave>
          <ImgWave src={wave} />
        </CajaWave>
      </ContainerHeader>
      <ContenedorPrincipal>
        <Seccion>
          <TituloSeccion>Propiedades</TituloSeccion>
          <WrapPropiedades>
            <CardPropiedades imgMain={ImgVilla1} nombre="Villa Koi" />
            <CardPropiedades imgMain={ImgVilla4} nombre="Arena Gorda" />
            <CardPropiedades imgMain={ImgVilla6} nombre="Arrollo Salado" />
          </WrapPropiedades>
        </Seccion>
        <Seccion>
          <TituloSeccion>Envianos un mensaje</TituloSeccion>
          <FormContact />
        </Seccion>
        <Seccion>
          <TituloSeccion>Sobre nosotros</TituloSeccion>

          <WrapTextoImg>
            <CajaInterna className="texto">
              <TituloLess>¿Quienes somos?</TituloLess>
              <br />
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
              </Parrafo>
              <br />
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
              </Parrafo>
              <br />
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
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
              <TituloLess>¿Por que elegirnos?</TituloLess>
              <br />
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
              </Parrafo>
              <br />
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
              </Parrafo>
              <br />
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
              </Parrafo>
            </CajaInterna>
            <CajaInterna className="cajaImg">
              <Img src={ImgKidPool} />
              <CajaHover className="hover">
                Tu refugio perfecto, Punta Cana.
              </CajaHover>
            </CajaInterna>
          </WrapTextoImg>
        </Seccion>
        <Seccion>
          <TituloSeccion>Lo que nos hace diferentes</TituloSeccion>
          <WrapTextoImg className="reverse">
            <CajaInterna className="texto">
              <TituloLess>Factor diferenciador</TituloLess>
              <br />
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
              </Parrafo>
              <br />
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
              </Parrafo>
              <br />
              <TituloLess>Nuestros valores</TituloLess>
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
              </Parrafo>
              <br />
              <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci eius qui, velit quas similique inventore! Saepe eos
                nobis repellat, dolores, dicta ab corrupti odio nostrum eius
                quisquam necessitatibus hic ullam.
              </Parrafo>
              <br />
            </CajaInterna>
            <CajaInterna className="cajaImg">
              <Img src={ImgMujerPlaya} className="svg" />
            </CajaInterna>
          </WrapTextoImg>
        </Seccion>
        <Seccion>
          <TituloSeccion>¿Que dicen nuestros clientes?</TituloSeccion>
          <WrapTextoImg>
            <CardResennia
              nombre="Mirian Smith"
              ImgPerson={RostroMujer1}
              ImgBandera={EEUU}
              texto="Me encanto el lugar, todo limpio, ordenado, buen ambiente y la
              ubicacion geografica es lo maravilloso del sitio."
            />
            <CardResennia
              nombre="Nolan Sandler"
              ImgPerson={RostroHombre1}
              ImgBandera={ALEMANIA}
              texto="Este sitio me encanta, es la tarcera vez que voy y no sera la ultima."
            />
            <CardResennia
              nombre="Mary Diaz"
              ImgPerson={RostroMujer2}
              ImgBandera={CANADA}
              texto="Mi esposo y mis hijos quedaron encantado con el lugar y la zona, siempre es un placer visitar Punta Cana."
            />
          </WrapTextoImg>
        </Seccion>
        <Seccion>
          <TituloSeccion>Noticias (Blog)</TituloSeccion>
          <WrapTextoImg>
            <CardBlog />
          </WrapTextoImg>
        </Seccion>
      </ContenedorPrincipal>
    </Container>
  );
}
//FAQ (Preguntas frecuentes)
//Registrate para recibir precio especial
//5 razones q
// Noticias

const Container = styled.div``;

// ***** HERO ******
const ContainerHeader = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-bottom: 80px;
  overflow: hidden;
`;
const ContainerHero = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  height: 100vh;
`;
const CajaTitulo = styled.div`
  border: 1px solid red;
  min-width: 30%;
  min-height: 30vh;
  position: absolute;
  top: 50vh;
  right: 100px;
  z-index: 2;
  border: 2px solid ${theme.primary.turquoise};
  background-color: rgba(243, 229, 171, 0.9);
  border-radius: 5px;

  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  padding-left: 15px;
`;
const TituloH1 = styled.h1`
  font-size: 6rem;
  color: ${theme.primary.turquoise};
  padding: 0;
  font-weight: lighter;
`;
const Span = styled.span`
  color: ${theme.primary.white};
`;
const Subtitulo = styled.h2`
  color: ${theme.secondary.coral};
`;

// ***** RESTO CONTENIDO ******
const Seccion = styled.section`
  margin-bottom: 100px;
  /* border: 1px solid red; */
`;
const TituloSeccion = styled.h2`
  color: ${theme.primary.turquoiseTenue};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: normal;
`;
const BtnSimple = styled(BtnGeneral)``;

const TituloLess = styled.h3`
  font-size: 1.8rem;
  color: ${theme.secondary.coral};
`;
const WrapTextoImg = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  &.reverse {
    flex-direction: row-reverse;
  }
`;
const CajaInterna = styled.div`
  width: 50%;
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

const WrapPropiedades = styled.div`
  display: flex;
  gap: 50px;
`;
