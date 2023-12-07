import { NavLink } from "react-router-dom";

import "../../sass/components/ToDoNav.sass";

export const ToDoNav = () => {
  return (
    <nav>
      <NavLink to="/day">Day</NavLink>
      <NavLink to="/week">Week</NavLink>
      <NavLink to="/month">Month</NavLink>
      <NavLink to="/year">Year</NavLink>
    </nav>
  );
};
