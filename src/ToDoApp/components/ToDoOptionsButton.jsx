import "../../sass/components/ToDoOptionsButton.sass";
// eslint-disable-next-line react/prop-types
export const ToDoOptionsButton = ({ name, onTransferTodo, path }) => {
  // Si la ruta es la misma que la que se pasa por props, no se renderiza el botón
  if (location.pathname === path) return null;
  return (
    <li className="ToDoOptionsButton">
      <button onClick={onTransferTodo}>{name}</button>
    </li>
  );
};
