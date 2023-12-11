import { Navigate, Route, Routes } from "react-router-dom";
import { ModeStyle, ToDoNav } from "../components";
import { DayPage, MonthPage, WeekPage, YearPage } from "../pages";

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
