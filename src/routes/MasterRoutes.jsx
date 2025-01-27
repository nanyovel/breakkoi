import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import DetalleVilla from "../view/DetalleVilla";
import Page404 from "../page/Page404";
import ListaPropiedades from "../page/ListaPropiedades";
import FormContact from "../components/FormContact";
import PageContact from "../page/PageContact";
import Nosotros from "../page/Nosotros";
import Login from "../page/Login";
import Registrarse from "../page/Registrarse";
import ResetPassword from "../page/ResetPassword";
import ListaBlog from "../page/ListaBlog";
import DetalleBlog from "../view/DetalleBlog";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Perfil from "../page/Perfil";
import BarraTopOferta from "../components/BarraTopOferta";
import AvisoTop from "../components/AvisoTop";
import { useAuth } from "../context/AuthContext";
import { sendEmailVerification } from "firebase/auth";

export default function MasterRoutes({ userMaster }) {
  const [usuario, setUsuario] = useState(useAuth().usuario);

  // ********************* CONFIGAR CORREO *************************
  const mensajeInitial = `La cuenta del email:${userMaster.correo} 
             ha sido creada correctamente, ahora debes confirmar que eres el propietario, para ello haz click en el siguiente boton para enviarte un enlace a tu correo.`;
  const [mensajeConfirmar, setMensajeConfirmar] = useState(mensajeInitial);
  const [hasConfirmar, setHasConfirmar] = useState(false);
  const [btnCta, setBtnCta] = useState("Enviar enlace");

  useEffect(() => {
    if (usuario.emailVerified == false) {
      setHasConfirmar(true);
    }
  }, [usuario, useAuth().usuario]);

  const confirmarEmail = () => {
    var actionCodeSettings = { url: "https://breakkoi.vercel.app/" };
    sendEmailVerification(usuario, actionCodeSettings)
      .then(function () {
        setMensajeConfirmar("Enlace de confirmacion enviado a su correo.");
        setBtnCta("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Header userMaster={userMaster} />
      {hasConfirmar && (
        <AvisoTop
          cta={() => confirmarEmail()}
          ctaTexto={btnCta}
          mensaje={mensajeConfirmar}
        />
      )}

      <Routes>
        <Route path="/" element={<Home userMaster={userMaster} />} />
        <Route
          path="/propiedades/"
          element={<ListaPropiedades userMaster={userMaster} />}
        />
        <Route path="/propiedades/:id" element={<DetalleVilla />} />
        <Route path="/blog/" element={<ListaBlog />} />
        <Route path="/blog/*" element={<DetalleBlog />} />
        <Route path="/contactos/" element={<PageContact />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/registro/" element={<Registrarse />} />
        <Route path="/nosotros/" element={<Nosotros />} />
        <Route path="/resetPassword/" element={<ResetPassword />} />
        <Route path="/perfil/" element={<Perfil userMaster={userMaster} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}
