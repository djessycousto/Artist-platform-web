import { BrowserRouter } from "react-router-dom";
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "./Reset.css";
import "./Variable.css";
import "./Global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
