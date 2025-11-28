import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./assets/css/style.css";
import {BrowserRouter} from "react-router-dom"
import { Appcontextprovider } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Appcontextprovider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Appcontextprovider>
  </React.StrictMode>
);
