import { ToDoOptionsDropdown } from "./ToDoOptionsDropdown";
import { ToDoOptionsButton } from "./ToDoOptionsButton";
import "../../sass/components/ToDoOptions.sass";

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const ToDoOptions = ({
  todo,
  onDeleteTodo,
  onTransferTodo,
  array = ["Day", "Week", "Month", "Year"],
}) => {
  return (
    <div className="toDoOptions">
      <ToDoOptionsDropdown ElementId={todo.id} />

      <div className="toDoOptions__box menu" id={todo.id}>
        <button className="danger" onClick={() => onDeleteTodo(todo.id)}>
          Delete
        </button>

        <span>Transferir</span>
        <ul className="toDoOptions__box--addresses">
          {array.map((item) => (
            <ToDoOptionsButton
              key={item}
              name={item}
              onTransferTodo={() =>
                onTransferTodo(todo, `/${item.toLowerCase()}`)
              }
              path={`/${item.toLowerCase()}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
