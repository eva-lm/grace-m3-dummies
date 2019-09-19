import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter } from "react-router-dom";
import CambioNombre from "./components/CambioNombre";

ReactDOM.render(
  <HashRouter>
    <CambioNombre />
  </HashRouter>,
  document.getElementById("root")
);
