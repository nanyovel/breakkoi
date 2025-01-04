import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import RostroMujer3 from "./../../../public/img/woman4.jpg";
import RostroHombre12 from "./../../../public/img/man12.jpg";
import RostroHombre13 from "./../../../public/img/man13.jpg";
import EEUU from "./../../../public/img/estados-unidos.png";
import Francia from "./../../../public/img/francia.png";
import Australia from "./../../../public/img/australia.png";
import CardResennia from "../../components/CardResennia";
import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";

export default function CajaResennias() {
  const resennias = [
    {
      nombre: "Emily Wilson",
      imgPerson: RostroMujer3,
      imgBandera: Australia,
      puntuacion: 5,
      texto: "Excelenete y acogedor lugar, lo recomiendo al 100%.",
    },
    {
      nombre: "Michael Johnson",
      imgPerson: RostroHombre12,
      imgBandera: Francia,
      puntuacion: 5,
      texto: "Simplemente facinante..",
    },
    {
      nombre: "David Jones",
      imgPerson: RostroHombre13,
      imgBandera: EEUU,
      puntuacion: 5,
      texto:
        "Marilloso lugar en Punta Cana, ubicado en una zona perfecta dentro de Punta Cana",
    },
  ];
  const [hasModal, setHasModal] = useState(false);
  return (
    <Container>
      <WrapTextoImg>
        {resennias.map((review, index) => {
          return (
            <CardResennia
              key={index}
              filasDeDos={true}
              nombre={review.nombre}
              ImgPerson={review.imgPerson}
              ImgBandera={review.imgBandera}
              puntuacion={5}
              texto={review.texto}
            />
          );
        })}
      </WrapTextoImg>
      <BtnSimple onClick={() => setHasModal(true)}>Ver todas</BtnSimple>
      {hasModal && (
        <Modal setHasModal={setHasModal} titulo={"Reseñas"}>
          {resennias.map((review, index) => {
            return (
              <CardResennia
                key={index}
                filasDeDos={true}
                modal={true}
                nombre={review.nombre}
                ImgPerson={review.imgPerson}
                ImgBandera={review.imgBandera}
                puntuacion={5}
                texto={review.texto}
              />
            );
          })}
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div``;
const WrapTextoImg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* Permite que las cajas pasen a la siguiente fila */
  gap: 10px;
  margin-bottom: 20px;
`;

const BtnSimple = styled(BtnGeneral)``;
