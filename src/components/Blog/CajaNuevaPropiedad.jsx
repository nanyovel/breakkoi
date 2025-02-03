import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import {
  BtnGeneral,
  InputGeneral,
  MenuDesplegable,
  Opciones,
  TextAreaGeneral,
} from "../ElementosGenerales";
import BotonQuery from "../BotonQuery";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import db, { storage } from "../../firebase/firebaseConfig";
import { PostSchema } from "../../model/PostSchema";
import { ES6AFormat } from "../../libs/FechaFormat";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { AreasPropiedades, TipoLugaresCercanos } from "../../libs/Corporativo";
import { PropsSchema } from "../../model/PropsSchema";
import ListaAmenidades from "../../libs/ListaAmenidades";
import { generarSlug } from "../../libs/StringS";
import Modal from "../Modal";

export default function CajaNuevaPropiedad() {
  const valueOpcionFotoArea = {
    ...PropsSchema.areas[0].fotos[0],
    // ❌❌❌Estas dos propiedades son provisionales y no debe ser subida a la base de datos❌❌❌
    fotosAreaUrlLocal: [],
    filesImg: [],
  };
  const initialValue = {
    ...PropsSchema,
    areas: AreasPropiedades.map((area, index) => {
      return {
        area: area,
        select: false,
        fotos: [{ ...valueOpcionFotoArea }, { ...valueOpcionFotoArea }],
      };
    }),
    amenidades: ListaAmenidades.map((am, index) => {
      return {
        ...am,
        disponible: true,
        resumida: am.resumida == true,
      };
    }),

    keyWords: "",
  };

  const [valueInputProps, setValueInputProps] = useState(null);
  const [datosParsed, setDatosParsed] = useState(false);
  useEffect(() => {
    setValueInputProps({ ...initialValue });
    setDatosParsed(true);
  }, []);

  const handleInput = (e) => {
    const { value, name } = e.target;
    const tipoData = e.target.dataset.tipo;
    const indexData = e.target.dataset.index;

    if (name == "area") {
      const nuevaAreas = valueInputProps.areas.map((opcion, index) => {
        if (value == opcion.area) {
          return {
            ...opcion,
            select: true,
          };
        } else {
          return { ...opcion, select: false };
        }
      });

      setValueInputProps({
        ...valueInputProps,
        areas: [...nuevaAreas],
      });
    } else if (tipoData == "principales") {
      setValueInputProps({
        ...valueInputProps,
        principales: {
          ...valueInputProps.principales,
          [name]: {
            ...valueInputProps.principales[name],
            qty: value,
          },
        },
      });
    } else if (tipoData == "amenidades") {
      setValueInputProps({
        ...valueInputProps,
        amenidades: valueInputProps.amenidades.map((am, index) => {
          return {
            ...am,
            [name]: index == indexData ? e.target.checked : am[name],
          };
        }),
      });
    } else {
      setValueInputProps((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const [hasModal, setHasModal] = useState(false);
  const [imagenesSelectArea, setImagenesSelectArea] = useState([]);
  const handleInputSub = (e) => {
    const { name, value } = e.target;
    const indexData = e.target.dataset.index;
    if (name == "textoImagen") {
      setValueInputProps((prevState) => ({
        ...prevState,
        areas: prevState.areas.map((area, index) => {
          if (area.select == true) {
            return {
              ...area,
              fotos: area.fotos.map((foto, i) => {
                if (i == indexData) {
                  return {
                    ...foto,
                    texto: value,
                  };
                } else {
                  return foto;
                }
              }),
            };
          } else {
            return area;
          }
        }),
      }));
    } else if (name == "mostrarFotos") {
      let areaSelect = [];
      console.log(hasOtra);
      if (!hasOtra) {
        areaSelect = valueInputProps.areas.find((area) => area.select);
      } else if (hasOtra) {
        areaSelect = valueOtra;
      }

      setHasModal(true);
      console.log(areaSelect);
      setImagenesSelectArea(areaSelect.fotos);
    }
  };

  //   Manejo de la imagen principal
  const [fileImgDestacada, setFileImgDestacada] = useState(null);
  const handleFile = (e) => {
    const { name, files } = e.target;
    const indexData = e.target.dataset.index;
    if (files) {
      if (name == "imagenDestacada") {
        const archivo = files[0];
        const imgUrl = URL.createObjectURL(archivo);
        setValueInputProps((prevState) => ({
          ...prevState,
          imagenDestacada: imgUrl,
        }));
        setFileImgDestacada(archivo);
      } else if (name == "imagenArea") {
        const archivo = files[0];
        const imgUrl = URL.createObjectURL(archivo);

        setValueInputProps((prevState) => ({
          ...prevState,
          areas: prevState.areas.map((area) => {
            if (area.select) {
              return {
                ...area,
                fotos: area.fotos.map((foto, i) => {
                  if (i == indexData) {
                    return {
                      ...foto,
                      fotosAreaUrlLocal: imgUrl,
                      filesImg: archivo,
                    };
                  } else {
                    return foto;
                  }
                }),
              };
            } else {
              return area;
            }
          }),
        }));
      } else if (name == "imagenAreaOtra") {
        const archivo = files[0];
        const imgUrl = URL.createObjectURL(archivo);
        setValueOtra({
          ...valueOtra,
          fotos: valueOtra.fotos.map((foto, i) => {
            if (i == indexData) {
              return {
                ...foto,
                fotosAreaUrlLocal: imgUrl,
                filesImg: archivo,
              };
            } else {
              return foto;
            }
          }),
        });
      }
    }
  };

  // ********* MANEJANDO NUEVA AREA *********
  const [hasOtra, setHasOtra] = useState(false);
  const initialOtra = {
    ...initialValue.areas[0],
    area: "",
  };
  const [valueOtra, setValueOtra] = useState({ ...initialOtra });

  const handleOtra = (e) => {
    const indexData = e.target.dataset.index;
    const { name, value } = e.target;
    if (name == "otra") {
      setValueOtra({
        ...valueOtra,
        area: value,
      });
    } else if (name == "subTextoImagen") {
      setValueOtra({
        ...valueOtra,
        fotos: valueOtra.fotos.map((foto, i) => {
          if (i == indexData) {
            return {
              ...foto,
              texto: value,
            };
          } else {
            return foto;
          }
        }),
      });
    }

    // Adicionar o quitar otra
    const dataNombre = e.target.dataset.nombre;
    if (dataNombre == "hasOtra") {
      setValueInputProps({
        ...valueInputProps,
        areas: valueInputProps.areas.map((area, index) => {
          return {
            ...area,
            select: false,
          };
        }),
      });
      setHasOtra(true);
    } else if (dataNombre == "noneOtra") {
      setHasOtra(false);
      setValueOtra({ ...initialOtra });
    } else if (dataNombre == "salvar") {
      setHasOtra(false);
      // const nuevoValor = { select:
      // false, fotos: [], area: "francia" };
      const areas = [...valueInputProps.areas, valueOtra];
      // setValueInputProps((prevState) => ({
      //   ...prevState,
      //   areas: areas,
      // }));

      setValueInputProps({
        ...valueInputProps,
        areas: areas,
      });
      setValueOtra({ ...initialOtra });
    }
  };

  const addFotoArea = (operacion) => {
    console.log(hasOtra);
    console.log(operacion);
    if (operacion == "suma") {
      if (!hasOtra) {
        setValueInputProps((prevState) => ({
          ...prevState,
          areas: prevState.areas.map((area, index) => {
            return {
              ...area,
              fotos: area.select
                ? [...area.fotos, { ...valueOpcionFotoArea }]
                : [...area.fotos],
            };
          }),
        }));
      } else {
        setValueOtra({
          ...valueOtra,
          fotos: [...valueOtra.fotos, { ...valueOpcionFotoArea }],
        });
      }
    } else if (operacion == "resta") {
      if (!hasOtra) {
        setValueInputProps((prevState) => ({
          ...prevState,
          areas: prevState.areas.map((area, index) => {
            return {
              ...area,
              fotos: area.select
                ? area.fotos.filter(
                    (_, index) => index !== area.fotos.length - 1
                  )
                : [...area.fotos],
            };
          }),
        }));
      } else {
        console.log("llega");
        setValueOtra({
          ...valueOtra,
          fotos: valueOtra.fotos.filter(
            (_, index) => index !== valueOtra.fotos.length - 1
          ),
        });
      }
    }
  };

  const anchoIconos = "2rem";

  const valueOpcionLugares = {
    ...PropsSchema.lugaresCercano[0].lugares[0],
  };
  const tipoLugarCercanoAux = [...TipoLugaresCercanos];
  const [valueLugarCercano, setValueLugarCercano] = useState({
    lugares: tipoLugarCercanoAux.map((area, index) => {
      return {
        select: false,
        area: area,
        lugares: [{ ...valueOpcionLugares }],
      };
    }),
  });

  const enviarObjeto = async () => {
    // SI algun campo esta vacio
    // SI algun campo esta vacio
    // SI algun campo esta vacio

    try {
      const tituloSlug = generarSlug(valueInputProps.titulo);
      const docRef = doc(collection(db, "post"));

      const urlSinEspacios = valueInputProps.keyWords.replaceAll(" ", ",");
      const texto = urlSinEspacios;
      const textoSinComasRepetidas = texto.replace(/,+/g, ",");
      const textoMin = textoSinComasRepetidas.toLowerCase();
      const urlArray = textoMin.split(",");
      await setDoc(docRef, {
        ...PostSchema,
        ...valueInputProps,
        createAt: ES6AFormat(new Date()),
        timestamp: Timestamp.fromDate(new Date()),
        url: tituloSlug,
        keyWords: urlArray,
      });
      setValueInputProps({ ...initialValue });

      try {
        // Cargar foto de perfil
        const nombreFoto = "imgPost/" + tituloSlug + "__imgDestacada";
        const storageRefFoto = ref(storage, nombreFoto);
        const postActualizar = doc(db, "post", docRef.id);
        if (fileImgDestacada) {
          await uploadBytes(storageRefFoto, fileImgDestacada).then(() => {}); // Ahora entregame la url de la foto  y colocasela en una propiedad del objeto a actulizar en la base de datos
          getDownloadURL(ref(storage, storageRefFoto)).then((url) =>
            updateDoc(postActualizar, {
              imagenDestacada: url,
            })
          );
        }
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    datosParsed && (
      <Container>
        <BotonQuery
          fileImgDestacada={fileImgDestacada}
          valueInputProps={valueInputProps}
          valueOtra={valueOtra}
          ListaAmenidades={ListaAmenidades}
        />
        <CajaInput>
          <TituloInput>Titulo</TituloInput>
          <Input
            value={valueInputProps.titulo}
            name="titulo"
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Titulo de la propiedad"
            autoComplete="off"
          />
        </CajaInput>
        <CajaInput>
          <TituloInput>Subtitulo</TituloInput>
          <Input
            value={valueInputProps.subTitulo}
            name="subTitulo"
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Subtitulo del la propiedad"
            autoComplete="off"
          />
        </CajaInput>
        <CajaInput>
          <TituloInput>Imagen destacada</TituloInput>
          <CajaImagenDestaca>
            <ImgDestacada src={valueInputProps.imagenDestacada} />
          </CajaImagenDestaca>
          <Input
            type="file"
            name="imagenDestacada"
            accept="image/*"
            onChange={(e) => handleFile(e)}
          />
        </CajaInput>
        <CajaInput>
          <TituloInput>Texto resumido</TituloInput>
          <Textarea
            value={valueInputProps.textoResumen}
            name="textoResumen"
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Resumen"
            autoComplete="off"
          />
        </CajaInput>
        <CajaInput>
          <TituloInput>Fotos de las areas:</TituloInput>
          <SubCajaInputN1>
            {!hasOtra ? (
              <CajaInput className="internalN1">
                <TituloInternoN2>Area</TituloInternoN2>
                <MenuDespSimple
                  value={
                    valueInputProps.areas.find((opcion) => opcion.select)
                      ?.area || ""
                  }
                  name="area"
                  onChange={(e) => handleInput(e)}
                >
                  <Opciones disabled defaultValue value={""}>
                    Seleccione area
                  </Opciones>
                  {valueInputProps.areas.map((opcion, index) => {
                    return (
                      <Opciones key={index} value={opcion.area}>
                        {opcion.area}
                      </Opciones>
                    );
                  })}
                </MenuDespSimple>
                <WrapSubInternal>
                  {"" ||
                    valueInputProps.areas
                      .find((opcion) => opcion.select)
                      ?.fotos.map((opcion, index) => {
                        return (
                          <CajaInput key={index} className="subInternalN2">
                            <Input
                              value={opcion.texto}
                              name="textoImagen"
                              onChange={(e) => handleInputSub(e)}
                              placeholder="Texto imagen (opcional)"
                              autoComplete="off"
                              className="tituloImg"
                              data-index={index}
                            />
                            <Input
                              className="tituloImg"
                              type="file"
                              name="imagenArea"
                              accept="image/*"
                              onChange={(e) => handleFile(e)}
                              // multiple={true}
                              data-index={index}
                            />
                          </CajaInput>
                        );
                      })}
                </WrapSubInternal>

                {valueInputProps.areas.find((opcion) => opcion.select) && (
                  <CajaBtnInternal>
                    <BtnSimple
                      onClick={(e) => addFotoArea("suma")}
                      className="small"
                    >
                      +
                    </BtnSimple>
                    <BtnSimple
                      onClick={(e) => addFotoArea("resta")}
                      className="small"
                    >
                      -
                    </BtnSimple>
                    <BtnSimple
                      className="small"
                      name="mostrarFotos"
                      onClick={(e) => handleInputSub(e)}
                    >
                      Fotos
                    </BtnSimple>
                  </CajaBtnInternal>
                )}
              </CajaInput>
            ) : (
              <CajaInput className="internalN1">
                <TituloInternoN2>Otra indique cual:</TituloInternoN2>
                <Input
                  value={valueOtra.area}
                  name="otra"
                  onChange={(e) => handleOtra(e)}
                  placeholder="Area adicional"
                  autoComplete="off"
                />
                <WrapSubInternal>
                  {valueOtra.fotos.map((foto, index) => {
                    return (
                      <CajaInput key={index} className="subInternalN2">
                        <Input
                          value={foto.texto}
                          name="subTextoImagen"
                          onChange={(e) => handleOtra(e)}
                          placeholder="Texto imagen (opcional)"
                          autoComplete="off"
                          className="tituloImg"
                          data-index={index}
                        />
                        <Input
                          className="tituloImg"
                          type="file"
                          name="imagenAreaOtra"
                          accept="image/*"
                          onChange={(e) => handleFile(e)}
                          // multiple={true}
                          data-index={index}
                        />
                      </CajaInput>
                    );
                  })}
                </WrapSubInternal>
                <CajaBtnInternal>
                  <BtnSimple
                    onClick={(e) => addFotoArea("suma")}
                    className="small"
                  >
                    +
                  </BtnSimple>
                  <BtnSimple
                    onClick={(e) => addFotoArea("resta")}
                    className="small"
                  >
                    -
                  </BtnSimple>
                  <BtnSimple
                    className="small"
                    name="mostrarFotos"
                    onClick={(e) => handleInputSub(e)}
                  >
                    Fotos
                  </BtnSimple>
                </CajaBtnInternal>
              </CajaInput>
            )}
            <CajaInput className="internalN1">
              <TituloInternoN2>Adicionar area</TituloInternoN2>
              <Input
                name="parrafoPrincipalResumido"
                autoComplete="off"
                className="none"
                disabled
              />
              {!hasOtra ? (
                <WrapSubInternal
                  onClick={(e) => handleOtra(e)}
                  className="adicional"
                  title="Adicionar area"
                  data-nombre="hasOtra"
                >
                  <Parrafo
                    onClick={(e) => handleOtra(e)}
                    data-nombre="hasOtra"
                    className="mas"
                  >
                    +
                  </Parrafo>
                </WrapSubInternal>
              ) : (
                <>
                  <WrapSubInternal
                    onClick={(e) => handleOtra(e)}
                    className="adicional none"
                    title="Adicionar area"
                    data-nombre="salvar"
                  >
                    <Parrafo
                      onClick={(e) => handleOtra(e)}
                      data-nombre="salvar"
                      className="mas"
                    >
                      Salvar
                    </Parrafo>
                  </WrapSubInternal>
                  <WrapSubInternal
                    onClick={(e) => handleOtra(e)}
                    className="adicional none"
                    title="Adicionar area"
                    data-nombre="noneOtra"
                  >
                    <Parrafo
                      onClick={(e) => handleOtra(e)}
                      data-nombre="noneOtra"
                      className="mas"
                    >
                      Cancelar
                    </Parrafo>
                  </WrapSubInternal>
                </>
              )}
            </CajaInput>
          </SubCajaInputN1>
        </CajaInput>
        <CajaInput>
          <TituloInput>Principales</TituloInput>
          <SubCajaInputN1 className="row">
            <CajaInput className="mitad">
              <TituloInternoN1>Cantidad de huespedes</TituloInternoN1>
              <Input
                value={valueInputProps.principales.huespedes.qty}
                name="huespedes"
                onChange={(e) => handleInput(e)}
                placeholder="Huespedes"
                autoComplete="off"
                data-tipo={"principales"}
              />
            </CajaInput>
            <CajaInput className="mitad">
              <TituloInternoN1>Cantidad de habitaciones</TituloInternoN1>
              <Input
                value={valueInputProps.principales.habitaciones.qty}
                name="habitaciones"
                onChange={(e) => handleInput(e)}
                placeholder="Habitaciones"
                autoComplete="off"
                data-tipo={"principales"}
              />
            </CajaInput>
            <CajaInput className="mitad">
              <TituloInternoN1>Cantidad de camas</TituloInternoN1>
              <Input
                value={valueInputProps.principales.camas.qty}
                name="camas"
                onChange={(e) => handleInput(e)}
                placeholder="Huespedes"
                autoComplete="off"
                data-tipo={"principales"}
              />
            </CajaInput>
            <CajaInput className="mitad">
              <TituloInternoN1>Cantidad de baños</TituloInternoN1>
              <Input
                value={valueInputProps.principales.bannios.qty}
                name="bannios"
                onChange={(e) => handleInput(e)}
                placeholder="Habitaciones"
                autoComplete="off"
                data-tipo={"principales"}
              />
            </CajaInput>
          </SubCajaInputN1>
        </CajaInput>
        <CajaInput className="padding">
          <TituloInput>Amenidades</TituloInput>
          <SubCajaInputN1 className="mediana">
            <CajaTabla>
              <Tabla>
                <thead>
                  <Filas className="cabeza">
                    <CeldaHead>N°</CeldaHead>
                    <CeldaHead>Categoria</CeldaHead>
                    <CeldaHead>Icono</CeldaHead>
                    <CeldaHead>Descripcion</CeldaHead>
                    <CeldaHead>Resumido</CeldaHead>
                    <CeldaHead>Disponible</CeldaHead>
                  </Filas>
                </thead>
                <tbody>
                  {valueInputProps.amenidades.map((am, index) => {
                    return (
                      <Filas key={index}>
                        <CeldasBody>{index}</CeldasBody>
                        <CeldasBody> {am.categoria} </CeldasBody>
                        <CeldasBody>
                          {am.iconoImg ? (
                            <ImgIcon $width={anchoIconos} src={am.icono} />
                          ) : (
                            <am.icono
                              width={anchoIconos}
                              color={theme.secondary.coral}
                            />
                          )}
                        </CeldasBody>

                        <CeldasBody> {am.texto} </CeldasBody>
                        <CeldasBody>
                          <Input
                            checked={am.resumida}
                            onChange={(e) => handleInput(e)}
                            className="checkbox"
                            name="resumida"
                            type="checkbox"
                            data-tipo={"amenidades"}
                            data-index={index}
                          />
                        </CeldasBody>
                        <CeldasBody>
                          <Input
                            checked={am.disponible}
                            onChange={(e) => handleInput(e)}
                            className="checkbox"
                            name="disponible"
                            type="checkbox"
                            data-tipo={"amenidades"}
                            data-index={index}
                          />
                        </CeldasBody>
                      </Filas>
                    );
                  })}
                </tbody>
              </Tabla>
            </CajaTabla>
          </SubCajaInputN1>
        </CajaInput>
        <CajaInput>
          <TituloInput>Texto copy</TituloInput>
          <SubCajaInputN1 className="colum">
            <CajaInput className="internalN1 ancho100">
              <TituloInternoN1>Titulo principal</TituloInternoN1>
              <Input
                value={valueInputProps.parrafoPrincipalResumido}
                name="parrafoPrincipalResumido"
                onChange={(e) => handleInput(e)}
                placeholder="Parrafo principal"
                autoComplete="off"
              />
            </CajaInput>
            <CajaInput className="internalN1 ancho100">
              <TituloInternoN1>Texto resumido</TituloInternoN1>
              <Textarea
                value={valueInputProps.parrafoPrincipalResumido}
                name="parrafoPrincipalResumido"
                onChange={(e) => handleInput(e)}
                placeholder="Parrafo principal"
                autoComplete="off"
              />
            </CajaInput>
            <CajaInput className="internalN1 ancho100 scroll">
              <CajaSubInternalN2 className="parrafo">
                <TituloInternoN1 className=" romo">Parrafo 1</TituloInternoN1>
                <TituloInternoN2>Titulo</TituloInternoN2>
                <Input
                  value={valueInputProps.parrafoPrincipalResumido}
                  name="parrafoPrincipalResumido"
                  onChange={(e) => handleInput(e)}
                  placeholder="Parrafo principal"
                  autoComplete="off"
                />
                <TituloInternoN2>Parrafo</TituloInternoN2>
                <Textarea
                  value={valueInputProps.parrafoPrincipalResumido}
                  name="parrafoPrincipalResumido"
                  onChange={(e) => handleInput(e)}
                  placeholder="Parrafo"
                  autoComplete="off"
                />
              </CajaSubInternalN2>
              <CajaSubInternalN2 className="parrafo">
                <TituloInternoN1 className=" romo">Parrafo 2</TituloInternoN1>
                <TituloInternoN2>Titulo</TituloInternoN2>
                <Input
                  value={valueInputProps.parrafoPrincipalResumido}
                  name="parrafoPrincipalResumido"
                  onChange={(e) => handleInput(e)}
                  placeholder="Parrafo"
                  autoComplete="off"
                />
                <TituloInternoN2>Parrafo</TituloInternoN2>
                <Textarea
                  value={valueInputProps.parrafoPrincipalResumido}
                  name="parrafoPrincipalResumido"
                  onChange={(e) => handleInput(e)}
                  placeholder="Parrafo "
                  autoComplete="off"
                />
              </CajaSubInternalN2>
              <CajaSubInternalN2 className="parrafo">
                <TituloInternoN1 className=" romo">Parrafo 3</TituloInternoN1>
                <TituloInternoN2>Titulo</TituloInternoN2>
                <Input
                  value={valueInputProps.parrafoPrincipalResumido}
                  name="parrafoPrincipalResumido"
                  onChange={(e) => handleInput(e)}
                  placeholder="Parrafo principal"
                  autoComplete="off"
                />
                <TituloInternoN2>Parrafo</TituloInternoN2>
                <Textarea
                  value={valueInputProps.parrafoPrincipalResumido}
                  name="parrafoPrincipalResumido"
                  onChange={(e) => handleInput(e)}
                  placeholder="Parrafo principal"
                  autoComplete="off"
                />
              </CajaSubInternalN2>
            </CajaInput>
          </SubCajaInputN1>
        </CajaInput>
        <CajaInput>
          <TituloInput>Lugares cercanos:</TituloInput>
          <SubCajaInputN1>
            {!hasOtra ? (
              <CajaInput className="internalN1">
                <TituloInternoN2>Area</TituloInternoN2>
                <MenuDespSimple
                  // value={
                  //   valueInput.areas.find((opcion) => opcion.select)?.area || ""
                  // }
                  name="area"
                  // onChange={(e) => handleInput2(e)}
                >
                  <Opciones disabled defaultValue value={""}>
                    Seleccione tipo
                  </Opciones>
                  {valueLugarCercano.lugares.map((opcion, index) => {
                    return (
                      <Opciones key={index} value={opcion}>
                        {opcion.area}
                      </Opciones>
                    );
                  })}
                </MenuDespSimple>
                <WrapSubInternal>
                  {"" ||
                    valueInputProps.areas
                      .find((opcion) => opcion.select)
                      ?.fotos.map((opcion, index) => {
                        return (
                          <CajaInput key={index} className="subInternalN2">
                            <Input
                              value={valueInputProps.parrafoPrincipalResumido}
                              name="parrafoPrincipalResumido"
                              onChange={(e) => handleInput(e)}
                              placeholder="Texto imagen (opcional)"
                              autoComplete="off"
                              className="tituloImg"
                            />
                            <Input
                              className="tituloImg"
                              type="file"
                              name="imagenDestacada"
                              accept="image/*"
                              onChange={handleFile}
                            />
                          </CajaInput>
                        );
                      })}
                </WrapSubInternal>
                <CajaBtnInternal>
                  <BtnSimple
                    onClick={(e) => addFotoArea("suma")}
                    className="small"
                  >
                    +
                  </BtnSimple>
                  <BtnSimple
                    onClick={(e) => addFotoArea("resta")}
                    className="small"
                  >
                    -
                  </BtnSimple>
                  <BtnSimple
                    className="small"
                    name="mostrarFotos"
                    onClick={(e) => handleInputSub(e)}
                  >
                    Fotos
                  </BtnSimple>
                </CajaBtnInternal>
              </CajaInput>
            ) : (
              <CajaInput className="internalN1">
                <TituloInternoN2>Otra indique cual:</TituloInternoN2>
                <Input
                  value={valueOtra.area}
                  name="otra"
                  onChange={(e) => handleOtra(e)}
                  placeholder="Area adicional"
                  autoComplete="off"
                />
                <WrapSubInternal>
                  <CajaInput className="subInternalN2">
                    <Input
                      value={valueInputProps.parrafoPrincipalResumido}
                      name="parrafoPrincipalResumido"
                      onChange={(e) => handleInput(e)}
                      placeholder="Texto imagen (opcional)"
                      autoComplete="off"
                      className="tituloImg"
                    />
                    <Input
                      type="file"
                      name="imagenDestacada"
                      accept="image/*"
                      onChange={handleFile}
                    />
                  </CajaInput>
                  <CajaInput className="subInternalN2">
                    <Input
                      value={valueInputProps.parrafoPrincipalResumido}
                      name="parrafoPrincipalResumido"
                      onChange={(e) => handleInput(e)}
                      placeholder="Texto imagen (opcional)"
                      autoComplete="off"
                      className="tituloImg"
                    />
                    <Input
                      type="file"
                      name="imagenDestacada"
                      accept="image/*"
                      onChange={handleFile}
                    />
                  </CajaInput>
                </WrapSubInternal>
                <CajaBtnInternal>
                  <BtnSimple
                    onClick={(e) => addFotoArea("suma")}
                    className="small"
                  >
                    +
                  </BtnSimple>
                  <BtnSimple
                    onClick={(e) => addFotoArea("resta")}
                    className="small"
                  >
                    -
                  </BtnSimple>
                  <BtnSimple
                    className="small"
                    name="mostrarFotos"
                    onClick={(e) => handleInputSub(e)}
                  >
                    Fotos
                  </BtnSimple>
                </CajaBtnInternal>
              </CajaInput>
            )}
            <CajaInput className="internalN1">
              <TituloInternoN2>Adicionar area</TituloInternoN2>
              <Input
                name="parrafoPrincipalResumido"
                autoComplete="off"
                className="none"
                disabled
              />
              {!hasOtra ? (
                <WrapSubInternal
                  onClick={(e) => handleOtra(e)}
                  className="adicional"
                  title="Adicionar area"
                  data-nombre="hasOtra"
                >
                  <Parrafo
                    onClick={(e) => handleOtra(e)}
                    data-nombre="hasOtra"
                    className="mas"
                  >
                    +
                  </Parrafo>
                </WrapSubInternal>
              ) : (
                <>
                  <WrapSubInternal
                    onClick={(e) => handleOtra(e)}
                    className="adicional none"
                    title="Adicionar area"
                    data-nombre="salvar"
                  >
                    <Parrafo
                      onClick={(e) => handleOtra(e)}
                      data-nombre="salvar"
                      className="mas"
                    >
                      Salvar
                    </Parrafo>
                  </WrapSubInternal>
                  <WrapSubInternal
                    onClick={(e) => handleOtra(e)}
                    className="adicional none"
                    title="Adicionar area"
                    data-nombre="noneOtra"
                  >
                    <Parrafo
                      onClick={(e) => handleOtra(e)}
                      data-nombre="noneOtra"
                      className="mas"
                    >
                      Cancelar
                    </Parrafo>
                  </WrapSubInternal>
                </>
              )}
            </CajaInput>
          </SubCajaInputN1>
        </CajaInput>
        <CajaInput>
          <TituloInput>Location</TituloInput>
          <Input
            value={valueInputProps.titulo}
            name="titulo"
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Titulo del propiedad"
            autoComplete="off"
          />
        </CajaInput>
        <CajaInput>
          <TituloInput>Calificacion promedio</TituloInput>
          <Input
            value={valueInputProps.titulo}
            name="titulo"
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Titulo del propiedad"
            autoComplete="off"
          />
        </CajaInput>
        <CajaInput>
          <BtnSimple onClick={() => enviarObjeto()}>Aceptar</BtnSimple>
        </CajaInput>
        {hasModal && (
          <Modal setHasModal={setHasModal} titulo={"Fotos area: "}>
            <CajaViewFotoArea>
              {imagenesSelectArea.map((img, index) => {
                return (
                  <WrapFoto key={index}>
                    <TituloImg>{img.texto}</TituloImg>
                    <br />
                    <ImgArea src={img.fotosAreaUrlLocal} />
                  </WrapFoto>
                );
              })}
            </CajaViewFotoArea>
          </Modal>
        )}
      </Container>
    )
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 200px;
`;

const CajaInput = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;

  &.internalN1 {
    border: 1px solid black;
    width: 250px;
    background-color: ${theme.primary.neutral600};
    border-radius: 5px;
    padding: 8px;
  }
  &.subInternalN2 {
    width: 100%;
    padding: 5px;
    background-color: ${theme.primary.neutral650};
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  &.checkbox {
    min-height: 25px;
    padding: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
  }
  &.mitad {
    flex: 0 1 calc(50% - 15px);
  }
  &.ancho100 {
    width: 100%;
  }
  &.scroll {
    height: 400px;
    overflow-y: scroll;
    background-color: ${theme.primary.neutral500};
  }
`;

const TituloInput = styled.p`
  font-size: 1.4rem;
  color: ${theme.complementary.midnightBlue};
  color: ${theme.secondary.coral};
  font-weight: bold;
  /* color: ${theme.primary.neutral300}; */
`;
const Input = styled(InputGeneral)`
  &.checkbox {
    background-color: red;
    width: 20px;
  }
  &.tituloImg {
    margin-bottom: 2px;
    width: 100%;
    min-width: 100%;
  }

  &.radio {
    width: 15px;
    &:focus {
      border: 1px solid black;
      width: 25px;
    }
  }
  &.none {
    background-color: transparent;
    border: none;
  }
`;
const Textarea = styled(TextAreaGeneral)`
  resize: vertical;
`;
const BtnSimple = styled(BtnGeneral)`
  &.small {
    min-width: 28%;
    height: 30px;
    padding: 0;
    font-size: 0.9rem;
    color: ${theme.primary.neutral650};
  }
`;

const SubCajaInputN1 = styled.div`
  background-color: ${theme.primary.neutral500};
  border-radius: 4px;
  padding-left: 25px;
  padding: 15px;
  display: flex;
  gap: 5px;
  justify-content: center;
  &.row {
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
  }
  &.mediana {
    height: 400px;
  }
  &.colum {
    flex-direction: column;
  }
`;
const TituloInternoN1 = styled.p`
  color: black;
  padding: 4px;
  color: ${theme.primary.neutral650};
  color: white;
  &.bolder {
    border-bottom: 4px solid black;
    margin-bottom: 8px;
    color: black;
  }
  &.romo {
    color: ${theme.primary.neutral200};
    text-decoration: underline;
  }
`;
const TituloInternoN2 = styled.p`
  color: black;
  padding: 4px;
  color: ${theme.primary.neutral200};
`;
const MenuDespSimple = styled(MenuDesplegable)`
  width: 100%;
  border: 1px solid black;
`;
const WrapSubInternal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  overflow-y: auto;
  height: 200px;
  width: 100%;
  border: 4px solid ${theme.primary.neutral550};
  &.adicional {
    overflow: hidden;
    transition: ease all 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    &.none {
      height: 100px;
    }
    &:hover {
      cursor: pointer;
      background-color: ${theme.primary.neutral650};
    }
  }
`;
const Parrafo = styled.p`
  &.mas {
    font-size: 3rem;
    color: ${theme.primary.neutral500};
  }
`;
const CajaBtnInternal = styled.div``;

const ImgIcon = styled.img`
  width: ${(props) => props.$width};
`;
const CajaSubInternalN2 = styled.div`
  background-color: ${theme.primary.neutral500};
  width: 100%;
  min-height: 200px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 10px;
  &.parrafo {
    padding: 10px;
    background-color: ${theme.primary.neutral600};
    /* background-color: red; */
  }
`;
// /////////

const CajaTabla = styled.div`
  padding: 10px;
  overflow-x: scroll;
  height: 85%;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  &::-webkit-scrollbar {
    height: 4px;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #19b4ef;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #19b4ef;
    border-radius: 7px;
  }
  background-color: ${theme.primary.neutral600};
  border-radius: 6px;
`;
const Tabla = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin: auto;
  margin-bottom: 25px;
  color: ${theme.primary.neutral200};
`;

const Filas = styled.tr`
  &.body {
    font-weight: normal;
    /* border-bottom: 1px solid #49444457; */
    border-bottom: 1px solid red;
    background-color: ${theme.azul5Osc};
  }

  &.cabeza {
    background-color: ${theme.azulOscuro1Sbetav};
  }
  color: ${theme.textoBlancoEdtem};
  &:hover {
    background-color: ${theme.azulOscuro1Sbetav};
  }
  &.modalH {
    background-color: ${theme.azulOscuro1Sbetav3};
    /* background-color: red; */
    /* width: 100%; */
  }
`;

const CeldaHead = styled.th`
  /* border-bottom: 1px solid #605e5e; */
  padding: 3px 7px;
  text-align: center;
  /* border: 1px solid #000; */
  border: 1px solid ${theme.azul1};

  font-size: 0.9rem;
`;
const CeldasBody = styled.td`
  font-size: 0.9rem;
  /* border: 1px solid black; */

  border: 1px solid ${theme.azul1};
  height: 25px;
  padding-left: 5px;
  padding-right: 5px;

  &.clicKeable {
    cursor: pointer;
    &:hover {
      /* text-decoration: underline; */
    }
  }

  text-align: center;
`;
const CajaImagenDestaca = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${theme.primary.neutral200};
  overflow: hidden;
`;
const ImgDestacada = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const CajaViewFotoArea = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
const WrapFoto = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;
const CajaImg = styled.div``;
const ImgArea = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* margin-bottom: 60px; */
`;
const TituloImg = styled.h2`
  text-decoration: underline;
  color: ${theme.secondary.coral};
`;
