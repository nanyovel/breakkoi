import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import CajaCalendario from "../../components/CajaCalendario";
import ImgStar from "./../../../public/img/estrella.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DescripcionVilla({ hacerScroll }) {
  // const [position, setPosition] = useState("static"); // 'absolute' o 'fixed'
  const [position, setPosition] = useState("absolute"); // 'absolute' o 'fixed'
  // const [top, setTop] = useState("100px"); // Valor de la posición superior
  const [top, setTop] = useState("600px"); // Valor de la posición superior

  // Para fijar calendario y demas en forma de header
  const [hasHeaderCal, setHasHeaderCal] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerStart = 639; // Scroll donde la caja se fija
      const triggerEnd = 3000; // Scroll donde la caja vuelve a moverse
      // console.log(scrollTop);
      if (scrollTop > triggerStart) {
        if (scrollTop > triggerStart && scrollTop < triggerEnd) {
          setPosition("fixed");
          setTop("20px");
          setHasHeaderCal(false);
        } else if (scrollTop >= triggerEnd) {
          setPosition("absolute");
          setHasHeaderCal(true);
          // setTop(`${triggerEnd}px`);
        } else {
          setPosition("absolute");
          setTop("100px");
          setHasHeaderCal(false);
        }
      } else {
        setPosition("absolute");
        setTop("600px");
        setHasHeaderCal(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ContainerCalDetail>
      <CajaDetail>
        <CajaResumenValoraciones>
          <ContenedorIntValor>
            <Texto5Star>5.0</Texto5Star>
            <CajaEstrellas>
              <ImgEstrella className="star" src={ImgStar} />
              <ImgEstrella className="star" src={ImgStar} />
              <ImgEstrella className="star" src={ImgStar} />
              <ImgEstrella className="star" src={ImgStar} />
              <ImgEstrella className="star" src={ImgStar} />
            </CajaEstrellas>
          </ContenedorIntValor>

          <ContenedorIntValor>
            <CajitaFlex>
              <Icono icon={faComment} />
              <Texto5Star>12</Texto5Star>
            </CajitaFlex>
            <Texto5Star className="review">Reseñas</Texto5Star>
          </ContenedorIntValor>
          <ContenedorIntValor>
            <CajaAnfitrion title="Anfitrion: Kostia Kindelan">
              <ImgAvatar src="https://a0.muscache.com/im/pictures/user/a177079f-9e70-4575-b089-b39a82ea87a2.jpg?im_w=240&im_format=avif" />
              <NombreAnfitrion>Kostia Kindelan</NombreAnfitrion>
            </CajaAnfitrion>
          </ContenedorIntValor>
        </CajaResumenValoraciones>
      </CajaDetail>
      <CajaBox>
        <CajaCalendario position={position} top={top} />
      </CajaBox>
      {hasHeaderCal && (
        <CajaCalHeader>
          <BoxCalendario>
            <TituloCal>Calendario</TituloCal>
          </BoxCalendario>
          <CajaNav>
            <ListaNav>
              <Opciones data-name="galeria" onClick={(e) => hacerScroll(e)}>
                Fotos
              </Opciones>
              <Opciones
                data-name="lugaresCercanos"
                onClick={(e) => hacerScroll(e)}
              >
                Lugares cercanos
              </Opciones>
              <Opciones data-name="amenidades" onClick={(e) => hacerScroll(e)}>
                Amenidades
              </Opciones>
              <Opciones data-name="resennias" onClick={(e) => hacerScroll(e)}>
                Reseñas
              </Opciones>
            </ListaNav>
          </CajaNav>
        </CajaCalHeader>
      )}
    </ContainerCalDetail>
  );
}

const ContainerCalDetail = styled.div`
  display: flex;
`;
const CajaDetail = styled.div`
  width: 70%;
`;
const CajaBox = styled.div`
  display: flex;
  justify-content: end;
  width: 400px;
`;
const CajaResumenValoraciones = styled.div`
  width: 100%;
  border: 1px solid ${theme.primary.neutral600};
  border-radius: 5px;
  min-height: 50px;
  display: flex;
  justify-content: center;
`;
const ContenedorIntValor = styled.div`
  padding: 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
  width: calc(100% / 4);
  justify-content: center;
  align-items: center;
  &.sinPadding {
    padding: 0;
  }
`;
const CajaEstrellas = styled.div`
  display: inline;
  width: auto;
`;
const Texto5Star = styled.h3`
  font-size: 1.6rem;
  &.review {
    text-decoration: underline;
    font-size: 0.9rem;
    font-weight: 400;
    cursor: pointer;
  }
`;
const ImgEstrella = styled.img`
  width: 25px;
`;
const Icono = styled(FontAwesomeIcon)``;
const CajitaFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CajaAnfitrion = styled.div``;
const ImgAvatar = styled.img`
  border-radius: 50%;
  width: 60px;
  aspect-ratio: 1/1;
`;
const NombreAnfitrion = styled.p``;
const CajaCalHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: red; */
  background-color: ${theme.primary.turquoise};
  width: 100%;
  min-height: 50px;
  height: 50px;
  display: flex;
  padding: 1px;
  justify-content: space-around;
`;
const CajaNav = styled.div`
  /* background-color: green; */
`;
const ListaNav = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
  height: 100%;
  align-items: center;
  padding: 10px;
  color: ${theme.primary.turquoise};
  color: white;
  font-weight: 400;
`;
const Opciones = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const BoxCalendario = styled.div`
  width: 400px;
  height: 100%;
  background-color: ${theme.primary.sand};
  background-color: ${theme.secondary.sandDark};
  padding: 1px;
`;
const TituloCal = styled.h2`
  color: white;
  width: 100%;
  text-align: center;
  align-content: center;
  height: 100%;
`;
