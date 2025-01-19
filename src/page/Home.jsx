import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
// import ContenedorPrincipal from "../components/ContenedorPrincipal";
import Header from "../components/Header";
import ImgVilla1 from "./../assets/store/villa1.jpg";
import ImgVilla2 from "./../assets/store/villa2.jpg";
import ImgVilla3 from "./../assets/store/villa3.jpg";
import ImgVilla4 from "./../assets/store/villa4.jpg";
import ImgVilla5 from "./../assets/store/villa5.jpg";
import ImgVilla6 from "./../assets/store/villa6.jpg";
import ImgNinniaPool from "./../assets/store/ninniaPool.png";
import ImgWorkRead from "./../../public/img/trabajoEscrito.jpg";
import ImgGirlPool from "./../../public/img/girlPool.jpg";
import ImgKidPool from "./../../public/img/kidPool.jpg";
import ImgMujerPlaya from "./../../public/img/mujerPlaya.svg";
import Carrusel from "../components/Carrusel";
import CardPropiedades from "../components/CardPropiedades";
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
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router";
import { BtnGeneral } from "../components/ElementosGenerales";
import { Villas } from "../DB/Villas";

export default function Home() {
  const arrayImg = [
    ImgVilla1,
    ImgVilla2,
    ImgVilla3,
    ImgVilla4,
    ImgVilla5,
    ImgVilla6,
  ];
  const navigate = useNavigate();
  const goProperty = () => {
    navigate("/propiedades");
  };
  const villaDB = Villas[0];
  return (
    <>
      <Header absolute={true} />
      <Container2>
        <ContainerHeader>
          <ContainerHero>
            <Carrusel arrayImg={arrayImg} />
          </ContainerHero>
          <CajaTitulo>
            <TituloH1>
              Break
              <Span>Koi</Span>
            </TituloH1>
            <Subtitulo>Punta Cana te espera...</Subtitulo>
            <BtnSimple className="ctaMain" onClick={() => goProperty()}>
              Reservar
            </BtnSimple>
          </CajaTitulo>
          <CajaWave>
            <ImgWave src={wave} />
          </CajaWave>
        </ContainerHeader>
        <BarraPieHero>
          <TituloPieHero>
            ¿Preocupado por el Wi-Fi? Aquí solo necesitas conectarte con el sol
            y el mar.
          </TituloPieHero>
        </BarraPieHero>
        <ContainerSemi>
          <WrapSeccion>
            <WrapSeccion className="internal">
              <Seccion className="video">
                <CajaVideo>
                  <CajaInternaVideo className="izquierda">
                    <TituloH2Video>
                      Break Koi: Una escapada de lujo en Punta Cana.
                    </TituloH2Video>
                    <ParrafoVideo>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum necessitatibus, ipsam hic eaque iusto nemo
                      accusantium. Eos dolorem, temporibus adipisci placeat
                      magnam nostrum animi veritatis dicta. Atque est libero
                      assumenda.
                    </ParrafoVideo>
                    <ParrafoVideo>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum necessitatibus, ipsam hic eaque iusto nemo
                      accusantium. Eos dolorem, temporibus adipisci placeat
                      magnam nostrum animi veritatis dicta. Atque est libero
                      assumenda.
                    </ParrafoVideo>
                  </CajaInternaVideo>
                  <CajaInternaVideo className="derecha">
                    <CajaYouTube>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/S7gJV3Jwmh4?si=2jlzF4_GiNiLP7o0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </CajaYouTube>
                  </CajaInternaVideo>
                </CajaVideo>
              </Seccion>
            </WrapSeccion>
          </WrapSeccion>
          <Seccion>
            <TituloSeccion className="sinMarginBottom">
              Propiedades
            </TituloSeccion>
            <SubtituloSeccion>
              4 villas lujosas, en zonas estrategicas de Punta Cana.
            </SubtituloSeccion>
            <WrapPropiedades>
              <EnlacePrincipal to={"propiedades/" + villaDB.url}>
                <CardPropiedades imgMain={ImgNinniaPool} nombre="Villa Koi" />
              </EnlacePrincipal>
              <CardPropiedades
                imgMain={
                  "	https://cdn.pixabay.com/photo/2021/08/06/21/25/woman-6527238_960_720.jpg"
                }
                nombre="Arena Gorda"
              />
              <CardPropiedades
                imgMain={
                  "		https://cdn.pixabay.com/photo/2014/07/08/21/39/cocktail-387902_960_720.jpg"
                }
                nombre="Arrollo Salado"
              />
              <CardPropiedades
                imgMain={
                  "	https://cdn.pixabay.com/photo/2021/11/17/15/22/swimming-pool-6803839_960_720.jpg"
                }
                nombre="Playa Macao"
              />
            </WrapPropiedades>
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
                <Img src={ImgGirlPool} />
                <CajaHover className="hover">
                  Tu refugio perfecto, Punta Cana.
                </CajaHover>
              </CajaInterna>
            </WrapTextoImg>
          </Seccion>
          <Seccion className="parallax">
            <SeccionParralla>
              <CajaParallax></CajaParallax>
              <BarraParallax className="top">
                <TituloParallax>
                  El único estrés aquí es decidir entre playa o piscina.
                </TituloParallax>
              </BarraParallax>
              <BarraParallax className="bottom">
                <TituloParallax>
                  Ven por las vistas, quédate por la paz mental.
                </TituloParallax>
              </BarraParallax>
            </SeccionParralla>
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
        </ContainerSemi>
        <ContainerSemi2>
          <Seccion>
            <TituloSeccion className="coral">Noticias (Blog)</TituloSeccion>
            <WrapTextoImg>
              <CardBlog />
            </WrapTextoImg>
          </Seccion>
        </ContainerSemi2>
        <Seccion>
          <TituloSeccion>Envianos un mensaje</TituloSeccion>
          <FormContact />
        </Seccion>
      </Container2>
      <Footer />
    </>
  );
}

