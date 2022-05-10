import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

const PageRouter = () => {
  return false && (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default PageRouter;
