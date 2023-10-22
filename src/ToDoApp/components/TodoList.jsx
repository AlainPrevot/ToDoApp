/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";
import "../../sass/components/TodoList.sass";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="toDoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
