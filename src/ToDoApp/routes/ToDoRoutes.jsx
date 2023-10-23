import { Navigate, Route, Routes } from "react-router-dom";
import { ToDoNav } from "../components/ToDoNav";
import { DayPage } from "../pages/DayPage";

import "../../sass/routes/ToDoRoutes.sass";
import { WeekPage } from "../pages/WeekPage";

export const ToDoRoutes = () => {
  return (
    <div className="ToDoRoutes">
      <ToDoNav />

      <Routes>
        <Route path="day" element={<DayPage />} />
        <Route path="week" element={<WeekPage />} />
        {/* <Route path="month" element={<MonthPage />} />
        <Route path="year" element={<YearPage />} /> */}

        <Route path="/" element={<Navigate to="/day" />} />
      </Routes>
    </div>
  );
};
