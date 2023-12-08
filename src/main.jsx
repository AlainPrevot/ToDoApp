import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToDoApp } from "./ToDoApp.jsx";

import "./index.css";
// import "./prueba.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDoApp />
    </BrowserRouter>
  </React.StrictMode>
);
