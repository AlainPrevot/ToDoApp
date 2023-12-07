import { Navigate, Route, Routes } from "react-router-dom";
import { ToDoNav } from "../components/ToDoNav";
import { DayPage } from "../pages/DayPage";
import { WeekPage } from "../pages/WeekPage";
import { MonthPage } from "../pages/MonthPage";
import { YearPage } from "../pages/YearPage";

import "../../sass/routes/ToDoRoutes.sass";

export const ToDoRoutes = () => {
  return (
    <div className="ToDoRoutes">
      <ToDoNav />

      <Routes>
        <Route path="day" element={<DayPage />} />
        <Route path="week" element={<WeekPage />} />
        <Route path="month" element={<MonthPage />} />
        <Route path="year" element={<YearPage />} />

        <Route path="/" element={<Navigate to="/day" />} />
      </Routes>
    </div>
  );
};
