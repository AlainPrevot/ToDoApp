import { useForm } from "../hooks";
import "../../sass/components/ToDoAdd.sass";

import PropTypes from "prop-types";

export const ToDoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        // placeholder="Agregá tu próxima tarea..."
        placeholder="Add your next task..."
        className=" toDoAdd__input"
        name="description"
        autoComplete="off"
        value={description}
        onChange={onInputChange}
      />
      <button className="toDoAdd__button" type="submit">
        Add
      </button>
    </form>
  );
};

ToDoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
