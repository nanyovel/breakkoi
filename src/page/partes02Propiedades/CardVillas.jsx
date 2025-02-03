import React, { useState } from "react";
import { theme } from "../../config/theme";
import styled from "styled-components";
import { BtnGeneral } from "../../components/ElementosGenerales";
import DescripcionVilla from "../../view/PartesVilla/DescripcionVilla";
import Principal from "../../view/PartesVilla/Principal";
import CopyDescription from "../../view/PartesVilla/CopyDescription";
import IconoLugarCerca from "./../../../public/icon/restaurante.png";
import IconoAmenidades from "./../../../public/icon/television.png";
import Modal from "../../components/Modal";
import LugaresCercanos from "../../view/PartesVilla/LugaresCercanos";
import Amenidades from "../../view/PartesVilla/Amenidades";

export default function CardVillas({ villa }) {
  // const [villa, setVilla] = useState(Villas[0]);
  const [hasModal, setHasModal] = useState(false);
  const [hasModal2, setHasModal2] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <WrapPropiedades>
      <CajaInt className="izq">
        <ImgPrincipal src="https://firebasestorage.googleapis.com/v0/b/breakkoi.firebasestorage.app/o/imgPost%2FIMG-20250130-WA0019.jpg?alt=media&token=2768067a-60a9-4972-a1b8-ecc9263aa5d4" />
      </CajaInt>
      <CajaInt className="der">
        <TituloCard>{villa.titulo}</TituloCard>
        <DescripcionVilla resumido={true} villa={villa} />
        <Principal resumido={true} principal={villa.principal} />
        <CopyDescription resumido={true} texto={villa.textoCopyDescription} />
        <CajaBtnFinal>
          <CajaFinal onClick={() => setHasModal(true)}>
            <IconoSimple src={IconoLugarCerca} />
            <SubtituloFinal>Lugares cercanos</SubtituloFinal>
          </CajaFinal>
          <CajaFinal onClick={() => setHasModal2(true)}>
            <IconoSimple src={IconoAmenidades} />

            <SubtituloFinal>Amenidades</SubtituloFinal>
          </CajaFinal>
        </CajaBtnFinal>
        <CajaCTA>
          <BtnSimple onClick={() => setShowCalendar(true)}>
            Ver disponibilidad
          </BtnSimple>
        </CajaCTA>
      </CajaInt>
      {hasModal && (
        <Modal setHasModal={setHasModal} titulo="Lugares cercanos">
          <WrapScroll>
            <LugaresCercanos />
          </WrapScroll>
        </Modal>
      )}
      {hasModal2 && (
        <Modal setHasModal={setHasModal2} titulo="Amenidades">
          <WrapScroll>
            <Amenidades bntOff={true} />
          </WrapScroll>
        </Modal>
      )}
      {showCalendar && (
        <Modal setHasModal={setShowCalendar} titulo="Calendario">
          <WrapScroll>
            <TituloCalendar>Disponible </TituloCalendar>
          </WrapScroll>
        </Modal>
      )}
    </WrapPropiedades>
  );
}

const WrapPropiedades = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  border: 1px solid ${theme.primary.neutral500};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${theme.config.sombra};
  transition: ease all 0.2s;
  &:hover {
    -moz-box-shadow: 3px 7px 11px 0px ${theme.primary.turquoise};
    -webkit-box-shadow: 3px 7px 11px 0px ${theme.primary.turquoise};
    box-shadow: 3px 7px 11px 0px ${theme.primary.turquoise};
  }
`;
const CajaInt = styled.div`
  height: 100%;
  &.izq {
    width: 40%;
    background-color: blue;
  }
  &.der {
    width: 60%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
`;
const ImgPrincipal = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TituloCard = styled.h2`
  width: 100%;
  text-align: start;
  color: ${theme.primary.neutral600};
  text-decoration: underline;
`;
const CajaBtnFinal = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const CajaFinal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  gap: 10px;
  padding: 4px;
  &:hover {
    cursor: pointer;
    border: 1px solid ${theme.secondary.coral};
  }
`;
const IconoSimple = styled.img`
  width: 45px;
`;
const SubtituloFinal = styled.h2`
  color: ${theme.secondary.coral};
  border-bottom: 1px solid ${theme.secondary.coral};
  font-size: 1.1rem;
  /* border: 2px solid red; */
`;
const CajaCTA = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const BtnSimple = styled(BtnGeneral)``;
const WrapScroll = styled.div`
  overflow-y: scroll;
  height: 100%;
`;
const TituloCalendar = styled.h2`
  color: ${theme.primary.turquoise};
`;
