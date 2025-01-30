import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { TituloH1 } from "../../components/ElementosGenerales";
import ImgVilla1 from "./../../assets/store/villa1.jpg";
import ImgGirl from "./../../../public/img/girlSand.jpg";
import SideBarBlog from "../../components/Blog/SideBarBlog";
import { fetchGetDocs, obtenerDocPorId } from "../../libs/FetchFirebase";
import { useAuth } from "../../context/AuthContext";
import BotonQuery from "../../components/BotonQuery";

export default function Blog1RazonesVillaVSHotel({
  relacionados,
  currentPost,
  setCurrentPost,
}) {
  const usuario = useAuth().usuario;
  const idPost = "WEFBb4VdA4BX6cmr4tKB";

  useEffect(() => {
    (async () => {
      const post = await obtenerDocPorId("post", idPost);
      console.log(post);
      setCurrentPost(post);
    })();
  }, []);
  return (
    currentPost && (
      <Container>
        <CajaTitulo>
          <Titulo>{currentPost.titulo}</Titulo>
        </CajaTitulo>
        <WrapContenido>
          <CajaInterna className="izq">
            <Img src={currentPost.imagenDestacada} />
            <CajaTexto>
              <BloqueParrafos>
                <Parrafo className="introductorio">
                  En este artículo te ofrecemos un listado de las principales
                  razones por las que consideramos que es mejor hospedarte en
                  una villa que en un hotel en <b>Punta Cana</b>.
                </Parrafo>
                <Parrafo>
                  Cuando planeas tus vacaciones en <b>Punta Cana</b>,
                  probablemente lo primero que venga a tu mente sea reservar una
                  habitación en un hotel todo incluido.
                </Parrafo>
                <br />
                <Parrafo>
                  Sin embargo, ¿te has preguntado si una villa privada podría
                  ser una mejor opción? Hospedarte en una villa puede ofrecerte
                  ventajas únicas que difícilmente encontrarás en un hotel. Aquí
                  te damos 5 razones por las que deberías considerar esta opción
                  para tu próxima escapada tropical.
                </Parrafo>
              </BloqueParrafos>

              <CajaRazon>
                <CajaEncabezado>
                  <TituloRazon>
                    1-Privacidad Total: Tu Espacio, Tus Reglas
                  </TituloRazon>
                </CajaEncabezado>
                <Parrafo>
                  Imagina despertarte sin el ruido de otros huéspedes o el
                  bullicio de un restaurante lleno. Al hospedarte en una villa,
                  tienes un espacio exclusivamente para ti y tus acompañantes.
                  Piscina privada, terrazas tranquilas y la libertad de
                  disfrutar tus vacaciones a tu ritmo, sin interrupciones. Es la
                  elección perfecta para quienes buscan paz y relajación.
                </Parrafo>
              </CajaRazon>
              <CajaRazon>
                <CajaEncabezado>
                  <TituloRazon>2-Espacio Amplio y Personalizado</TituloRazon>
                </CajaEncabezado>
                <Parrafo>
                  Una villa ofrece mucho más que una simple habitación. Desde
                  amplias salas de estar hasta cocinas totalmente equipadas y
                  varias habitaciones, tendrás espacio de sobra para toda tu
                  familia o grupo de amigos. Además, puedes personalizar tu
                  experiencia: ¿Prefieres cocinar tus propios platos o contratar
                  a un chef privado? ¡La elección es tuya!
                </Parrafo>
              </CajaRazon>
              <CajaRazon>
                <CajaEncabezado>
                  <TituloRazon>3-Experiencia Local Única</TituloRazon>
                </CajaEncabezado>
                <Parrafo>
                  Hospedarte en una villa te permite vivir <b>Punta Cana</b> de
                  una forma más auténtica. Muchas villas están ubicadas en zonas
                  residenciales o exclusivas lejos del bullicio turístico, lo
                  que te da la oportunidad de conectar con la cultura local.
                  Podrás explorar mercados cercanos, probar comida típica y
                  descubrir lugares que los hoteles muchas veces no mencionan.
                </Parrafo>
              </CajaRazon>
              <CajaRazon>
                <CajaEncabezado>
                  <TituloRazon>
                    4-Costos Compartidos que Hacen la Diferencia
                  </TituloRazon>
                </CajaEncabezado>
                <Parrafo>
                  Aunque una villa puede parecer más costosa al principio, es
                  una opción mucho más económica si viajas en grupo. Dividir el
                  costo entre varias personas puede resultar más asequible que
                  pagar varias habitaciones de hotel. Además, ahorrarás en
                  comidas al tener la opción de cocinar tus propios platillos.
                </Parrafo>
              </CajaRazon>
              <CajaRazon>
                <CajaEncabezado>
                  <TituloRazon>
                    5-Flexibilidad y Personalización Total
                  </TituloRazon>
                </CajaEncabezado>
                <Parrafo>
                  En un hotel, estás sujeto a horarios de check-in, comidas y
                  actividades. En una villa, tú decides todo. ¿Quieres desayunar
                  a mediodía? ¿Hacer una cena romántica bajo las estrellas?
                  ¿Organizar una barbacoa junto a la piscina? Las villas te
                  permiten crear una experiencia de vacaciones completamente
                  personalizada.
                </Parrafo>
              </CajaRazon>
              <CajaImgCuerpo>
                <Img src={ImgGirl} />
              </CajaImgCuerpo>
              <CajaRazon>
                <CajaEncabezado>
                  <TituloRazon>
                    Conclucion: Haz de Tus Vacaciones una Experiencia Única
                  </TituloRazon>
                </CajaEncabezado>
                <Parrafo>
                  Si buscas comodidad, exclusividad y flexibilidad, hospedarte
                  en una villa en <b>Punta Cana</b> es una opción que no te
                  decepcionará. Ya sea que viajes en pareja, en familia o con un
                  grupo de amigos, disfrutarás de una experiencia única que se
                  adapta a tus necesidades y preferencias. Así que, ¿por qué no
                  dar el paso y reservar una villa para tu próxima aventura en
                  el Caribe? <b>Punta Cana</b> te espera con opciones increíbles
                  para que vivas las vacaciones de tus sueños.
                </Parrafo>
              </CajaRazon>
            </CajaTexto>
          </CajaInterna>
          <CajaInterna className="der">
            <SideBarBlog relacionados={relacionados} />
          </CajaInterna>
        </WrapContenido>
      </Container>
    )
  );
}

