import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";

export default function CopyDescription() {
  const TextoDB = {
    tituloPrincipal: "Acerca del espacio",
    parrafos: [
      {
        titulo: "",
        texto:
          "Descubre la elegancia y confort de nuestra villa en el exclusivo residencial Westside, ubicada en el corazón de Punta Cana. Este lugar privado te ofrece una piscina climatizada , rodeada de un entorno sereno y sofisticado. A solo minutos de los principales lugares de interés, tendrás a tu alcance playas paradisíacas, restaurantes de alta cocina, y actividades recreativas. Vive una experiencia de lujo y tranquilidad en nuestra villa, el refugio perfecto para unas vacaciones inolvidables.",
      },
      {
        titulo: "El alojamiento",
        texto:
          "Esta elegante casa cuenta con 3 dormitorios, cada uno con una cómoda cama tamaño queen, con capacidad para un total de 6 huéspedes. Disfruta de dos baños completos, una zona de lavandería, un comedor, un rincón de desayuno y una cocina totalmente equipada. Además, el estacionamiento cubierto para dos autos y el espacioso patio privado con piscina de agua caliente garantizan la máxima comodidad durante tu estancia.",
      },
      {
        titulo: "Acceso para huéspedes",
        texto:
          "Los huéspedes tendrán acceso total a todas las áreas de la casa, incluida la piscina privada y el patio. Además, Westside Residences ofrece seguridad las 24 horas para tu tranquilidad y comodidad durante tu estadía.",
      },
      {
        titulo: "Otros aspectos destacables",
        texto:
          "Esta propiedad está diseñada para el máximo confort y lujo. Disfruta de servicios como aire acondicionado en todas partes, domótica para mayor comodidad, cortinas eléctricas y un sistema de filtración de agua para tu estado y bienestar.",
      },
    ],
  };
  const [hasModal, setHasModal] = useState(false);
  return (
    <Container>
      <CajaTextoView>{TextoDB.parrafos[0].texto}</CajaTextoView>
      <BtnSimple onClick={() => setHasModal(true)}>Texto completo</BtnSimple>
      {hasModal && (
        <Modal titulo={TextoDB.tituloPrincipal} setHasModal={setHasModal}>
          <CajaTextoView>
            {TextoDB.parrafos.map((parrafo, index) => {
              return (
                <CajaParrafo>
                  <SubTitulo>{parrafo.titulo}</SubTitulo>
                  <Parrafo>{parrafo.texto}</Parrafo>
                </CajaParrafo>
              );
            })}
          </CajaTextoView>
        </Modal>
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  /* background-color: red; */
  /* min-height: 100px; */
`;
const CajaTextoView = styled.div`
  font-size: 1.1rem;
  color: ${theme.primary.neutral600};
  margin-bottom: 10px;
  padding: 8px;
`;
const BtnSimple = styled(BtnGeneral)``;
const CajaParrafo = styled.div`
  margin-bottom: 15px;
`;
const SubTitulo = styled.h2`
  /* margin-bottom: 20px; */
  font-size: 1.2rem;
`;
const Parrafo = styled.p`
  /* margin-bottom: 15px; */
`;
