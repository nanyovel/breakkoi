import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <ContenedorHeader>
      <NavBar>
        <CajaInternaHeader>
          <WrapTel>
            <TextoTel className="tel">
              <Ancla
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+18299069059&text=Hola%20equipo%20BreakKoi,%20quisiera%20por%20favor%20ser%20asistido."
              >
                <Icono icon={faWhatsapp} />
                <SpanTel>Tel:</SpanTel>
                829-906-9059
              </Ancla>
            </TextoTel>
            <TextoTel className="tel">
              <Ancla
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+18299069059&text=Hola%20equipo%20BreakKoi,%20quisiera%20por%20favor%20ser%20asistido."
              >
                <Icono icon={faWhatsapp} />
                <SpanTel>Tel:</SpanTel>
                829-906-0000
              </Ancla>
            </TextoTel>
          </WrapTel>
        </CajaInternaHeader>
        <CajaInternaHeader className="nav">
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>Idiomas</NavItem>
            <NavItem>Propiedades</NavItem>
            <NavItem>Contactos</NavItem>
          </NavList>
          <CajaLog>
            <Icono className="user" icon={faUser} />
            {/* <TextoSingle>Login</TextoSingle> */}
          </CajaLog>
        </CajaInternaHeader>
      </NavBar>
    </ContenedorHeader>
  );
}

// Navbar
const ContenedorHeader = styled.header`
  /* background-color: ${theme.primary.turquoise}; */
  background-color: rgba(26, 188, 156, 0.8);
  width: 100%;
  color: ${theme.primary.white};
  /* padding: 16px; */
  height: 60px;
  padding: 0 80px;
  z-index: 2;
  position: absolute;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const CajaInternaHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  height: 100%;
`;
const WrapTel = styled.div`
  /* border: 1px solid red; */
`;

const TextoTel = styled.h2`
  font-size: 1.1rem;
  font-weight: normal;
  /* color: #fff; */
  &:hover {
    color: ${theme.primary.sand};
    /* color: red; */
    text-decoration: underline;
  }
`;
const Ancla = styled.a`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${theme.sand};
    /* color: red; */
    text-decoration: underline;
  }
`;
const SpanTel = styled.span``;
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  /* border: 1px solid red; */
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: ${theme.primary.sand};
  }
`;
const CajaLog = styled.div`
  text-align: center;
`;
const TextoSingle = styled.p``;
const Icono = styled(FontAwesomeIcon)`
  margin-right: 5px;
  &.user {
    &:hover {
      color: ${theme.primary.sand};
      cursor: pointer;
    }
  }
`;
