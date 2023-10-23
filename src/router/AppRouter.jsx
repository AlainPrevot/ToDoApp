import { Route, Routes } from "react-router-dom";
import { ToDoRoutes } from "../ToDoApp/routes/ToDoRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ToDoRoutes />} />
      </Routes>
    </>
  );
};
