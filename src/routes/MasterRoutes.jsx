import React from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import DetalleVilla from "../view/DetalleVilla";
import Page404 from "../page/Page404";
import Propiedades from "../page/Propiedades";
import FormContact from "../components/FormContact";
import PageContact from "../page/PageContact";
import Nosotros from "../page/Nosotros";
import Login from "../page/Login";
import Registrarse from "../page/Registrarse";
import ResetPassword from "../page/ResetPassword";
import ListaBlog from "../page/ListaBlog";

export default function MasterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/propiedades/" element={<Propiedades />} />
      <Route path="/propiedades/:id" element={<DetalleVilla />} />
      <Route path="/blog/" element={<ListaBlog />} />
      <Route path="/contactos/" element={<PageContact />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/registro/" element={<Registrarse />} />
      <Route path="/nosotros/" element={<Nosotros />} />
      <Route path="/resetPassword/" element={<ResetPassword />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
