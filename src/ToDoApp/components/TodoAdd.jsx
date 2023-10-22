/* eslint-disable react/prop-types */
import { useForm } from "../hooks/useForm";
import "../../sass/components/TodoAdd.sass";

export const TodoAdd = ({ onNewTodo }) => {
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
        placeholder="Agregá tu próxima tarea..."
        className=" toDoAdd__input"
        name="description"
        autoComplete="off"
        value={description}
        onChange={onInputChange}
      />
    </form>
  );
};
