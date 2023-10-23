import { useToDo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

import "../../sass/components/ToDoContentListAdd.sass";

export const ToDoContentListAdd = () => {
  const {
    todos,
    // todosCount,
    // pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useToDo();
  return (
    <div className="ToDoContentListAdd">
      <TodoAdd onNewTodo={handleNewTodo} />

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
};
