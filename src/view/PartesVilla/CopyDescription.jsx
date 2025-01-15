import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";
import { Villas } from "../../DB/Villas";

export default function CopyDescription({ resumido }) {
  const TextoDB = Villas[0].textoCopyDescription;

  const [hasModal, setHasModal] = useState(false);
  return (
    <Container>
      <CajaTextoView className={resumido ? "resumido" : ""}>
        {!resumido ? (
          TextoDB.parrafos[0].texto
        ) : (
          <>
            {TextoDB.parrafos[0].textoResumido}
            <Vermas onClick={() => setHasModal(true)}>Ver mas.</Vermas>
          </>
        )}
      </CajaTextoView>
      {!resumido && (
        <BtnSimple onClick={() => setHasModal(true)}>Texto completo</BtnSimple>
      )}
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
  &.resumido {
    padding: 0;
    margin-bottom: 0;
  }
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
const Vermas = styled.span`
  color: ${theme.secondary.coral};
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${theme.secondary.sandDark};
  }
`;
