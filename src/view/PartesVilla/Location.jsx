import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

export default function Location() {
  const urlMapa =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3781.442600111002!2d-68.390401!3d18.599152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi!5e0!3m2!1ses!2sdo!4v1735950696181!5m2!1ses!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
  return (
    <CajaInterna>
      <MapaGoogle src={urlMapa}></MapaGoogle>
    </CajaInterna>
  );
}

const CajaInterna = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 11px -1px -1px 5px #eeeeee5c;
  -webkit-box-shadow: -4px 0px 10px -3px #eeeeee5c;
  -moz-box-shadow: -4px 0px 10px -3px #eeeeee5c;
  box-shadow: -4px 0px 10px -3px #eeeeee5c;
`;
const MapaGoogle = styled.iframe`
  width: 95%;
  display: block;
  margin: auto;
  height: 400px;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.43);
  border: 1px solid ${theme.primary.neutral500};
`;
