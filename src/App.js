import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import "./App.css";
import Rules from "./pages/Rules/Rules";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Groups from "./pages/Groups/Groups";
import PanelHome from "./pages/Panel/PanelHome/PanelHome";
import PanelProfil from "./pages/Panel/PanelProfil/PanelProfil";
import Confirmation from "./pages/Confirmation/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/panel" element={<PanelHome />} />
          <Route path="/panel/profil" element={<PanelProfil />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
