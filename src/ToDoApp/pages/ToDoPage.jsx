import { TodoAdd, TodoList } from "../components";
import { useToDo } from "../hooks";

import "../../sass/pages/ToDoPage.sass";
import { ToDoDate } from "../components/ToDoDate";
import { ToDoNav } from "../components/ToDoNav";

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
          {/* Hacer un componente para el apartado fecha */}
          {/* Hacer un hooks para el apartado fecha */}
          {/* 
          <h2>Lunes</h2>
          <h6>Oct 23, 2023</h6> */}

          <ToDoDate />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
        <div className="toDoPage__Div--list">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
      </div>
    </>
  );
};
