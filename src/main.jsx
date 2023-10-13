import React from "react";
import ReactDOM from "react-dom/client";
import { ToDoPage } from "./ToDoApp/pages/ToDoPage.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoPage />
  </React.StrictMode>
);
