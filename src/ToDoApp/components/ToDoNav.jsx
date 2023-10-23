import { NavLink } from "react-router-dom";
import "../../sass/components/ToDoNav.sass";
export const ToDoNav = () => {
  return (
    <nav>
      <NavLink to="/day">Dia</NavLink>
      <NavLink to="/week">Semana</NavLink>
      <NavLink to="/month">Mes</NavLink>
      <NavLink to="/year">Año</NavLink>
    </nav>
  );
};
