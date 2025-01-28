import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { NavLink, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faTruckFast,
  faEarthAmericas,
  faScrewdriverWrench,
  faHouse,
  faChartSimple,
  faRoute,
  faFileLines,
  faUserTie,
  faWaterLadder,
  faChartLine,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { faComments, faUser } from "@fortawesome/free-regular-svg-icons";

export default function MenuLateral() {
  let location = useLocation();
  let lugar = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container
      className={menuOpen ? "open" : ""}
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <NamePage>
        <BoxBarsMenu onClick={() => setMenuOpen(!menuOpen)}>
          <Linea1 className={`${menuOpen ? " activeline1" : ""}`}></Linea1>
          <Linea2 className={`${menuOpen ? " activeline2" : ""}`}></Linea2>
          <Linea3 className={`${menuOpen ? " activeline3" : ""}`}></Linea3>
        </BoxBarsMenu>
      </NamePage>

      <CajaOptionMenu>
        <Enlaces to={"/"}>
          <Option>
            <Icono
              icon={faHouse}
              className={`${lugar === "/" ? "iconoSelect" : ""}`}
            />
            <TituloMenu className={menuOpen ? "menuOpen" : ""}>
              Inicio
            </TituloMenu>
          </Option>
        </Enlaces>

        <Enlaces
          to={"/admin/dashboard"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Option>
            <Icono
              icon={faChartLine}
              className={`${lugar === "/materiales" ? "iconoSelect" : ""}`}
            />
            <TituloMenu className={menuOpen ? "menuOpen" : ""}>
              Dashboard
            </TituloMenu>
          </Option>
        </Enlaces>
        <Enlaces
          to={"/admin/feedback"}
          placeholder="Modulo Nuevo"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Option>
            <Icono
              icon={faComments}
              className={`${lugar === "/importaciones" ? "iconoSelect" : ""}`}
            />
            <TituloMenu className={menuOpen ? "menuOpen" : ""}>
              Feedback
            </TituloMenu>
          </Option>
        </Enlaces>

        <Enlaces to={"/admin/propiedades"}>
          <Option>
            <Icono
              icon={faWaterLadder}
              className={`${lugar === "/fletes" ? "iconoSelect" : ""}`}
            />
            <TituloMenu className={menuOpen ? "menuOpen" : ""}>
              Propiedades
            </TituloMenu>
          </Option>
        </Enlaces>

        <Enlaces to={"/admin/hospedajes"}>
          <Option>
            <Icono
              icon={faBed}
              className={`icono  ${
                lugar === "/transportes" ? "iconoSelect" : ""
              }`}
            />

            <TituloMenu className={menuOpen ? "menuOpen" : ""}>
              Hospedajes
            </TituloMenu>
          </Option>
        </Enlaces>
      </CajaOptionMenu>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60px;
  background-color: ${theme.primary.turquoiseTenue};
  border-right: 1px solid ${theme.primary.turquoiseBrillante};
  transition: all 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  &.open {
    width: 300px;
  }
  overflow: hidden;
`;

const NamePage = styled.div`
  padding: 0 30px 0 30px;
  display: flex;

  width: 100%;
  border-bottom: 3px solid ${theme.primary.turquoiseBrillante};
  height: 60px;
  h2 {
    margin-bottom: 7px;
    font-weight: 200;
  }
  @media screen and (max-width: 620px) {
    background-color: transparent;
  }
`;

const BoxBarsMenu = styled.div`
  width: 30px;
  height: 50px;
  position: absolute;
  left: 18px;
  margin-top: 10px;
  margin-right: 10px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 620px) {
    border: 1px solid ${theme.azul2};
    background-color: ${theme.azulOscuro1Sbetav3};
    border-radius: 5px 0 5px 0;
    padding: 4px;
    width: 40px;
    height: 50px;
    left: auto;
    right: 10px;
    bottom: 20px;
    position: fixed;
  }
`;

const Linea = styled.span`
  display: block;
  width: 100%;
  height: 4px;
  background: #ffffff;
  margin-top: 7px;
  transform-origin: 0px 100%;
  transition: all 300ms;
  &.activeline1 {
    transform: rotate(45deg) translate(0px, 2px);
    margin-left: 5px;
  }

  &.activeline2 {
    opacity: 0;
    margin-left: -30px;
  }

  &.activeline3 {
    margin-left: 5px;
    transform: rotate(-45deg) translate(0px, 2px);
  }
`;
const Linea1 = styled(Linea)``;
const Linea2 = styled(Linea)``;
const Linea3 = styled(Linea)``;

const CajaOptionMenu = styled.div`
  padding: 20px 0;
  position: absolute;
  top: 90px;
`;
const Enlaces = styled(NavLink)`
  color: #ffffffb2;
  display: block;
  position: relative;
  transition: color 25ms;
  border-bottom: 3px solid transparent;
  padding: 0 25px;
  width: 200px;
  &:hover {
    color: white;
    border-bottom: 3px solid ${theme.primary.turquoiseBrillante};
  }

  h4 {
    position: absolute;
    left: 40px;
    font-weight: inherit;
  }
  &:hover {
    cursor: pointer;
  }

  h2 {
    font-size: 1rem;
    text-decoration: none;
    font-weight: 200;
    z-index: 5;
    padding: 5px;
    background-color: ${theme.azul2};
  }
  text-decoration: none;
  font-weight: 400;
  &.active {
    color: red;
    color: ${theme.primary.neutral600};
    /* color: blue; */
    font-weight: bold;
    color: white;
    border-bottom: 3px solid ${theme.primary.turquoiseBrillante};
  }
`;

const Icono = styled(FontAwesomeIcon)`
  &.debajo {
    position: absolute;
    left: -5px;
  }
`;

const TituloMenu = styled.h4`
  display: none;
  &.menuOpen {
    display: block;
  }
`;

const Option = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  position: relative;
`;
