import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import ImgCena from "./../../../public/icon/cena.png";
import ImgComidaRapida from "./../../../public/icon/comidaRapida.png";
import ImgMall from "./../../../public/icon/mall.png";
import ImgRecreativo from "./../../../public/icon/tumbona2.png";
import ImgHospital from "./../../../public/icon/hospital.png";
import ImgLittleCaesars from "./../../../public/marcas/littleCaesars.png";
import ImgMcDonald from "./../../../public/marcas/mcDonald.jpg";
import ImgBurgerKing from "./../../../public/marcas/burgerKing.png";
import ImgDominosPizza from "./../../../public/marcas/dominosPizza.png";
import ImgCamarero from "./../../../public/marcas/camarero.png";
import ImgSBG from "./../../../public/marcas/sbgPuntaCana.jpg";
import ImgOnno from "./../../../public/marcas/onnoBar.jpg";
import ImgAgoraMall from "./../../../public/marcas/agoraMall.jpg";
import ImgBlueMall from "./../../../public/marcas/blueMall.jpg";
import ImgSmartFit from "./../../../public/marcas/smartFit.jpg";
import ImgPlaya from "./../../../public/marcas/playa.jpg";
import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";
import { TipoLugaresCercanos } from "../../libs/Corporativo";

export default function LugaresCercanos({ lugares }) {
  const [hasModal, setHasModal] = useState(false);
  const [locationLink, setLocationLink] = useState("");
  const colocarMapa = (link) => {
    setLocationLink(link);
    setHasModal(true);
  };

  const [lugaresCercanos, setLugaresCercanos] = useState([]);
  useEffect(() => {
    const lugaresParsed = lugares.map((lugar, index) => {
      const lugarUp = TipoLugaresCercanos.find(
        (place) => place.code == lugar.code
      );

      return {
        ...lugar,
        icono: lugarUp.icono,
      };
    });
    setLugaresCercanos([...lugaresParsed]);
  }, [lugares]);
  return (
    <Container>
      {lugaresCercanos.map((lugar, index) => {
        return (
          <WrapPlace key={index}>
            <CajaTitulo>
              <Img className="titulo" src={lugar.icono} />

              <Titulo>{lugar.nombre}</Titulo>
            </CajaTitulo>
            {lugar.lugares.map((place, i) => {
              return (
                <Card key={i}>
                  <LogoImg>
                    <Img className="marca" src={place.logo} />
                    <NombreLugar>{place.nombre}</NombreLugar>
                  </LogoImg>
                  <TextoUbicacion>
                    <ParrafoDistancia>{place.distancia}</ParrafoDistancia>
                    <BtnSimple onClick={() => colocarMapa(place.comoLlegar)}>
                      Ver mapa
                    </BtnSimple>
                  </TextoUbicacion>
                </Card>
              );
            })}
          </WrapPlace>
        );
      })}
      {/* {lugares.restaurantes.length > 0 && (
        <WrapPlace>
          <CajaTitulo>
            <Img className="titulo" src={ImgCena} />
            <Titulo>Restaurantes</Titulo>
          </CajaTitulo>
          {lugares.restaurantes.map((lugar, i) => {
            return (
              <Card key={i}>
                <LogoImg>
                  <Img className="marca" src={lugar.logo} />
                  <NombreLugar>{lugar.nombre}</NombreLugar>
                </LogoImg>
                <TextoUbicacion>
                  <ParrafoDistancia>{lugar.distancia}</ParrafoDistancia>
                  <BtnSimple onClick={() => colocarMapa(lugar.comoLlegar)}>
                    Ver mapa
                  </BtnSimple>
                </TextoUbicacion>
              </Card>
            );
          })}
        </WrapPlace>
      )}
      {lugares.comidaRapida.length > 0 && (
        <WrapPlace>
          <CajaTitulo>
            <Img className="titulo" src={ImgComidaRapida} />
            <Titulo>Comida Rapida</Titulo>
          </CajaTitulo>
          {lugares.comidaRapida.map((lugar, i) => {
            return (
              <Card key={i}>
                <LogoImg>
                  <Img className="marca" src={lugar.logo} />
                  <NombreLugar>{lugar.nombre}</NombreLugar>
                </LogoImg>
                <TextoUbicacion>
                  <ParrafoDistancia>{lugar.distancia}</ParrafoDistancia>
                  <BtnSimple onClick={() => colocarMapa(lugar.comoLlegar)}>
                    Ver mapa
                  </BtnSimple>
                </TextoUbicacion>
              </Card>
            );
          })}
        </WrapPlace>
      )}
      {lugares.centroComerciales.length > 0 && (
        <WrapPlace>
          <CajaTitulo>
            <Img className="titulo" src={ImgMall} />
            <Titulo>Mall</Titulo>
          </CajaTitulo>
          {lugares.centroComerciales.map((lugar, i) => {
            return (
              <Card key={i}>
                <LogoImg>
                  <Img className="marca" src={lugar.logo} />
                  <NombreLugar>{lugar.nombre}</NombreLugar>
                </LogoImg>
                <TextoUbicacion>
                  <ParrafoDistancia>{lugar.distancia}</ParrafoDistancia>
                  <BtnSimple onClick={() => colocarMapa(lugar.comoLlegar)}>
                    Ver mapa
                  </BtnSimple>
                </TextoUbicacion>
              </Card>
            );
          })}
        </WrapPlace>
      )}
      {lugares.recreativo.length > 0 && (
        <WrapPlace>
          <CajaTitulo>
            <Img className="titulo" src={ImgRecreativo} />
            <Titulo>Recreativo</Titulo>
          </CajaTitulo>
          {lugares.recreativo.map((lugar, i) => {
            return (
              <Card key={i}>
                <LogoImg>
                  <Img className="marca" src={lugar.logo} />
                  <NombreLugar>{lugar.nombre}</NombreLugar>
                </LogoImg>
                <TextoUbicacion>
                  <ParrafoDistancia>{lugar.distancia}</ParrafoDistancia>
                  <BtnSimple onClick={() => colocarMapa(lugar.comoLlegar)}>
                    Ver mapa
                  </BtnSimple>
                </TextoUbicacion>
              </Card>
            );
          })}
        </WrapPlace>
      )}
      {lugares.generales.length > 0 && (
        <WrapPlace>
          <CajaTitulo>
            <Img className="titulo" src={ImgHospital} />
            <Titulo>General</Titulo>
          </CajaTitulo>
          {lugares.generales.map((lugar, i) => {
            return (
              <Card key={i}>
                <LogoImg>
                  <Img className="marca" src={lugar.logo} />
                  <NombreLugar>{lugar.nombre}</NombreLugar>
                </LogoImg>
                <TextoUbicacion>
                  <ParrafoDistancia>{lugar.distancia}</ParrafoDistancia>
                  <BtnSimple onClick={() => colocarMapa(lugar.comoLlegar)}>
                    Ver mapa
                  </BtnSimple>
                </TextoUbicacion>
              </Card>
            );
          })}
        </WrapPlace>
      )} */}

      {hasModal && (
        <Modal titulo={"Como llegar"} setHasModal={setHasModal}>
          <MapaGoogle src={locationLink}></MapaGoogle>
        </Modal>
      )}
    </Container>
  );
}
const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  min-height: 200px;
  padding: 10px 25px;
`;
const WrapPlace = styled.div`
  /* margin-bottom: 10px; */
  margin-bottom: 30px;
  border-bottom: 1px solid ${theme.primary.neutral500};
`;
const CajaTitulo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Titulo = styled.h2`
  color: ${theme.primary.turquoise};
  text-decoration: underline;
`;
const Card = styled.div`
  display: flex;
  margin-left: 45px;
  gap: 15px;
  border: 1px solid ${theme.primary.neutral200};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  min-height: 40px;
`;
const LogoImg = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const TextoUbicacion = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  &.titulo {
    width: 40px;
    /* border: 1px solid red; */
  }
  &.marca {
    width: 45px;
  }
`;
const NombreLugar = styled.h2`
  font-weight: 400;
`;
const ParrafoDistancia = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  padding-right: 15px;
`;
const BtnSimple = styled(BtnGeneral)``;
const MapaGoogle = styled.iframe`
  width: 100%;
  height: 100%;
  border: 5px solid ${theme.secondary.coral};
`;
