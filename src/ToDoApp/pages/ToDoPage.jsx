import { ToDoAdd, ToDoDate, ToDoList, ToDoNav } from "../components";
import { useToDo } from "../hooks";

import "../../sass/pages/ToDoPage.sass";

export const ToDoPage = () => {
  const {
    todos,
    // todosCount,
    // pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useToDo();

  return (
    <>
      <div className="ToDoPage">
        <ToDoNav />
        <div className="toDoPage__div--add">
          <ToDoDate />
          <ToDoAdd onNewTodo={handleNewTodo} />
        </div>
        <div className="toDoPage__Div--list">
          <ToDoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
      </div>
    </>
  );
};
