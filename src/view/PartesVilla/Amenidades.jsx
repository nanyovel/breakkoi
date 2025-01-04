import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import {
  IconoAireAcon,
  IconoBalcon,
  IconoBBQ,
  IconoBlackOut,
  IconoBotiquin,
  IconoCafetera,
  IconoCalendario,
  IconoCama,
  IconoCarro,
  IconoCCTV,
  IconoCloset,
  IconoCobija,
  IconoCocina,
  IconoCuchara,
  IconoCupHot,
  IconoCupWine,
  IconoDesk,
  IconoDoorClose,
  IconoDucha,
  IconoEsq,
  IconoEstufa,
  IconoExtintor,
  IconoFlower,
  IconoGel,
  IconoGrid,
  IconoHorno,
  IconoHumo,
  IconoHumo2,
  IconoJabon,
  IconoJacucci,
  IconoKey,
  IconoLicuadora,
  IconoLlaves,
  IconoMaletas,
  IconoMicroWave,
  IconoNevera,
  IconoOlla,
  IconoPercha,
  IconoPiscina,
  IconoPlancha,
  IconoProductClean,
  IconoSecadora,
  IconoSecadoraPelo,
  IconoShampoo,
  IconoSinEscalera,
  IconoSnow,
  IconoSonido,
  IconoSpray,
  IconoTaza,
  IconoTelevision,
  IconoToilet,
  IconoWashMachine,
  IconoWifi,
} from "../../components/ConjuntoIconos";
import ImgPeriquera from "./../../../public/icon/periquera.png";
import ImgTostadora from "./../../../public/icon/tostadora.png";
import ImgArrocera from "./../../../public/icon/arrocera.png";
import ImgComedor from "./../../../public/icon/comedor.png";
import ImgLavanderia from "./../../../public/icon/lavanderia.png";
import ImgTumbona from "./../../../public/icon/tumbona.png";
import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";

