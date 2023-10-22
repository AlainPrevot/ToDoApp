import "../../sass/components/ToDoOpciones.sass";
/* eslint-disable react/prop-types */
export const ToDoOpciones = ({ todo, onDeleteTodo }) => {
  return (
    <ul className="toDoOpciones">
      <li className="toDoOpciones__li--direcciones">
        <span>Enviar a:</span>
        <button className="prueba">Semana</button>
        <button>Mes</button>
        <button>Año</button>
      </li>
      <li className="toDoOpciones__li--eliminar">
        <button onClick={() => onDeleteTodo(todo.id)}>Eliminar</button>
      </li>
    </ul>
  );
};
