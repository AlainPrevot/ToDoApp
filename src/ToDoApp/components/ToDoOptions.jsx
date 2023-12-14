import { ToDoOptionsDropdown, ToDoOptionsButton } from "../components";
import "../../sass/components/ToDoOptions.sass";

import PropTypes from "prop-types";

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

        <span className="menu">Transferir</span>
        <ul className="toDoOptions__box--addresses">
          {array.map((item) => (
            <ToDoOptionsButton
              key={item}
              name={item}
              onTransferTodo={() =>
                onTransferTodo(todo, `/ToDoApp/${item.toLowerCase()}`)
              }
              path={`/ToDoApp/${item.toLowerCase()}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

ToDoOptions.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onTransferTodo: PropTypes.func.isRequired,
  array: PropTypes.array,
};
