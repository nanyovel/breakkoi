import React, { useState } from "react";
import { theme } from "../config/theme";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BtnGeneral,
  DataList,
  InputGeneral,
  OpciongGneral,
  TituloSeccion,
} from "../components/ElementosGenerales";
import { ListaPaises } from "../components/ListaPaises";
import BotonQuery from "../components/BotonQuery";

export default function Registrarse() {
  const [datos, setDatos] = useState({
    nombre: {
      value: "",
      mensajeAlerta: "",
      alerta: false,
    },
    apellido: {
      value: "",
      mensajeAlerta: "",
      alerta: false,
    },
    correo: {
      value: "",
      mensajeAlerta: "",
      alerta: false,
    },
    telefono: {
      value: "",
      mensajeAlerta: "",
      alerta: false,
    },
    password: {
      value: "",
      mensajeAlerta: "",
      alerta: false,
    },
    password2: {
      value: "",
      mensajeAlerta: "",
      alerta: false,
    },
    password2: {
      value: "",
      mensajeAlerta: "",
      alerta: false,
    },
    fechaNacimiento: {
      value: "",
      mensajeAlerta: "",
      alerta: false,
    },
    nacionalidad: {
      value: "",
      mensajeAlerta: "",
      alerta: false,
    },
  });
  const handleInput = (e) => {
    const { value, name } = e.target;
    console.log(value);
    setDatos((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  const enviarObjeto = async () => {
    if (datos.password.value != datos.password2.value) {
      setDatos((prevState) => ({
        ...prevState,
        password: {
          ...prevState.password,
          alerta: true,
          mensajeAlerta: "Las contraseñas no coinciden.",
        },
        password2: {
          ...prevState.password2,
          alerta: true,
          mensajeAlerta: "Las contraseñas no coinciden.",
        },
      }));
      return;
    } else if (datos.password.value === datos.password2.value) {
      setDatos((prevState) => ({
        ...prevState,
        password: {
          ...prevState.password,
          alerta: false,
          mensajeAlerta: "",
        },
        password2: {
          ...prevState.password2,
          alerta: false,
          mensajeAlerta: "",
        },
      }));
    }
    // si la contraseña tiene menos de 7 caracteres
    // si dejo algun campo vacio
    // si el correo no tiene formato de correo
    // el numero de telefono soloa acepte numeros
    // si no ha aceptado los terminos y condiciones
  };
  return (
    <>
      <Header />
      <BotonQuery datos={datos} />
      <CajaContenido>
        <Titulo>Registrarse</Titulo>
        <WrapInputs>
          <CajaInput>
            <TituloInput>Nombre</TituloInput>
            <Input
              value={datos.nombre.value}
              name="nombre"
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="Nombre"
              autoComplete="off"
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Apellido</TituloInput>
            <Input
              value={datos.apellido.value}
              name="apellido"
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="Apellido"
              autoComplete="off"
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Correo</TituloInput>
            <Input
              value={datos.correo.value}
              name="correo"
              onChange={(e) => handleInput(e)}
              type="email"
              placeholder="Correo"
              autoComplete="off"
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Telefono</TituloInput>
            <Input
              value={datos.telefono.value}
              name="telefono"
              onChange={(e) => handleInput(e)}
              type="email"
              placeholder="Telefono"
              autoComplete="off"
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Contraseña</TituloInput>
            {datos.password.alerta && (
              <Parrafo className="danger">
                Las contraseñas no coninciden
              </Parrafo>
            )}
            <Input
              value={datos.password.value}
              name="password"
              onChange={(e) => handleInput(e)}
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              className={datos.password.alerta ? "danger" : ""}
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Repetir contraseña</TituloInput>

            {datos.password.alerta && (
              <Parrafo className="danger">
                Las contraseñas no coninciden
              </Parrafo>
            )}
            <Input
              value={datos.password2.value}
              name="password2"
              onChange={(e) => handleInput(e)}
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              className={datos.password2.alerta ? "danger" : ""}
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Fecha de nacimiento</TituloInput>
            <Input
              value={datos.fechaNacimiento.value}
              name="fechaNacimiento"
              onChange={(e) => handleInput(e)}
              type="date"
              placeholder="Fecha de nacimiento"
              autoComplete="off"
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Nacionalidad</TituloInput>

            <Input
              type="text"
              value={datos.nacionalidad.value}
              name="nacionalidad"
              onChange={(e) => handleInput(e)}
              placeholder="Nacionalidad"
              list="paises"
              autoComplete="off"
            />
            <DataListSimple id="paises">
              {ListaPaises.map((pais, index) => {
                return <Opcion key={index}>{pais.nombre}</Opcion>;
              })}
            </DataListSimple>
          </CajaInput>

          <CajaInput className="checkbox">
            <Input type="checkbox" className="checkbox" />
            <Parrafo>Acepto los terminos y condiciones.</Parrafo>
          </CajaInput>

          <CajaInput className="btn">
            <BtnSimple onClick={() => enviarObjeto()}>Registrarse</BtnSimple>
          </CajaInput>
        </WrapInputs>
      </CajaContenido>
      <Footer />
    </>
  );
}
const Container = styled.div`
  min-height: 200px;
  background-color: red;
`;

const CajaContenido = styled.div`
  min-height: 200px;
`;
const Titulo = styled(TituloSeccion)`
  padding-top: 30px;
`;

const WrapInputs = styled.div`
  min-width: 400px;
  min-height: 200px;
  width: 400px;
  margin: auto;
  border: 1px solid ${theme.primary.turquoise};
  border-radius: 10px;
  padding: 15px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;
const CajaInput = styled.div`
  width: 100%;
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
const Parrafo = styled.p`
  width: 100%;
  &.danger {
    color: red;
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
`;
const Opcion = styled(OpciongGneral)``;
const DataListSimple = styled(DataList)``;
const BtnSimple = styled(BtnGeneral)`
  border: 1px solid ${theme.primary.turquoise};
`;
