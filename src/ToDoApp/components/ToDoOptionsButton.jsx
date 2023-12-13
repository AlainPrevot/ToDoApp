import "../../sass/components/ToDoOptionsButton.sass";
import PropTypes from "prop-types";
export const ToDoOptionsButton = ({ name, onTransferTodo, path }) => {
  // Si la ruta es la misma que la que se pasa por props, no se renderiza el botón
  if (location.pathname === path) return null;
  return (
    <li className="ToDoOptionsButton">
      <button onClick={onTransferTodo}>{name}</button>
    </li>
  );
};

ToDoOptionsButton.propTypes = {
  name: PropTypes.string.isRequired,
  onTransferTodo: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};
