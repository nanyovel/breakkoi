import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import ImgLogo from "./../../public/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <ContenedorFooter>
      <CajaInterna className="start">
        <CajitaInterna className="start">
          <CajaTituloLogo>
            <Img src={ImgLogo} />
            <TituloLogo>
              Break
              <Span>Koi</Span>
            </TituloLogo>
          </CajaTituloLogo>
          <Subtitulo>Punta Cana te espera...</Subtitulo>
          <CajaRRSS>
            <Icono icon={faYoutube} />
            <Icono icon={faInstagram} />
            <Icono icon={faLinkedin} />
            <Icono icon={faFacebook} />
          </CajaRRSS>
        </CajitaInterna>
      </CajaInterna>
      <CajaInterna className="center">
        <CajitaInterna className="center">
          <TituloUbicaciones>Home</TituloUbicaciones>
          <TituloUbicaciones>Propiedades</TituloUbicaciones>
          <TituloUbicaciones>Blog</TituloUbicaciones>
          <TituloUbicaciones>Sobre nosotros</TituloUbicaciones>
          <TituloUbicaciones>Contactos</TituloUbicaciones>
        </CajitaInterna>
      </CajaInterna>
      <CajaInterna>
        <MapaGoogle src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88123.52356083777!2d-68.44282069518056!3d18.679237839687854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea891645dcbfe77%3A0x61881cfaed12f6f3!2s23000%20Punta%20Cana!5e0!3m2!1ses-419!2sdo!4v1733595663469!5m2!1ses-419!2sdo"></MapaGoogle>
      </CajaInterna>
    </ContenedorFooter>
  );
}
const ContenedorFooter = styled.footer`
  height: 500px;
  background-color: ${theme.primary.neutral600};
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CajaInterna = styled.div`
  /* border: 1px solid red; */
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-left: 1px solid ${theme.primary.neutral300}; */
  box-shadow: 11px -1px -1px 5px #eeeeee5c;
  -webkit-box-shadow: -4px 0px 10px -3px #eeeeee5c;
  -moz-box-shadow: -4px 0px 10px -3px #eeeeee5c;
  box-shadow: -4px 0px 10px -3px #eeeeee5c;
`;
const CajitaInterna = styled.div`
  width: 80%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  &.start {
    min-height: 40px;
    align-items: center;
  }

  &.center {
    /* border: 1px solid red; */
    gap: 15px;
    height: 80%;
    padding: 5px;
  }
`;

// ****** CAJA START ******
const CajaTituloLogo = styled.div`
  display: flex;
  /* min-height: 400px; */
  /* border: 2px solid blue; */
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const Img = styled.img`
  width: 60px;
  margin-right: 10px;
  cursor: pointer;
`;
const TituloLogo = styled.div`
  font-size: 3rem;
  color: ${theme.primary.turquoise};
  padding: 0;
  font-weight: lighter;
`;
const Span = styled.span`
  color: ${theme.primary.neutral300};
`;

const Subtitulo = styled.h2`
  color: ${theme.secondary.coral};
  margin-bottom: 20px;
`;
const CajaRRSS = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  height: 60px;
  padding: 4px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;

  color: ${theme.primary.turquoise};
  cursor: pointer;
  border: 2px solid;
  padding: 5px;
  border-radius: 4px;
  transition: ease 0.4s;
  &:hover {
    background-color: ${theme.primary.neutral300};
    color: ${theme.primary.neutral600};
  }
`;

// ****** CAJA CENTER ******
const TituloUbicaciones = styled.h2`
  color: ${theme.primary.neutral300};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const MapaGoogle = styled.iframe`
  width: 95%;
  display: block;
  margin: auto;
  height: 500px;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.43);
`;
