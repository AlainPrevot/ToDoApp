import { useToDo } from "../hooks";
import { ToDoAdd, ToDoList } from "../components";

import "../../sass/components/ToDoContentListAdd.sass";

export const ToDoContentListAdd = () => {
  const {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleTransferTodo,
    handleNewTodo,
  } = useToDo();

  return (
    <div className="ToDoContentListAdd">
      <ToDoAdd onNewTodo={handleNewTodo} />

      <div className="toDoContentListAdd__div">
        <ToDoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
          onTransferTodo={handleTransferTodo}
        />
      </div>
    </div>
  );
};
