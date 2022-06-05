import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Affichage from "./Exercice/Affichage";
import JeanLuc from "./Exercice/JeanLuc";
import Marine from "./Exercice/Marine";
import Jean from "./Exercice/Jean";
import Phillipe from "./Exercice/Phillipe";
import App from "./App";
import Api from "./Components/Api";

const PageRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/App" element={<App />} />
          <Route path="/Api" element={<Api />} />
          <Route path="/" element={<Affichage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Jean-Luc" element={<JeanLuc />} />
          <Route path="/Marine" element={<Marine />} />
          <Route path="/Jean" element={<Jean />} />
          <Route path="/Phillipe" element={<Phillipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default PageRouter;
