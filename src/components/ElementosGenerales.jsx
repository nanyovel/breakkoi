import { styled } from "styled-components";
import React from "react";
import { theme } from "../config/theme";

export const BtnGeneral = styled.button`
  margin: 5px;
  cursor: pointer;

  border-radius: 5px;
  min-width: 100px;
  height: 35px;
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
export const TituloH1 = styled.h1`
  color: ${theme.primary.turquoiseTenue};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: normal;
`;

export const InputGeneral = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${theme.primary.turquoiseBrillante};
  background-color: ${theme.complementary.midnightBlue};
`;
export const TextAreaGeneral = styled.textarea`
  width: 100%;
  min-height: 60px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${theme.primary.turquoiseBrillante};
  background-color: ${theme.complementary.midnightBlue};
`;

export const OpciongGneral = styled.option``;
export const DataList = styled.datalist``;

const CajaInput = styled.div`
  width: 100%;
  margin-bottom: 10px;
  &.btn {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin-bottom: 40px; */
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  &.checkbox {
    min-height: 25px;
    /* border: 1px solid red; */
    padding: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
  }
`;

const TituloInput = styled.p`
  color: ${theme.complementary.midnightBlue};
`;
const Input = styled(InputGeneral)`
  &.checkbox {
    background-color: red;
    width: 20px;
  }
  &.danger {
    color: ${theme.secondary.coral};
    border: 1px solid red;
  }
  &.none {
    display: none;
  }
  &.radio {
    width: 15px;
    &:focus {
      border: 1px solid black;
      width: 25px;
    }
  }
`;
<CajaInput>
  <TituloInput>Perfil de instagram</TituloInput>

  <Input
    value={""}
    name="instagram"
    onChange={""}
    type="email"
    placeholder="Perfil de instagram"
    autoComplete="off"
  />
</CajaInput>;