export default function Amenidades() {
  const anchoIconos = "2rem";
  const amenidadesDB = [
    {
      categoria: "Baño",
      icono: IconoSecadoraPelo,
      texto: "Secadora de pelo",
    },
    {
      categoria: "Baño",
      icono: IconoProductClean,
      texto: "Productos de limpieza",
    },
    {
      categoria: "Baño",
      icono: IconoShampoo,
      texto: "Shampoo",
    },
    {
      categoria: "Baño",
      icono: IconoShampoo,
      texto: "Acondicionador",
    },
    {
      categoria: "Baño",
      icono: IconoJabon,
      texto: "Jabón corporal",
    },
    {
      categoria: "Baño",
      icono: IconoToilet,
      texto: "Bidé",
    },

    {
      categoria: "Baño",
      icono: IconoDucha,
      texto: "Regadera exterior",
    },
    {
      categoria: "Baño",
      icono: IconoJacucci,
      texto: "Agua caliente",
    },
    {
      categoria: "Baño",
      icono: IconoGel,
      texto: "Gel para baño",
    },
    // -----hab
    {
      categoria: "Habitacion y lavanderia",
      icono: IconoWashMachine,
      texto: "Lavadora De pago",
    },
    {
      categoria: "Habitacion y lavanderia",
      icono: IconoPercha,
      texto: "Ganchos",
    },
    {
      categoria: "Habitacion y lavanderia",
      icono: IconoSecadora,
      texto: "Secadora",
    },
    {
      categoria: "Habitacion y lavanderia",
      icono: IconoCama,
      texto: "Ropa de cama",
    },
    {
      categoria: "Habitacion y lavanderia",
      icono: IconoCobija,
      texto: "Almohadas y cobijas adicionales",
    },
    {
      categoria: "Habitacion y lavanderia",
      icono: IconoBlackOut,
      texto: "Persianas o cortinas opacas",
    },
    {
      categoria: "Habitacion y lavanderia",
      icono: IconoPlancha,
      texto: "Plancha",
    },
    {
      categoria: "Habitacion y lavanderia",
      icono: IconoPercha,
      texto: "Tendedero para ropa",
    },
    {
      categoria: "Habitacion y lavanderia",
      icono: IconoCloset,
      texto: "Espacio para guardar ropa",
    },
    // Entretenimiento
    {
      categoria: "Entretenimiento",
      icono: IconoTelevision,
      texto:
        'Televisión HD con pantalla de 175" y Netflix, Video de Amazon Prime, Apple TV, Disney+, Hulu',
    },
    {
      categoria: "Entretenimiento",
      icono: IconoSonido,
      texto: "Sistema de sonido",
    },
    // Para la familia
    {
      categoria: "Para la familia",
      iconoImg: true,
      icono: ImgPeriquera,
      texto: "Periquera",
    },
    {
      categoria: "Para la familia",
      icono: IconoCuchara,
      texto: "Platos y cubiertos para niños",
    },
    {
      categoria: "Para la familia",
      icono: IconoGrid,
      texto: "Seguros para ventanas",
    },
    {
      categoria: "Para la familia",
      icono: IconoEsq,
      texto: "Protectores para esquinas de mesa",
    },
    // calefaccion y refrigeracion
    {
      categoria: "Climatizacion",
      icono: IconoSnow,
      texto: "Sistema de aire acondicionado sin conductos tipo split",
    },
    // Seguridad
    {
      categoria: "Seguridad",
      icono: IconoCCTV,
      texto: "Cámaras de seguridad exteriores en la propiedad",
    },
    {
      categoria: "Seguridad",
      icono: IconoHumo,
      texto: "Detector de humo",
    },
    {
      categoria: "Seguridad",
      icono: IconoHumo2,
      texto: "Detector de monóxido de carbono",
    },
    {
      categoria: "Seguridad",
      icono: IconoExtintor,
      texto: "Extintor de incendios",
    },
    {
      categoria: "Seguridad",
      icono: IconoBotiquin,
      texto: "Botiquín",
    },
    // Internet y oficina
    {
      categoria: "Internet y oficina",
      icono: IconoWifi,
      texto: "Wifi",
    },
    {
      categoria: "Internet y oficina",
      icono: IconoDesk,
      texto: "Area para trabajar",
    },
    // Cocina y comedor
    {
      categoria: "Cocina y comedor",
      icono: IconoCocina,
      texto: "Cocina",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoNevera,
      texto: "Refrigerador",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoMicroWave,
      texto: "Microondas",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoCocina,
      texto: "Artículos básicos de cocina",
      subTitulo: "Ollas y sartenes, aceite, sal y pimienta",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoOlla,
      texto: "Platos y cubiertos",
      subTitulo: "Platos hondos, palillos chinos, platos, tazas, etc.",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoNevera,
      texto: "Mini refrigerador",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoNevera,
      texto: "Congelador",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoEstufa,
      texto: "Estufa",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoHorno,
      texto: "Horno",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoCupHot,
      texto: "Jarra eléctrica para el agua caliente",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoCafetera,
      texto: "Cafetera",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoCupWine,
      texto: "Copas de vino",
    },
    {
      categoria: "Cocina y comedor",
      icono: ImgTostadora,
      iconoImg: true,
      texto: "Tostadora",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoLicuadora,
      texto: "Licuadora",
    },
    {
      categoria: "Cocina y comedor",

      iconoImg: true,
      icono: ImgArrocera,
      texto: "Arrocera",
    },
    {
      categoria: "Cocina y comedor",
      icono: ImgComedor,
      iconoImg: true,
      texto: "Mesa de comedor",
    },
    {
      categoria: "Cocina y comedor",
      icono: IconoTaza,
      texto: "Café",
    },
    // Info sobre ubicacion
    {
      categoria: "Sobre ubicacion",
      icono: IconoDoorClose,
      texto: "Entrada privada",
      subTitulo: "Entrada por otra calle o edificio",
    },
    {
      categoria: "Sobre ubicacion",
      icono: ImgLavanderia,
      iconoImg: true,
      texto: "Lavandería cercana",
    },
    // Exterior
    {
      categoria: "Exterior",
      icono: IconoBalcon,
      texto: "Terraza o balcón",
    },

    {
      categoria: "Exterior",
      icono: IconoFlower,
      texto: "Jardín privado, Con valla en todo el perímetro",
      subTitulo:
        "Un espacio abierto en la propiedad generalmente cubierto de pasto",
    },
    {
      categoria: "Exterior",
      icono: IconoBBQ,
      texto: "Asador",
    },
    {
      categoria: "Exterior",
      icono: ImgTumbona,
      iconoImg: true,
      texto: "Camastros",
    },
    // Estacionamiento e instalaciones
    {
      categoria: "Estacionamiento e instalaciones",
      icono: IconoCarro,
      texto:
        "Estacionamiento techado gratuito en las instalaciones: 2 espacios",
    },
    {
      categoria: "Estacionamiento e instalaciones",
      icono: IconoPiscina,
      texto: "Alberca exterior privada: disponible todo el año, climatizada",
    },
    {
      categoria: "Estacionamiento e instalaciones",
      icono: IconoSinEscalera,
      texto: "Alojamiento de un solo piso",
      subTitulo: "Alojamiento sin escaleras",
    },
    // Servicios
    {
      categoria: "Servicios",
      icono: IconoMaletas,
      texto: "Se permite dejar el equipaje",
      subTitulo:
        "Opción de llegar pronto o salir tarde para la comodidad de los huéspedes",
    },
    {
      categoria: "Servicios",
      icono: IconoCalendario,
      texto: "Disponible para estancias largas",
      subTitulo: "Permite estancias de 28 días o más",
    },
    {
      categoria: "Servicios",
      icono: IconoLlaves,
      texto: "Llegada autónoma",
    },
    {
      categoria: "Servicios",
      icono: IconoKey,
      texto: "Teclado",
      subTitulo:
        "Entra al alojamiento de manera independiente gracias a un código en la puerta",
    },
    {
      categoria: "Servicios",
      icono: IconoSpray,
      texto:
        "Servicio de limpieza disponible, de 11:00 a.m. a 3:00 p.m., todos los días: disponible por un costo adicional",
    },
  ];
  const amenidades = [
    {
      icono: IconoPiscina,
      texto: "Piscina",
    },
    {
      icono: IconoAireAcon,
      texto: " Aire acondicionado",
    },
    {
      icono: IconoCocina,
      texto: "Cocina equipada",
    },
    {
      icono: IconoTelevision,
      texto:
        '"Television pantalla 175" Netflix, Video de Amazon Prime, Apple TV, Disney+, Hulu',
    },
    {
      icono: IconoCCTV,
      texto: " Cámaras de seguridad exteriores en la propiedad",
    },
    {
      icono: IconoWashMachine,
      texto: "Lavadora De pago",
    },
    {
      icono: IconoCarro,
      texto: "Estacionamiento techado",
    },
    {
      icono: IconoWifi,
      texto: "Wifi",
    },
    {
      icono: IconoDesk,
      texto: "Área para trabajar",
    },
  ];

  const [hasModal, setHasModal] = useState(false);
  return (
    <Container>
      <Lista>
        {amenidades.map((am, index) => {
          return (
            <Item key={index}>
              {<am.icono width={anchoIconos} color={theme.secondary.coral} />}
              {am.texto}
            </Item>
          );
        })}
      </Lista>
      <CajaBnt>
        <BtnSimple onClick={() => setHasModal(true)}>Ver todas</BtnSimple>
      </CajaBnt>
      {hasModal && (
        <Modal setHasModal={setHasModal} titulo="Amenidades">
          <Lista className="scroll">
            {amenidadesDB.map((am, index) => {
              return (
                <Item key={index}>
                  {am.iconoImg ? (
                    <ImgIcon
                      // src={ImgPeriquera}
                      // width={anchoIconos}
                      $width={anchoIconos}
                      src={am.icono}
                    />
                  ) : (
                    <am.icono
                      width={anchoIconos}
                      color={theme.secondary.coral}
                    />
                  )}

                  {am.texto}
                </Item>
              );
            })}
          </Lista>
        </Modal>
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 65%;
  min-height: 100px;
`;

const Lista = styled.ul`
  list-style: none;
  padding-left: 35px;

  &.scroll {
    overflow-y: scroll;
    height: 100%;
    /* background-color: red; */
  }
`;
const Item = styled.li`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  /* border: 1px solid red; */
  text-align: start;
  font-size: 1.1rem;
  color: ${theme.primary.neutral600};
  margin-bottom: 25px;
`;
const CajaBnt = styled.div`
  width: 100%;
  display: flex;
  /* border: 1px solid ; */
  /* justify-content: center; */
  /* border-bottom: 1px solid ${theme.primary.neutral200}; */
`;
const BtnSimple = styled(BtnGeneral)``;
const ImgIcon = styled.img`
  width: ${(props) => props.$width};
`;
