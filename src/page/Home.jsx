import React, { useEffect, useState } from "react";
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
import { fetchGetDocs, fetchGetDocsLimit } from "../libs/FetchFirebase";

export default function Home({ userMaster }) {
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

  const [propiedadesDB, setPropiedadesDB] = useState([]);
  useEffect(() => {
    (async () => {
      const listaProps = await fetchGetDocs("propiedades", []);
      console.log(listaProps);
      setPropiedadesDB(listaProps);
    })();
  }, []);

  const reviewStatic = [
    {
      puntuacion: 4,
      avatarUser: RostroHombre1,
      nacionalidad: {
        siglas: "US",
      },
      nombre: "Nolan Sandler",
      texto:
        "Este sitio me encanta, es la tarcera vez que voy y no sera la ultima.",
    },
    {
      puntuacion: 5,
      avatarUser: RostroMujer1,
      nacionalidad: {
        siglas: "CA",
      },
      nombre: "Mirian Smith",
      texto:
        "Me encanto el lugar, todo limpio, ordenado, buen ambiente y la ubicacion geografica es lo maravilloso del sitio.",
    },
    {
      puntuacion: 4,
      avatarUser: RostroMujer2,
      nacionalidad: {
        siglas: "GB",
      },
      nombre: "Mary Diaz",
      texto:
        "Mi esposo y mis hijos quedaron encantado con el lugar y la zona, siempre es un placer visitar Punta Cana.",
    },
  ];
  return (
    <>
      {/* <Header absolute={true} userMaster={userMaster} /> */}
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
                      Descubre la exclusividad de <b> Break Koi</b>, un refugio
                      de lujo en <b> Punta Cana </b>donde el confort y la
                      elegancia se fusionan con la belleza del Caribe. Cada una
                      de nuestras villas tiene su propio encanto y está diseñada
                      para brindarte privacidad, tranquilidad y experiencias
                      inolvidables. Relájate en una piscina privada, disfruta de
                      una cena con vista al mar o explora las paradisíacas
                      playas de arena blanca.
                    </ParrafoVideo>
                    <ParrafoVideo>
                      En <b> Break Koi</b>, nos encargamos de cada detalle para
                      que vivas una estancia sin preocupaciones. Nuestro equipo
                      ofrece un servicio personalizado que hará de tus
                      vacaciones una experiencia única. Más que un destino,
                      somos un estilo de vida donde la exclusividad y el
                      descanso se encuentran en perfecta armonía.
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
              3 villas lujosas, en zonas estrategicas de Punta Cana.
            </SubtituloSeccion>
            <WrapPropiedades>
              {propiedadesDB.length > 0 &&
                propiedadesDB.map((prop, index) => {
                  return (
                    <EnlacePrincipal to={"propiedades/" + prop.url} key={index}>
                      <CardPropiedades prop={prop} />
                    </EnlacePrincipal>
                  );
                })}
            </WrapPropiedades>
          </Seccion>
          <Seccion>
            <TituloSeccion>Sobre nosotros</TituloSeccion>

            <WrapTextoImg>
              <CajaInterna className="texto">
                <TituloLess>¿Quienes somos?</TituloLess>
                <br />
                <Parrafo>
                  En Break Koi, ofrecemos una colección exclusiva de villas en
                  Punta Cana, diseñadas para brindar lujo, seguridad y comodidad
                  en un entorno paradisíaco. Nos apasiona crear experiencias
                  únicas para nuestros huéspedes, con alojamientos elegantes y
                  servicios personalizados que garantizan una estadía
                  inolvidable. Nuestro compromiso es seguir creciendo y
                  adquiriendo nuevas propiedades para ofrecer siempre lo mejor
                  en hospitalidad.
                </Parrafo>
                <br />
                <Parrafo>
                  Más que un destino, Break Koi es un espacio donde la
                  exclusividad se combina con un trato cercano y amigable. Nos
                  enfocamos en la seguridad, el confort y la atención
                  personalizada, asegurando que cada huésped se sienta como en
                  casa. Nuestro objetivo es construir relaciones a largo plazo,
                  creando momentos memorables que hagan de cada visita una
                  experiencia para repetir.
                </Parrafo>
                <br />
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
                  En Break Koi, combinamos lujo, seguridad y hospitalidad para
                  ofrecerte una experiencia inigualable en Punta Cana. Nuestras
                  villas elegantes y exclusivas están diseñadas para brindarte
                  el máximo confort, con espacios cuidadosamente decorados y
                  amenidades de primera clase. Además, garantizamos privacidad y
                  tranquilidad en un entorno paradisíaco, ideal para quienes
                  buscan una escapada perfecta.
                </Parrafo>
                <br />
                <Parrafo>
                  Nos distinguimos por nuestro trato personalizado y atención
                  cercana a cada huésped. En Break Koi, no solo te ofrecemos un
                  lugar donde hospedarte, sino un servicio cálido y amigable que
                  hará que te sientas como en casa. Queremos construir
                  relaciones a largo plazo, asegurándonos de que cada visita sea
                  una experiencia única que siempre querrás repetir.
                </Parrafo>
                <br />
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
                <CajaRazon>
                  <TituloLess>Factor diferenciador</TituloLess>
                  <ListaRazon className="noListStyle">
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Exclusividad y lujo: </b> Villas elegantes que
                        ofrecen privacidad, confort y un ambiente único en Punta
                        Cana
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Servicio personalizado:</b> Atención adaptada a las
                        necesidades individuales de cada huésped, creando
                        estancias memorables.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Compromiso con la seguridad: </b> Entorno seguro y
                        confiable para que nuestros huéspedes se sientan
                        tranquilos y protegidos.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b> Sostenibilidad:</b> Prácticas responsables para
                        preservar el medio ambiente y mantener la belleza
                        natural de la zona.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Relaciones duraderas:</b> Buscamos crear lazos a
                        largo plazo con nuestros huéspedes, convirtiéndolos en
                        parte de nuestra familia.
                      </ElementosRazon>
                    </WrapElementList>
                  </ListaRazon>
                </CajaRazon>

                <br />
                <CajaRazon>
                  <TituloLess>Nuestros valores</TituloLess>
                  <ListaRazon className="noListStyle">
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Exclusividad: </b> Nos comprometemos a ofrecer villas
                        únicas, elegantes y de lujo, asegurando una experiencia
                        exclusiva para cada uno de nuestros huéspedes.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Seguridad:</b> Priorizamos la seguridad y
                        tranquilidad de nuestros clientes, brindando un ambiente
                        confiable y protegido en todo momento.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Hospitalidad: </b> Creemos en el poder de un trato
                        personalizado y cercano. Nos aseguramos de que cada
                        huésped se sienta bienvenido y atendido desde su
                        llegada.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b> Crecimiento:</b> Nos esforzamos por seguir creciendo
                        y ampliando nuestra oferta de villas, siempre con el
                        objetivo de ofrecer lo mejor a nuestros clientes.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Relaciones a largo plazo:</b> Valoramos la creación
                        de lazos duraderos con nuestros huéspedes, construyendo
                        una relación de confianza que vaya más allá de una
                        simple estadía.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b> Sostenibilidad: </b>Estamos comprometidos con el
                        respeto al medio ambiente, implementando prácticas
                        responsables y sostenibles en la gestión de nuestras
                        villas para preservar la belleza natural de Punta Cana.
                      </ElementosRazon>
                    </WrapElementList>
                  </ListaRazon>
                </CajaRazon>

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
              {reviewStatic.map((card, index) => {
                return <CardResennia key={index} review={card} />;
              })}
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
      {/* <Footer /> */}
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
  min-height: 300px;
  padding: 20px 40px;
  &.izquierda {
    width: auto;
    align-items: center;
  }
  &.derecha {
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
  line-height: 1.6rem;
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
const Parrafo = styled.p`
  line-height: 1.4rem;
  color: ${theme.primary.neutral650};
`;
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
    margin-bottom: 0;
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
    /* background-color: blue; */
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
  color: auto;
  &:visited {
    color: black;
    color: white;
  }

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

const CajaRazon = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;
const CajaEncabezado = styled.div`
  width: 100%;
  min-height: 60px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: start;
  padding: 5px;
  padding-left: 10px;
  align-items: center;
  border-left: 4px solid ${theme.secondary.coral};
`;
const TituloRazon = styled.h2`
  color: ${theme.primary.turquoise};
`;
const ListaRazon = styled.ul`
  /* color: ${theme.primary.turquoise}; */
  padding: 15px;
  padding-left: 35px;
  &.noListStyle {
    list-style: none;
  }
`;
const WrapElementList = styled.div`
  display: flex;
`;
const ListStyle = styled.h2`
  /* background-color: red; */
  font-size: 1.2rem;
  /* height: 100%; */
`;
const ElementosRazon = styled.li`
  margin-bottom: 8px;
  color: ${theme.primary.neutral600};
`;
