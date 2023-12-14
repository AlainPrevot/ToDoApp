import { NavLink } from "react-router-dom";

import "../../sass/components/ToDoNav.sass";

export const ToDoNav = () => {
  return (
    <nav>
      <NavLink to="ToDoApp/day">Day</NavLink>
      <NavLink to="ToDoApp/week">Week</NavLink>
      <NavLink to="ToDoApp/month">Month</NavLink>
      <NavLink to="ToDoApp/year">Year</NavLink>
    </nav>
  );
};
