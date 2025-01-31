import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import CajaNuevoBlog from "../../components/Blog/CajaNuevoBlog";
import MenuPestannias from "../../components/MenuPestannias";

export default function Admin02Feedback() {
  const [pestannias, setPestannias] = useState([
    {
      nombre: "Reseñas",
      select: true,
      key: "resennias",
    },
    {
      nombre: "Comentarios",
      select: false,
      key: "comentarios",
    },
    {
      nombre: "Mensajes",
      select: false,
      key: "mensajes",
    },
  ]);
  const handlePestannias = (e) => {
    let index = Number(e.target.dataset.id);
    setPestannias(
      pestannias.map((opcion, i) => {
        return {
          ...opcion,
          select: i == index,
        };
      })
    );
  };

  return (
    <Container>
      <CajaMenu>
        <MenuPestannias
          arrayOpciones={pestannias}
          handlePestannias={handlePestannias}
          tab={true}
        />
      </CajaMenu>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  gap: 15px;
  padding: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;
const CajaMenu = styled.div`
  width: 100%;
  text-align: start;
`;
