import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import ImgLogo from "./../../public/img/logo.png";
import { Link, NavLink } from "react-router";
import { IconoAngleV } from "./ConjuntoIconos";
import ImgSpain from "./../../public/img/spain.png";
import ImgInglaterra from "./../../public/img/inglaterra.png";
import ImgFrancia from "./../../public/img/francia.png";

export default function Header({ userMaster, absolute }) {
  const [hasIdioma, setHasIdioma] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica si el clic ocurrió fuera del menú
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHasIdioma(false); // Cierra el menú
      }
    };

    // Agrega el listener al documento
    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ContenedorHeader className={absolute ? "absolute" : ""}>
      <NavBar>
        <CajaInternaHeader>
          <CajaLogo>
            <Enlaces to={"/"} className={"logo"}>
              <Img src={ImgLogo} />
            </Enlaces>
          </CajaLogo>
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
            <NavItem>
              <Enlaces to={"/"} className={"menu"}>
                Home
              </Enlaces>
            </NavItem>
            <NavItem
              className="idioma"
              onClick={() => setHasIdioma(!hasIdioma)}
            >
              Idiomas
              <CajaArrowVIcon>
                <IconoAngleV width="1rem" />
              </CajaArrowVIcon>
              {hasIdioma && (
                <CajaIdiomas ref={menuRef}>
                  <Lista>
                    <Item>
                      <ImgFlag src={ImgSpain} />
                      Español
                    </Item>
                    <Item>
                      {" "}
                      <ImgFlag src={ImgInglaterra} />
                      Ingles
                    </Item>
                    <Item>
                      {" "}
                      <ImgFlag src={ImgFrancia} />
                      Frances
                    </Item>
                  </Lista>
                </CajaIdiomas>
              )}
            </NavItem>
            <NavItem>
              <Enlaces className={"menu"} to={"/propiedades"}>
                Propiedades
              </Enlaces>
            </NavItem>
            <NavItem>
              <Enlaces className={"menu"} to={"/blog"}>
                Blog
              </Enlaces>
            </NavItem>
            <NavItem>
              <Enlaces className={"menu"} to={"/contactos"}>
                Contactos
              </Enlaces>
            </NavItem>
            <NavItem>
              <Enlaces className={"menu"} to={"/nosotros"}>
                Sobre nosotros
              </Enlaces>
            </NavItem>
          </NavList>
          {!userMaster && (
            <CajaLog>
              <Enlaces className={"menu login"} to={"/login"}>
                <Icono className="user" icon={faUser} />
              </Enlaces>
              {/* <TextoSingle>Login</TextoSingle> */}
            </CajaLog>
          )}
          {userMaster && (
            <Enlaces className={"perfil"} to={"/perfil"}>
              <CajaPerfil>
                {userMaster.urlFotoPerfil ? (
                  <CajaAvatar>
                    <ImgAvatar src={userMaster.urlFotoPerfil} />
                  </CajaAvatar>
                ) : (
                  <CajaAvatar>
                    <ImgAvatar
                      className="icon"
                      src={
                        userMaster.genero == "Femenino"
                          ? theme.config.userFemale
                          : theme.config.userMale
                      }
                    />
                  </CajaAvatar>
                )}

                <CajaNombrePerfil>
                  <NombrePerfil>{userMaster.nombre}</NombrePerfil>
                </CajaNombrePerfil>
              </CajaPerfil>
            </Enlaces>
          )}
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
  padding: 0 150px;
  z-index: 2;
  &.absolute {
    position: absolute;
  }
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
  height: 100%;
`;
const WrapTel = styled.div``;

const TextoTel = styled.h2`
  font-size: 1.1rem;
  font-weight: normal;
  &:hover {
    color: ${theme.primary.sand};
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
    text-decoration: underline;
  }
`;

const SpanTel = styled.span``;
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  &.idioma {
    display: flex;
    gap: 3px;
    position: relative;
    border-bottom: 3px solid transparent;
    &:hover {
      color: ${theme.primary.sand};
      color: white;
      border-bottom: 3px solid;
    }
  }
`;
const CajaLog = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;
const Icono = styled(FontAwesomeIcon)`
  margin-right: 5px;
  &.user {
    margin-right: 0;
    &:hover {
      color: ${theme.primary.sand};
      cursor: pointer;
    }
  }
`;
const Img = styled.img`
  height: 75%;
  margin-right: 10px;
  cursor: pointer;
`;

const Enlaces = styled(NavLink)`
  &.menu {
    color: white;
    display: block;
    position: relative;
    transition: color 25ms;
    border-bottom: 3px solid transparent;
    &:hover {
      color: ${theme.primary.sand};
      border-bottom: 3px solid;
    }
    text-decoration: none;
    &.active {
      color: white;
    }
  }
  &.logo {
    height: 100%;
    display: block;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.perfil {
    color: white;
    text-decoration: none;
    &:hover {
      color: ${theme.primary.sand};
    }
    &.active {
      color: white;
    }
  }
  &.login {
    display: flex;
    justify-content: center;
    padding: 4px;
  }
`;
const CajaLogo = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CajaArrowVIcon = styled.div`
  display: flex;
  align-items: end;
`;
const CajaIdiomas = styled.div`
  width: 200px;
  min-height: 100px;
  background-color: ${theme.secondary.coral};
  position: absolute;
  top: 25px;
`;
const Lista = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  padding: 5px;
  height: 40px;
  border-bottom: 1px solid black;
  align-content: center;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
    color: ${theme.secondary.coral};
    background-color: ${theme.primary.sand};
    background-color: white;
  }
`;
const ImgFlag = styled.img`
  width: 30px;
`;
const CajaPerfil = styled.div`
  min-width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  transition: ease 0.2s all;

  &:hover {
    /* border: 1px solid ${theme.secondary.coral}; */
    border-radius: 4px;
    box-shadow: ${theme.config.sombra};
  }
`;

const CajaAvatar = styled.div`
  width: 40px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
`;
const ImgAvatar = styled.img`
  width: 80%;
  border-radius: 50%;
`;
const CajaNombrePerfil = styled.div``;
const NombrePerfil = styled.h3`
  /* text-overflow: ; */
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  /* border-bottom: 3px transparent; */
`;
