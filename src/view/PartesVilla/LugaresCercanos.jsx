import React, { useState } from "react";
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

export default function LugaresCercanos() {
  const lugares = [
    {
      tipo: "Restaurantes",
      iconoTipo: ImgCena,
      lugares: [
        {
          logo: ImgCamarero,
          nombre: "Restaurante Pepito",
          distancia: " a 2 mnts",
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          logo: ImgSBG,
          nombre: "SBG Punta Cana",
          distancia: " a 2 mnts",
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d11530.664419189146!2d-68.40182356246443!3d18.596143589786134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8936722519baf%3A0x2b5c99592a85006d!2sHospital%20Municipal%20Veron%2C%20Punta%20Cana!3m2!1d18.5967772!2d-68.4007159!5e0!3m2!1ses-419!2sdo!4v1735995416799!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          logo: ImgOnno,
          nombre: "Onno Bar",
          distancia: " a 4 mnts",
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12272.900604143937!2d-68.40166983564056!3d18.596078723010525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea893af419d0f67%3A0xeda11cb339dcd449!2sCaribbean%20Village%20Punta%20Cana%2FBavaro!3m2!1d18.6008079!2d-68.40369679999999!5e0!3m2!1ses-419!2sdo!4v1735995497597!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
      ],
    },
    {
      tipo: "Comida rapida",
      iconoTipo: ImgComidaRapida,
      lugares: [
        {
          logo: ImgLittleCaesars,
          nombre: "Little Caesars",
          distancia: " a 2 mnts",
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d9398.392045813274!2d-68.3997188001044!3d18.60341986599518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8930014e28515%3A0xeaa74c1a95a09fda!2sCaldos%20y%20Guisos%20Boulevard!3m2!1d18.6104766!2d-68.4039655!5e0!3m2!1ses-419!2sdo!4v1735995586939!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          logo: ImgMcDonald,
          nombre: "Mc Donald",
          distancia: " a 4 mnts",
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d96664.30886968842!2d-68.47322406193783!3d18.583858323435646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea893fd4d37ec9d%3A0xbeff6db740e33f40!2sPizza%20Hut%20Pueblo%20Bavaro%2C%20Calle%20Principal%2C%20Punta%20Cana!3m2!1d18.607688!2d-68.411688!5e0!3m2!1ses-419!2sdo!4v1735995648559!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          logo: ImgBurgerKing,
          nombre: "Burger King",
          distancia: " a 6 mnts",
        },
        {
          logo: ImgDominosPizza,
          nombre: "Dominos Pizza",
          distancia: " a 3 mnts",
        },
      ],
    },
    {
      tipo: "Centros Comerciales",
      iconoTipo: ImgMall,
      lugares: [
        {
          logo: ImgAgoraMall,
          nombre: "Agora Mall",
          distancia: " a 4 mnts",
        },
        {
          logo: ImgBlueMall,
          nombre: "Blue Mall",
          distancia: " a 5 mnts",
        },
      ],
    },
    {
      tipo: "Recreativo",
      iconoTipo: ImgRecreativo,
      lugares: [
        { logo: ImgPlaya, nombre: "Playa Macao", distancia: " a 7 mnts" },
      ],
    },
    {
      tipo: "Generales",
      iconoTipo: ImgHospital,
      lugares: [
        {
          logo: ImgSmartFit,
          nombre: "Smart Fit",
          distancia: "a 4 mnts",
        },
      ],
    },
  ];
  const [hasModal, setHasModal] = useState(false);
  const [locationLink, setLocationLink] = useState("");
  const colocarMapa = (link) => {
    setLocationLink(link);
    setHasModal(true);
  };
  return (
    <Container>
      {lugares.map((tipo, index) => {
        return (
          <WrapPlace key={index}>
            <CajaTitulo>
              <Img className="titulo" src={tipo.iconoTipo} />
              <Titulo>{tipo.tipo}</Titulo>
            </CajaTitulo>
            {tipo.lugares.map((lugar, i) => {
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
        );
      })}
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
