import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

import CardResennia from "../../components/CardResennia";
import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";
import { Villas } from "../../DB/Villas";

export default function CajaResennias({ resennias }) {
  // const resennias = Villas[0].resennias;
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
