import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router } from "react-router-dom";
import App from "./App";
import PageRouter from "./PagesRouter";
import "./Styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>
);
