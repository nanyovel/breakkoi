import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import MenuPestannias from "../components/MenuPestannias";
import { Route, Routes, useLocation, useNavigate } from "react-router";

import { fetchGetDocs } from "../libs/FetchFirebase";
import { useAuth } from "../context/AuthContext";
import Admin01Dashboard from "./partes04Admin/admin01Dashboard";
import Admin01ListaUser from "./partes04Admin/Admin01ListaUser";
import Admin01ViewPerfilDash from "./partes04Admin/Admin01ViewPerfilDash";
import Admin04Blog from "./partes04Admin/Admin04Blog";
import Admin02Feedback from "./partes04Admin/Admin02Feedback";
import Admin03Propiedades from "./partes04Admin/Admin03Propiedades";

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
      nombre: "Blog",
      select: false,
      key: "blog",
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
        const propiedadesDB = await fetchGetDocs("propiedades", []);
        const postDB = await fetchGetDocs("post", []);
        const usuariosDBAux = await fetchGetDocs("usuarios", []);
        setDBUsuarios(usuariosDBAux);
        setStats({
          ...stats,
          usuarios: usuariosDBAux.length,
          propiedades: propiedadesDB.length,
          qtyPost: postDB.length,
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
              <Route
                path="/dashboard"
                element={
                  <Admin01Dashboard stats={stats} dbUsuarios={dbUsuarios} />
                }
              />
              <Route path="/feedback" element={<Admin02Feedback />} />
              <Route path="/propiedades" element={<Admin03Propiedades />} />
              <Route path="/blog" element={<Admin04Blog />} />
              <Route
                path="/usuarios"
                element={
                  <Admin01ListaUser
                    setDBUsuarios={setDBUsuarios}
                    dbUsuarios={dbUsuarios}
                  />
                }
              />
              <Route
                path="/usuarios/:id"
                element={
                  <Admin01ViewPerfilDash
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
