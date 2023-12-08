import { Navigate, Route, Routes } from "react-router-dom";
import { ToDoNav } from "../components/ToDoNav";
import { DayPage } from "../pages/DayPage";
import { WeekPage } from "../pages/WeekPage";
import { MonthPage } from "../pages/MonthPage";
import { YearPage } from "../pages/YearPage";
import { ModeStyle } from "../components/ModeStyle";

import "../../sass/routes/ToDoRoutes.sass";
import { useState } from "react";

export const ToDoRoutes = () => {
  const [theme, setTheme] = useState("light");

  const onMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="body" data-theme={theme}>
      <ModeStyle onMode={onMode} />
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
    </div>
  );
};
