import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";
import { Villas } from "../../DB/Villas";

export default function Amenidades({ amenidades, bntOff }) {
  const anchoIconos = "2rem";

  const [hasModal, setHasModal] = useState(false);
  return (
    <Container>
      <Lista>
        {amenidades
          .filter((amenidad) => {
            if (amenidad.resumida) {
              return amenidad;
            }
          })
          .map((am, index) => {
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
                  <am.icono width={anchoIconos} color={theme.secondary.coral} />
                )}
                {/* {<am.icono width={anchoIconos} color={theme.secondary.coral} />} */}
                {am.texto}
              </Item>
            );
          })}
      </Lista>
      {!bntOff && (
        <CajaBnt>
          <BtnSimple onClick={() => setHasModal(true)}>Ver todas</BtnSimple>
        </CajaBnt>
      )}
      {hasModal && (
        <Modal setHasModal={setHasModal} titulo="Amenidades">
          <Lista className="scroll">
            {amenidades.map((am, index) => {
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
