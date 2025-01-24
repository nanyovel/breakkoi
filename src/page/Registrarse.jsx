import React, { useCallback, useEffect, useRef, useState } from "react";
import { theme } from "../config/theme";
import styled from "styled-components";
import Cropper from "react-easy-crop";

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
import { CSSLoader } from "../components/CSSLoader";
import { ModalLoading } from "../components/ModalLoading";
import db, { autenticar } from "../firebase/firebaseConfig";
import Header from "../components/Header";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { getCroppedImg } from "../components/cropImageCanvas";
import { UserSchema } from "../model/Auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { ES6AFormat } from "../libs/FechaFormat";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export default function Registrarse() {
  // ************ RECURSOS GENERALES **************
  const [isLoading, setIsLoading] = useState(false);
  const [dispatchAlerta, setDispatchAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("");

  // Esto para que no aparezca el input type file sino un icono de fontawesome
  const inputRef = useRef(null);
  const clickFromIcon = () => {
    inputRef.current.click();
  };

  const auth = getAuth();
  auth.languageCode = "es";
  const navigate = useNavigate();

  // ************** MANEJANDO CORTE DE IMAGENES FOTO DE PERFIL **************
  // ************** datos del Paquete react easy crop **************
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [hasImgCrop, setHasImgCro] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(
        datos.urlFotoPerfil.value,
        croppedAreaPixels
      );
      // Imagen cortada se debe cuardar ahora como un file, tomar en cuenta:
      // -Con la imagen tenemos la ruta de una imagen pero tambien el archivo como tal
      handleUpload(croppedImage);
      setDatos({
        ...datos,
        urlFotoPerfil: {
          ...datos.urlFotoPerfil,
          value: croppedImage,
        },
      });
      setHasImgCro(false);
    } catch (error) {
      console.error("Error recortando la imagen:", error);
    }
  };

  const handleUpload = (croppedImage) => {
    fetch(croppedImage)
      .then((res) => res.blob())
      .then((blob) => setFileFotoPerfil(blob));
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // *** EXCLUIR DE LOS IMPUST *****
  // Inputs que el usuario no debe llenar explicitamente
  const { privilegios, fechaRegistro, userName, ...datosFilter } = UserSchema;

  // *** convertir cada propiedad a objeto y marcar las opcionales *****
  const propiedadesOpcionales = ["urlFotoPerfil"];
  const datosInit = Object.keys(datosFilter).reduce((acc, key) => {
    acc[key] = {
      ...UserSchema[key],
      value: "",
      obligatorio: !propiedadesOpcionales.includes(key),
    };

    return acc;
  }, {});
  // *** Agregar a los inputs*****
  const datosPassword = {
    value: "",
    obligatorio: true,
  };
  const datosInitial = {
    ...datosInit,
    password: datosPassword,
    password2: datosPassword,
  };

  const [datos, setDatos] = useState({ ...datosInitial });
  const [fileFotoPerfil, setFileFotoPerfil] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setDatos({
        ...datos,
        urlFotoPerfil: {
          ...datos.urlFotoPerfil,
          value: imgUrl,
        },
      });
      setFileFotoPerfil(file);
      setHasImgCro(true);
    }
  };

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDatos((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  const validacionInicial = Object.keys(datosInitial).reduce((acc, key) => {
    acc[key] = {
      ...datosInitial[key],
      alerta: false,
      mensajeAlerta: "",
    };
    return acc;
  }, {});

  const [validacion, setValidacion] = useState({ ...validacionInicial });

  const enviarObjeto = async () => {
    let validacionAux = { ...validacionInicial };

    const validaciones = {
      passwordsIguales: true,
      passwordSegura: true,
      correoValido: true,
      todosCamposLlenos: true,
    };
    // Si las contraseñas son diferentes
    if (datos.password.value != datos.password2.value) {
      validacionAux = {
        ...validacionInicial,
        password: {
          ...validacionInicial.password,
          alerta: true,
          mensajeAlerta: "Las contraseñas no coinciden.",
        },
        password2: {
          ...validacionInicial.password2,
          alerta: true,
          mensajeAlerta: "Las contraseñas no coinciden.",
        },
      };

      validaciones.passwordsIguales = false;
    } else {
      // Validacion de complejidad de contraseña:
      //  1- Al menos 8 caracteres.
      //  2- Contiene al menos una letra mayúscula.
      //  3- Contiene al menos una letra minúscula.
      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (regex.test(datos.password.value) == false) {
        validacionAux = {
          ...validacionInicial,
          password: {
            ...validacionInicial.password,
            alerta: true,
            mensajeAlerta: "La contraseña debe cumplir con:",
            insegura: true,
          },
        };
        validaciones.passwordSegura = false;
      }
    }

    // si el correo no tiene formato de correo
    const regex3 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex3.test(datos.correo.value) == false) {
      validacionAux = {
        ...validacionAux,
        correo: {
          ...validacionAux.correo,
          alerta: true,
          mensajeAlerta: "Correo no valido",
        },
      };
      validaciones.correoValido = false;
    }

    // Si dejo algun campo vacio
    validacionAux = Object.keys(validacionAux).reduce((acc, key) => {
      if (datos[key].value == "" && datos[key].obligatorio == true) {
        validaciones.todosCamposLlenos = false;
        acc[key] = {
          ...datosInitial[key],
          alerta: true,
          mensajeAlerta: "Campo obligatorio",
        };
      } else {
        acc[key] = { ...validacionAux[key] };
      }

      return acc;
    }, {});

    setValidacion({ ...validacionAux });
    if (
      validaciones.passwordsIguales == true &&
      validaciones.passwordSegura == true &&
      validaciones.correoValido == true &&
      validaciones.todosCamposLlenos == true
    ) {
      try {
        setIsLoading(true);

        // Las propiedades que eran objeto, ahora conviertelas en propiedades simples
        const datosParsed = Object.keys(datos).reduce((acc, key) => {
          acc[key] = datos[key].value;

          return acc;
        }, {});

        await createUserWithEmailAndPassword(
          autenticar,
          datosParsed.correo,
          datosParsed.password
        );
        const { password, password2, ...datosSinPassword } = datosParsed;
        const usuar = auth.currentUser;
        const newUserEnviar = {
          ...UserSchema,
          ...datosSinPassword,
          fechaRegistro: ES6AFormat(new Date()),
          fechaNacimiento: ES6AFormat(new Date(datos.fechaNacimiento.value)),
          correo: usuar.email,
          userName: usuar.email.split("@")[0],
          urlFotoPerfil: "",
        };

        const storage = getStorage();

        await setDoc(doc(db, "usuarios", usuar.uid), newUserEnviar);

        try {
          // Cargar foto de perfil
          const nombreFoto =
            "avatars/" +
            newUserEnviar.userName +
            "__" +
            ES6AFormat(new Date()).replaceAll("/", "_") +
            "__" +
            usuar.uid;
          const storageRefFoto = ref(storage, nombreFoto);
          const usuarioActualizar = doc(db, "usuarios", usuar.uid);
          if (fileFotoPerfil) {
            await uploadBytes(storageRefFoto, fileFotoPerfil).then(() => {}); // Ahora entregame la url de la foto de perfil y colocasela en una propiedad del objeto de este usuario en la base de datos
            getDownloadURL(ref(storage, storageRefFoto)).then((url) =>
              updateDoc(usuarioActualizar, {
                urlFotoPerfil: url,
              })
            );
          }
        } catch (error) {
          console.log("error al cargar foto de perfil");
          console.log(error);
          setIsLoading(false);
        }

        setIsLoading(false);
        navigate("/");
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setMensajeAlerta("Error con la base de datos 1.");
        setTipoAlerta("error");
        setDispatchAlerta(true);
      }
    }
  };

  return (
    <>
      <Header />
      <BotonQuery datos={datos} validacion={validacion} />
      <CajaContenido>
        <Titulo>Registrarse</Titulo>

        <WrapInputs>
          <SeccionFotoPerfil>
            {hasImgCrop && (
              <ModalCroper>
                <WrapElementsCrops>
                  <TituloCrop>Seleccione el area a recortar</TituloCrop>
                  <CajCropper>
                    <Cropper
                      image={datos.urlFotoPerfil.value}
                      crop={crop}
                      zoom={1}
                      minZoom={1}
                      maxZoom={2}
                      cropShape={"round"}
                      objectFit={"cover"}
                      aspect={1}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                      onZoomChange={setZoom}
                    />
                  </CajCropper>
                  <CajaControlesCrop>
                    <BtnCrop className="" onClick={() => handleCrop()}>
                      Aceptar
                    </BtnCrop>
                    <BtnCrop
                      className="danger"
                      onClick={() => setHasImgCro(false)}
                    >
                      Cancelar
                    </BtnCrop>
                  </CajaControlesCrop>
                </WrapElementsCrops>
              </ModalCroper>
            )}
            <CajaFotoPerfil>
              <FotoPerfil src={datos.urlFotoPerfil.value} />
              <CajaIcono>
                <Icono
                  onClick={clickFromIcon}
                  icon={faCloudArrowUp}
                  title="Cargar foto de perfil"
                />
                <Parrafo className="fotoPerfil">Foto de perfil</Parrafo>
              </CajaIcono>
              <Input
                type="file"
                ref={inputRef}
                accept="image/*"
                // onClick={(e) => handleFile(e)}
                onChange={handleFile}
                className="none"
              />
            </CajaFotoPerfil>
          </SeccionFotoPerfil>
          <CajaInput>
            <TituloInput>Nombre</TituloInput>
            {validacion.nombre.alerta && (
              <Parrafo className="danger">
                {validacion.nombre.mensajeAlerta}
              </Parrafo>
            )}
            <Input
              value={datos.nombre.value}
              name="nombre"
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="Nombre"
              autoComplete="off"
              className={validacion.nombre.alerta ? "danger" : ""}
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Apellido</TituloInput>
            {validacion.apellido.alerta && (
              <Parrafo className="danger">
                {validacion.apellido.mensajeAlerta}
              </Parrafo>
            )}
            <Input
              value={datos.apellido.value}
              name="apellido"
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="Apellido"
              autoComplete="off"
              className={validacion.apellido.alerta ? "danger" : ""}
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Correo</TituloInput>
            {validacion.correo.alerta && (
              <Parrafo className="danger">
                {validacion.correo.mensajeAlerta}
              </Parrafo>
            )}
            <Input
              value={datos.correo.value}
              name="correo"
              onChange={(e) => handleInput(e)}
              type="email"
              placeholder="Correo"
              autoComplete="off"
              className={validacion.correo.alerta ? "danger" : ""}
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Telefono</TituloInput>
            {validacion.telefono.alerta && (
              <Parrafo className="danger">
                {validacion.telefono.mensajeAlerta}
              </Parrafo>
            )}
            <Input
              value={datos.telefono.value}
              name="telefono"
              onChange={(e) => handleInput(e)}
              type="email"
              placeholder="Telefono"
              autoComplete="off"
              className={validacion.telefono.alerta ? "danger" : ""}
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Contraseña</TituloInput>
            {validacion.password.alerta && (
              <Parrafo className="danger">
                {validacion.password.mensajeAlerta}
              </Parrafo>
            )}
            {validacion.password.insegura && (
              <>
                <ListaInsegura>
                  <ElementosInseguros>Al menos 8 caracteres</ElementosInseguros>
                  <ElementosInseguros>
                    Al menos una letra mayuscula
                  </ElementosInseguros>
                  <ElementosInseguros>
                    Al menos una letra minuscula
                  </ElementosInseguros>
                </ListaInsegura>
              </>
            )}
            <Input
              value={datos.password.value}
              name="password"
              onChange={(e) => handleInput(e)}
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              className={validacion.password.alerta ? "danger" : ""}
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Repetir contraseña</TituloInput>

            <Input
              value={datos.password2.value}
              name="password2"
              onChange={(e) => handleInput(e)}
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              className={validacion.password.alerta ? "danger" : ""}
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Fecha de nacimiento</TituloInput>
            {validacion.fechaNacimiento.alerta && (
              <Parrafo className="danger">
                {validacion.fechaNacimiento.mensajeAlerta}
              </Parrafo>
            )}
            <Input
              value={datos.fechaNacimiento.value}
              name="fechaNacimiento"
              onChange={(e) => handleInput(e)}
              type="date"
              placeholder="Fecha de nacimiento"
              autoComplete="off"
              className={validacion.fechaNacimiento.alerta ? "danger" : ""}
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Nacionalidad</TituloInput>
            {validacion.nacionalidad.alerta && (
              <Parrafo className="danger">
                {validacion.nacionalidad.mensajeAlerta}
              </Parrafo>
            )}
            <Input
              type="text"
              value={datos.nacionalidad.value}
              name="nacionalidad"
              onChange={(e) => handleInput(e)}
              placeholder="Nacionalidad"
              list="paises"
              autoComplete="off"
              className={validacion.nacionalidad.alerta ? "danger" : ""}
            />
            <DataListSimple id="paises">
              {ListaPaises.map((pais, index) => {
                return <Opcion key={index}>{pais.nombre}</Opcion>;
              })}
            </DataListSimple>
          </CajaInput>

          {/* <CajaInput className="checkbox">
            <Input type="checkbox" className="checkbox" />
            <Parrafo>Acepto los terminos y condiciones.</Parrafo>
          </CajaInput> */}
          {dispatchAlerta && (
            <CajaErrorAlEnviar>
              <Parrafo className="danger">{mensajeAlerta}</Parrafo>
            </CajaErrorAlEnviar>
          )}
          <CajaInput className="btn">
            <BtnSimple onClick={() => enviarObjeto()}>Registrarse</BtnSimple>
          </CajaInput>
        </WrapInputs>
      </CajaContenido>
      <Footer />
      {isLoading && <ModalLoading />}
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
  &.fotoPerfil {
    color: ${theme.secondary.coral};
    text-decoration: underline;
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
`;
const Opcion = styled(OpciongGneral)``;
const DataListSimple = styled(DataList)``;
const BtnSimple = styled(BtnGeneral)`
  border: 1px solid ${theme.primary.turquoise};
`;
const ListaInsegura = styled.ul`
  color: red;
  padding-left: 30px;
`;
const ElementosInseguros = styled.li``;
const CajaErrorAlEnviar = styled.div`
  width: 100%;
`;
const SeccionFotoPerfil = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CajaFotoPerfil = styled.div`
  position: relative;
`;
const FotoPerfil = styled.img`
  border-radius: 50%;
  border: 4px solid ${theme.primary.turquoise};
  height: 200px;
  width: 200px;
`;
const CajaIcono = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;
  border: 1px solid ${theme.secondary.coral};
  padding: 4px;
  cursor: pointer;
  transition: ease all 0.2s;
  background-color: ${theme.primary.neutral500};
  &:hover {
    border-radius: 4px;
    color: ${theme.primary.turquoise};
  }
`;
const ModalCroper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: #000000c6;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const WrapElementsCrops = styled.div``;
const CajCropper = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  border: 4px solid ${theme.secondary.coral};
`;
const TituloCrop = styled.h2`
  color: ${theme.primary.turquoise};
  font-size: 2rem;
  margin-bottom: 20px;
`;
const CajaControlesCrop = styled.div`
  width: 100%;
  min-height: 50px;
  position: relative;
  bottom: 0;
  /* background-color: red; */
`;
const BtnCrop = styled(BtnGeneral)``;
