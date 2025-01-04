import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import ImgWork from "./../../../public/icon/trabajo.png";
import ImgReloj from "./../../../public/icon/reloj.png";
import ImgReloj2 from "./../../../public/icon/historia.png";
import ImgIdioma from "./../../../public/icon/idioma.png";
import ImgCuba from "./../../../public/icon/cuba.png";
import ImgUbicacion from "./../../../public/icon/ubicacion.png";
import ImgColegio from "./../../../public/icon/colegio.png";
import ImgCorazon from "./../../../public/icon/corazon.png";

export default function CajaAnfritrion() {
  return (
    <Container>
      <WrapPerfil>
        <CajaFoto>
          <Img src="https://a0.muscache.com/im/pictures/user/a177079f-9e70-4575-b089-b39a82ea87a2.jpg?im_w=240&im_format=avif" />
        </CajaFoto>
        <CajaNombre>
          <Nombre>Kostia Kindelan</Nombre>
        </CajaNombre>
        <CajaPresentacion>
          <ParrafoPresentacion>
            ¡Hola y bienvenido! Estoy encantado de ser tu anfitrión durante tu
            estancia aquí. Me llamo Kostia y es un placer asegurarme de que tu
            tiempo con nosotros sea nada menos que excepcional.
          </ParrafoPresentacion>
        </CajaPresentacion>
      </WrapPerfil>
      <ContenedorAcerca>
        <TituloAcerca>Sobre Kostia</TituloAcerca>
        <CajaDetalles>
          <CajaInterna className="izq">
            <Lista>
              <Item>
                <CajaTituloItem>
                  <Icono src={ImgWork} />
                  <TituloItem className="titulo">Profesion:</TituloItem>
                </CajaTituloItem>
                <TituloItem>Empresario</TituloItem>
              </Item>
              <Item>
                <CajaTituloItem>
                  <Icono src={ImgReloj} />
                  <TituloItem className="titulo">Edad:</TituloItem>
                </CajaTituloItem>
                <TituloItem>+45 años</TituloItem>
              </Item>
              <Item>
                <CajaTituloItem>
                  <Icono src={ImgReloj2} />
                  <TituloItem className="titulo">Pasa tiempo:</TituloItem>
                </CajaTituloItem>
                <TituloItem>Superacion</TituloItem>
              </Item>
              <Item>
                <CajaTituloItem>
                  <Icono src={ImgIdioma} />
                  <TituloItem className="titulo">Idiomas:</TituloItem>
                </CajaTituloItem>
                <TituloItem>Español,Ingles,Frances.</TituloItem>
              </Item>
            </Lista>
          </CajaInterna>
          <CajaInterna className="der">
            <Item>
              <CajaTituloItem>
                <Icono src={ImgCuba} />
                <TituloItem className="titulo">Nacionalidad:</TituloItem>
              </CajaTituloItem>
              <TituloItem>Cubano</TituloItem>
            </Item>
            <Item>
              <CajaTituloItem>
                <Icono src={ImgUbicacion} />
                <TituloItem className="titulo">Recidencia:</TituloItem>
              </CajaTituloItem>
              <TituloItem>Punta Cana</TituloItem>
            </Item>
            <Item>
              <CajaTituloItem>
                <Icono src={ImgColegio} />
                <TituloItem className="titulo">Estudio en:</TituloItem>
              </CajaTituloItem>
              <TituloItem>Cuba</TituloItem>
            </Item>
            <Item className="column">
              <CajaTituloItem className="column">
                <Icono src={ImgCorazon} />
                <TituloItem className="titulo">Filosofia de vida:</TituloItem>
              </CajaTituloItem>
              <TituloItem className="detalle">
                Valoro la honestidad y la transparencia es base en mis
                relaciones personales y profesionales.
              </TituloItem>
            </Item>
          </CajaInterna>
        </CajaDetalles>
      </ContenedorAcerca>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: auto;
  min-height: 100px;
  /* background-color: red; */
  background-color: ${theme.primary.sand};
  border-radius: 10px;
  box-shadow: ${theme.config.sombra};
  padding: 15px;
`;
const WrapPerfil = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;
const CajaFoto = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 5px solid ${theme.primary.turquoise};
  box-shadow: ${theme.config.sombra};
`;
const CajaNombre = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const Nombre = styled.h2`
  width: 100%;
  text-align: center;
  /* background-color: blue; */
  color: ${theme.primary.neutral600};
  font-weight: 400;
  /* border-bottom: 1px solid; */
  text-decoration: underline;
`;
const CajaPresentacion = styled.div`
  display: flex;
  justify-content: center;
`;
const ParrafoPresentacion = styled.p`
  text-align: center;
  width: 40%;
  font-size: 1.2rem;
  color: ${theme.primary.neutral600};
`;
const ContenedorAcerca = styled.div`
  width: 100%;
  min-height: 100px;
  /* background-color: red; */
  /* padding: 15px; */
`;
const TituloAcerca = styled.h2`
  width: 100%;
  text-align: start;
  /* padding-left: ; */
  font-size: 1.8rem;
  color: ${theme.primary.turquoise};
  border-bottom: 4px solid;
  margin-bottom: 15px;
`;
const CajaDetalles = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const CajaInterna = styled.div`
  /* width: calc(100% / 2-20px); */
  width: 48%;
  /* border: 1px solid red; */
  padding: 10px 15px;
  box-shadow: ${theme.config.sombra};
  border-radius: 10px;
  &.izq {
  }
  &.der {
  }
`;
const Lista = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  border-bottom: 1px solid ${theme.primary.neutral600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.column {
    flex-direction: column;
  }
`;
const CajaTituloItem = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  &.column {
    width: 100%;
    align-items: center;
    justify-content: start;
    /* background-color: red; */
  }
`;
const Icono = styled.img`
  width: 40px;
  margin-right: 15px;
  margin-bottom: 4px;
  margin-top: 4px;
`;
const TituloItem = styled.p`
  font-size: 1.1rem;
  color: ${theme.primary.neutral600};
  font-weight: 400;
  &.detalle {
    font-size: 0.9rem;
    /* font-size: ; */
    /* font-weight: 700; */
  }
`;
