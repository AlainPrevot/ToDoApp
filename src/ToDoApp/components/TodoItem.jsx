/* eslint-disable react/prop-types */
import "../../sass/components/TodoItem.sass";
import { ToDoOptions } from "./ToDoOptions";

// eslint-disable-next-line no-unused-vars
export const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
  onTransferTodo,
}) => {
  return (
    <li
      // className="toDoItem"
      className={`toDoItem ${todo.done ? "toDoItem--realizado" : ""}`}
    >
      <span
        className="toDoItem--span"
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo.description}
      </span>
      {/* <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button> */}
      <ToDoOptions
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onTransferTodo={onTransferTodo}
      />
    </li>
  );
};
