import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import MenuPestannias from "../components/MenuPestannias";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Dashboard from "./partes04Admin/Dashboard";
import ListaUsuarios from "./partes04Admin/ListaUsuarios";
import { fetchGetDocs } from "../libs/FetchFirebase";
import { useAuth } from "../context/AuthContext";
import ViewPerfilUser from "./partes04Admin/ViewPerfilUser";

export default function Manager({ setDBUsuarios, dbUsuarios }) {
  // ********************* RECURSOS GENERALES *********************
  const navigate = useNavigate();
  let location = useLocation();
  let path = location.pathname;
  const [datosParseados, setDatosParseados] = useState(false);
  const [pestannias, setPestannias] = useState([
    {
      nombre: "Dashboard",
      select: true,
      key: "dashboard",
    },
    {
      nombre: "Feedback",
      select: false,
      key: "feedback",
    },
    {
      nombre: "Propiedades",
      select: false,
      key: "propiedades",
    },
    {
      nombre: "Hospedajes",
      select: false,
      key: "hospedajes",
    },
  ]);
  useEffect(() => {
    const lastWord = path.split("/").pop();
    setPestannias(
      pestannias.map((opcion, index) => {
        return {
          ...opcion,
          select: opcion.key == lastWord,
        };
      })
    );
    setDatosParseados(true);
  }, [path]);

  const handlePestannias = (e) => {
    let index = Number(e.target.dataset.id);
    setPestannias(
      pestannias.map((opcion, i) => {
        if (index == i) {
          navigate("/admin/" + opcion.key);
          return {
            ...opcion,
            select: true,
          };
        } else {
          return {
            ...opcion,
            select: false,
          };
        }
      })
    );
  };

  // ********************* LLAMADAS A LA BASES DE DATOS *********************
  const usuario = useAuth().usuario;
  const [userList, setUserList] = useState([]);
  const [stats, setStats] = useState({
    diasReservados: 0,
    qtyPost: 0,
    usuarios: 0,
    propiedades: 0,
    hospedajes: 0,
  });

  useEffect(() => {
    (async () => {
      if (usuario) {
        const usuariosDBAux = await fetchGetDocs("usuarios", []);
        setDBUsuarios(usuariosDBAux);
        setStats({
          ...stats,
          usuarios: usuariosDBAux.length,
        });
      }
    })();
  }, []);

  return (
    <Container>
      <TituloSeccion>Panel de administracion</TituloSeccion>
      <MainBox>
        <CajaPestannias>
          <MenuPestannias
            arrayOpciones={pestannias}
            handlePestannias={handlePestannias}
          />
        </CajaPestannias>
        {datosParseados && (
          <CajaContenido>
            <Routes>
              <Route path="/dashboard" element={<Dashboard stats={stats} />} />
              <Route path="/propiedades" element={<h2>propiedades</h2>} />
              <Route
                path="/usuarios"
                element={
                  <ListaUsuarios
                    setDBUsuarios={setDBUsuarios}
                    dbUsuarios={dbUsuarios}
                  />
                }
              />
              <Route
                path="/usuarios/:id"
                element={
                  <ViewPerfilUser
                    setDBUsuarios={setDBUsuarios}
                    dbUsuarios={dbUsuarios}
                  />
                }
              />
            </Routes>
          </CajaContenido>
        )}
      </MainBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 0 ${theme.config.paddingLateral};
  margin-bottom: 200px;
`;

const TituloSeccion = styled.h2`
  color: ${theme.primary.turquoiseTenue};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: normal;
  &.sinMarginBottom {
    margin-bottom: 0;
  }
  &.coral {
    color: ${theme.primary.sand};
    color: white;
  }
`;
const MainBox = styled.div`
  width: 100%;
  min-height: 200px;
  box-shadow: ${theme.config.sombra};
`;
const CajaPestannias = styled.div`
  min-height: 40px;
  padding: 15px;
  background-color: ${theme.primary.turquoise};
`;
const CajaContenido = styled.div`
  width: 100%;
`;