const CajaBotonQu = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
`;
const Container = styled.div`
  min-height: 100px;
`;

const CajaTitulo = styled.div`
  height: 200px;
  background-color: ${theme.secondary.coral};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
  margin-top: 80px;
`;
const Titulo = styled(TituloH1)`
  margin-top: 40px;
  width: 100%;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 2.6rem;
`;
const WrapContenido = styled.div`
  width: 100%;
  display: flex;
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
`;
const CajaInterna = styled.div`
  min-height: 200px;
  &.izq {
    width: 70%;
  }
  &.der {
    width: 30%;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const CajaTexto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  margin-bottom: 30px;
`;
const BloqueParrafos = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
const Parrafo = styled.p`
  width: 85%;
  text-align: start;
  font-size: 1.2rem;
  line-height: 30px;
  /* border: 1px solid red; */
  color: ${theme.primary.neutral600};
  &.introductorio {
    width: 100%;
    background-color: ${theme.primary.neutral200};
    margin-top: -20px;
    margin-bottom: 15px;
    padding: 4px;
  }
`;
const CajaRazon = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;
const CajaEncabezado = styled.div`
  width: 100%;
  min-height: 60px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: start;
  padding: 5px;
  padding-left: 10px;
  align-items: center;
  border-left: 4px solid ${theme.secondary.coral};
`;
const TituloRazon = styled.h2`
  color: ${theme.primary.turquoise};
`;
const CajaImgCuerpo = styled.div`
  margin-bottom: 25px;
`;
