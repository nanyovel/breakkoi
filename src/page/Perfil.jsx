import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { UserSchema } from "../model/Auth";
import { useNavigate } from "react-router";
import { DO } from "country-flag-icons/react/3x2";
import BotonQuery from "../components/BotonQuery";
import { generatorIconFlagURL } from "../components/ListaPaises";
import { CalcularEdad } from "../libs/FechaFormat";
import { BtnGeneral } from "../components/ElementosGenerales";
import { signOut } from "firebase/auth";
import { autenticar } from "../firebase/firebaseConfig";

export default function Perfil({ userMaster }) {
  const handleRedireccion = (ruta) => {
    if (ruta) {
      window.open(ruta, "_blank");
    }
  };

  const navegacion = useNavigate();
  const cerrarSesion = async () => {
    try {
      await signOut(autenticar);
      navegacion("/");
    } catch (error) {
      console.log("Error al cerrar sesion.");
      console.log(error);
    }
  };
  return (
    userMaster && (
      <Container>
        <BotonQuery userMaster={userMaster} />
        <CajaContenido>
          <CajaInterna className="izq">
            <CajaFotoPerfil>
              <FotoPerfil src={userMaster.urlFotoPerfil} />
            </CajaFotoPerfil>
            <TituloRRSS>Redes sociales</TituloRRSS>

            <CajaRRSS>
              <Icono
                title={
                  userMaster.redesSociales.instagram == ""
                    ? "Cuenta no especificada"
                    : ""
                }
                onClick={() =>
                  handleRedireccion(userMaster.redesSociales.instagram)
                }
                icon={faInstagram}
                className={`${
                  userMaster.redesSociales.instagram == "" ? "inactivo" : ""
                }`}
              />
              <Icono
                title={
                  userMaster.redesSociales.instagram == ""
                    ? "Cuenta no especificada"
                    : ""
                }
                className={`${
                  userMaster.redesSociales.twitter == "" ? "inactivo" : ""
                }`}
                onClick={() =>
                  handleRedireccion(userMaster.redesSociales.twitter)
                }
                icon={faTwitter}
              />
              <Icono
                title={
                  userMaster.redesSociales.instagram == ""
                    ? "Cuenta no especificada"
                    : ""
                }
                className={`${
                  userMaster.redesSociales.facebook == "" ? "inactivo" : ""
                }`}
                onClick={() =>
                  handleRedireccion(userMaster.redesSociales.facebook)
                }
                icon={faFacebook}
              />
            </CajaRRSS>
          </CajaInterna>
          <CajaInterna className="der">
            <CajaDatos>
              <CajitaInterna>
                <Nombre>{userMaster.nombre + " " + userMaster.apellido}</Nombre>
              </CajitaInterna>

              <CajitaInterna className="row">
                <ImgBandera
                  src={generatorIconFlagURL(userMaster.nacionalidad.siglas)}
                />
                <NombreSubtitulo>
                  {userMaster.nacionalidad.pais}
                </NombreSubtitulo>
              </CajitaInterna>
              <CajitaInterna>
                <NombreSubtitulo>{userMaster.correo}</NombreSubtitulo>
              </CajitaInterna>
              <CajitaInterna>
                <NombreSubtitulo>
                  {CalcularEdad(userMaster.fechaNacimiento).qtyAnnios + " Años"}
                </NombreSubtitulo>
              </CajitaInterna>
              <CajitaInterna>
                <NombreSubtitulo>{userMaster.textoBiografia}</NombreSubtitulo>
              </CajitaInterna>
              <CajitaInterna>
                <NombreSubtitulo>{userMaster.telefono}</NombreSubtitulo>
              </CajitaInterna>
              <CajaBtn>
                <WrapBtn>
                  <BtnSimple>Editar perfil</BtnSimple>
                  <BtnSimple>Cambiar contraseña</BtnSimple>
                  <BtnSimple onClick={() => cerrarSesion()}>
                    Cerrar sesion
                  </BtnSimple>
                </WrapBtn>
              </CajaBtn>
            </CajaDatos>
          </CajaInterna>
        </CajaContenido>
        <CajaHistorico>
          <TituloHistorico>Historico de hospedajes</TituloHistorico>

          <CajaTabla>
            <Tabla>
              <thead>
                <Filas>
                  <CeldaHead>N°</CeldaHead>
                  <CeldaHead>Propiedad</CeldaHead>
                  <CeldaHead>Desde</CeldaHead>
                  <CeldaHead>Hasta</CeldaHead>
                  <CeldaHead>Comentar</CeldaHead>
                  <CeldaHead>Volver a reservar</CeldaHead>
                </Filas>
              </thead>
              <tbody>
                <Filas>
                  <CeldasBody>{1}</CeldasBody>
                  <CeldasBody>{"Villa Koi Punta Cana"}</CeldasBody>
                  <CeldasBody>{"15/06/24"}</CeldasBody>
                  <CeldasBody>{"22/06/24"}</CeldasBody>
                  <CeldasBody>
                    <BtnSimple>Comentar</BtnSimple>
                  </CeldasBody>
                  <CeldasBody>
                    <BtnSimple>Reservar</BtnSimple>
                  </CeldasBody>
                </Filas>
              </tbody>
            </Tabla>
          </CajaTabla>
        </CajaHistorico>
        <CajaBtn></CajaBtn>
      </Container>
    )
  );
}
const Container = styled.div`
  padding: 25px ${theme.config.paddingLateral};
`;
const CajaContenido = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  background-color: ${theme.primary.neutral200};
  padding: 10px;
