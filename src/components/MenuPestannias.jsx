import React from "react";
import { theme } from "../config/theme";

import styled from "styled-components";

import { Fragment } from "react";

export default function MenuPestannias({ arrayOpciones, handlePestannias }) {
  return (
    <CajaBarraOpciones>
      <ListaOpciones>
        {arrayOpciones.map((opciones, index) => {
          return (
            <Fragment key={index}>
              <OpcionLI
                key={index}
                name={opciones.nombre}
                className={opciones.select ? " selected " : ""}
              >
                <AnchorText
                  data-id={index}
                  onClick={(e) => handlePestannias(e)}
                >
                  {opciones.nombre}
                </AnchorText>
              </OpcionLI>
            </Fragment>
          );
        })}
      </ListaOpciones>
    </CajaBarraOpciones>
  );
}

const CajaBarraOpciones = styled.div`
  color: ${theme.textoBlancoEdtem};
  border-bottom: 1px solid ${theme.primary.neutral200};
`;
const ListaOpciones = styled.ul`
  display: flex;
  list-style: none;
`;
const OpcionLI = styled.li`
  font-size: 1.1rem;
  margin-right: 3px;
  /* margin: 5px; */
  padding: 6px;
  border-bottom: 4px solid transparent;
  &.selected {
    border-bottom-color: white;
    color: ${theme.primary.turquoise};
    color: white;
  }
`;
const AnchorText = styled.a`
  cursor: pointer;

  padding: 4px;
  &:hover {
    color: ${theme.primary.sand};
  }
`;