const Container2 = styled.div``;
const ContainerSemi = styled.div`
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
`;
const ContainerSemi2 = styled(ContainerSemi)`
  background-color: ${theme.primary.turquoise};
  padding: 80px ${theme.config.paddingLateral};
  margin-bottom: 50px;
`;

// ***** HERO ******
const ContainerHeader = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* margin-bottom: 80px; */
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
  background-color: ${theme.primary.neutral300};
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
  color: ${theme.primary.neutral600};
`;
const Subtitulo = styled.h2`
  color: ${theme.secondary.coral};
`;

// ***** RESTO CONTENIDO ******
const BarraPieHero = styled.div`
  margin-bottom: 120px;
  background-color: ${theme.primary.turquoiseTenue};
  width: 100%;
  height: 80px;
`;

const TituloPieHero = styled.h2`
  color: ${theme.primary.turquoise};
  width: 100%;
  height: 100%;
  text-align: center;
  align-content: center;
  font-size: 2.5rem;
  color: white;
`;
const CajaVideo = styled.div`
  /* border: 1px solid red; */
  min-height: 300px;
  display: flex;
  border-radius: 15px;
  background-color: white;
  overflow: hidden;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
`;
const CajaInternaVideo = styled.div`
  /* width: 50%; */
  min-height: 300px;
  padding: 20px 40px;
  &.izquierda {
    width: auto;
    /* border: 1px solid red; */
    align-items: center;
  }
  &.derecha {
    /* background-color: blue; */
    box-shadow: 0 2px 20px #0003;
    padding: 15px 25px;
    display: flex;
    justify-content: center;
    width: auto;
    align-items: center;
  }
`;
const CajaYouTube = styled.div`
  box-shadow: 0 2px 20px #0003;
  /* width: 80%; */
  /* border: 1px solid red; */
`;
const TituloH2Video = styled.h2`
  text-align: center;
  color: ${theme.primary.turquoise};
  color: black;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 15px;
`;
const ParrafoVideo = styled.p`
  color: ${theme.primary.neutral600};
  font-size: 18px;
  margin-bottom: 15px;
`;
const TituloSeccion = styled.h2`
  color: ${theme.primary.turquoiseTenue};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: normal;
  &.sinMarginBottom {
    margin-bottom: 0;
  }
  &.coral {
    color: ${theme.primary.sand};
    color: white;
  }
`;
const SubtituloSeccion = styled.h3`
  color: ${theme.primary.neutral600};
  font-size: 2rem;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;

const Seccion = styled.section`
  margin-bottom: 100px;
  &.parallax {
    height: 100vh;
    width: 100vw;
  }
  &.fondo {
    background-color: ${theme.primary.turquoise};
    width: 100vw;
  }
  &.video {
    /* background-color: red; */
  }
`;

const WrapSeccion = styled.div`
  /* background-color: blue; */
  /* width: 100vw; */
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  &.internal {
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.secondary.coral};
    padding-left: ${theme.config.paddingLateral};
    padding-right: ${theme.config.paddingLateral};
  }
`;
// Parallax
const SeccionParralla = styled(Seccion)`
  /* border: 2px solid red; */
  /* position: relative; */
  width: 100%;
  height: 100vh;
  left: 0;
  position: absolute;
`;
const BarraParallax = styled.div`
  height: 100px;
  width: 100vw;
  background-color: ${theme.secondary.coral};
  position: absolute;
  left: 0;
  &.top {
    top: 0;
  }
  &.bottom {
    bottom: 0;
  }
`;
const TituloParallax = styled.h2`
  color: ${theme.primary.turquoise};
  width: 100%;
  height: 100%;
  text-align: center;
  align-content: center;
  font-size: 3rem;
  color: white;
`;
const CajaParallax = styled.div`
  /* position: absolute; */
  height: 90vh;
  width: 100%;
  position: absolute;
  border: 1px solid red;
  left: 0;
  background-image: url(${ImgKidPool});
  /* Ajuste del fondo */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const EnlacePrincipal = styled(Link)`
  text-decoration: none;
  /* opacity: 0.5; */
  position: relative;

  &:hover {
    opacity: 1;
    animation: arroz 1s;
    animation-direction: normal;
  }

  @keyframes arroz {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;
