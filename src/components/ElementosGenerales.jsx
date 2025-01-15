import { styled } from "styled-components";
import React from "react";
import { theme } from "../config/theme";

export const BtnGeneral = styled.button`
  margin: 5px;
  cursor: pointer;

  border-radius: 5px;
  min-width: 100px;
  padding: 5px;
  outline: none;
  border: 1px solid ${theme.primary.neutral200};
  font-size: 1rem;
  background-color: ${theme.primary.turquoise};
  color: white;
  box-shadow: 3px 3px 3px -1px rgba(0, 0, 0, 0.43);
  display: inline-block;

  &:hover {
    background-color: #fff;
    color: ${theme.primary.turquoise};
    border: 1px solid ${theme.primary.turquoise};
  }

  &:active {
    background-color: ${theme.primary.turquoiseTenue};
    color: #fff;
  }

  &.danger {
    background-color: red;
    color: white;
    &:hover {
      color: red;
      background-color: white;
    }
    &:active {
      background-color: #f74a4a;
      color: #fff;
    }
  }
`;
export const TituloSeccion = styled.h2`
  color: ${theme.primary.turquoiseTenue};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: normal;
`;
