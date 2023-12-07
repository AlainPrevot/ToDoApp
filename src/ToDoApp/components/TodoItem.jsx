/* eslint-disable react/prop-types */
import { ToDoOptions } from "./ToDoOptions";
import "../../sass/components/TodoItem.sass";

// eslint-disable-next-line no-unused-vars
export const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
  onTransferTodo,
}) => {
  return (
    <li className={`toDoItem ${todo.done ? "toDoItem--realizado" : ""}`}>
      <span className="toDoItem__span" onClick={() => onToggleTodo(todo.id)}>
        {todo.description}
      </span>
      <ToDoOptions
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onTransferTodo={onTransferTodo}
      />
    </li>
  );
};