`;
const CajaInterna = styled.div`
  &.izq {
    width: 30%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
  }
  &.der {
    width: 60%;
    /* border: 1px solid red; */
  }
`;
const CajaFotoPerfil = styled.div`
  width: 200px;
`;
const FotoPerfil = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const TituloRRSS = styled.h2`
  font-size: 1rem;
  width: 100%;
  text-align: start;
  color: ${theme.secondary.coral};
`;
const CajaRRSS = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  /* height: 40px; */
  padding: 4px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;

  color: ${theme.primary.turquoise};
  cursor: pointer;
  border: 2px solid;
  padding: 5px;
  border-radius: 4px;
  transition: ease 0.4s;
  &:hover {
    background-color: ${theme.primary.neutral300};
    color: ${theme.primary.neutral600};
  }

  &.inactivo {
    color: gray;
    cursor: auto;
    &:hover {
      background-color: transparent;
      color: gray;
    }
  }
`;
const CajaDatos = styled.div`
  min-height: 200px;
  padding: 15px;
`;
const CajitaInterna = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  border-bottom: 1px solid ${theme.primary.neutral600};
  &.row {
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
`;
const Nombre = styled.h2`
  font-weight: 400;
`;

const NombreSubtitulo = styled.h3`
  font-size: 1rem;
  font-weight: 400;
`;
const ImgBandera = styled.img`
  width: 30px;
`;
const CajaBtn = styled.div`
  width: 100%;
`;
const WrapBtn = styled.div``;
const BtnSimple = styled(BtnGeneral)``;
const CajaHistorico = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: ${theme.primary.sand};
  box-shadow: ${theme.config.sombra};
  border-radius: 10px;
`;
const TituloHistorico = styled.h2`
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: ${theme.primary.turquoise};
  color: ${theme.primary.neutral600};
  /* color: black; */
`;
const CajaTabla = styled.div``;

// ---------
const Tabla = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin: auto;
  margin-bottom: 30px;
  /* background-color: ${theme.pri}; */
  color: black;
`;
const Filas = styled.tr``;

const CeldaHead = styled.th`
  border-bottom: 1px solid #605e5e;
  padding: 3px 8px;
  text-align: center;
  background-color: #2b7d9e5d;
  border-right: 1px solid #5e5e60;
  font-size: 0.9rem;

  &:first-child {
    width: 40px;
  }
  &:nth-child(2) {
    /* width: 250px; */
  }
  &:nth-child(3) {
    width: 100px;
  }
  &:nth-child(4) {
    width: 100px;
  }
  &:nth-child(5) {
    width: 60px;
  }
  &:nth-child(5) {
    width: 60px;
  }
`;
const CeldasBody = styled.td`
  font-size: 0.9rem;
  border: 1px solid black;
  height: 25px;
  text-align: center;
  &.eliminar {
    cursor: pointer;
  }
  &.descripcion {
    text-align: start;
    padding-left: 10px;
  }
`;
