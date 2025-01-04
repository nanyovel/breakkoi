import React from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import DetalleVilla from "../view/DetalleVilla";
// import ScrollToTop from "../components/ScrollTop";

export default function MasterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/propiedades/:id" element={<DetalleVilla />} />
    </Routes>
  );
}
