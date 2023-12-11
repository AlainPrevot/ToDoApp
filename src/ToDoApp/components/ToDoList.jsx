/* eslint-disable react/prop-types */
import { ToDoItem } from "../components";
import "../../sass/components/ToDoList.sass";

export const ToDoList = ({
  todos = [],
  onDeleteTodo,
  onToggleTodo,
  onTransferTodo,
}) => {
  return (
    <ul className="toDoList">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          onTransferTodo={onTransferTodo}
        />
      ))}
    </ul>
  );
};
