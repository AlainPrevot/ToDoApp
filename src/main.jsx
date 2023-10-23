import React from "react";
import ReactDOM from "react-dom/client";
// import { ToDoPage } from "./ToDoApp/pages/ToDoPage.jsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToDoApp } from "./ToDoApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ToDoPage /> */}
      <ToDoApp />
    </BrowserRouter>
  </React.StrictMode>
);
