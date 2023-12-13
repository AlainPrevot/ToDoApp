/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { ToDoItem } from "../../../src/ToDoApp/components";

describe("Pruebas en <ToDoItem/>", () => {
  test("Debe de hacer match con el Snapshot", () => {
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        onTransferTodo={onTransferTodo}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe de llamar a la funcion onToggleTodo y enviar el id del todo", () => {
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        onTransferTodo={onTransferTodo}
      />
    );

    const span = container.querySelector("span");

    span.click();

    expect(onToggleTodo).toHaveBeenCalledTimes(1);

    expect(onToggleTodo).toHaveBeenCalledWith(1);
  });

  test("Debe de mostrar el texto del todo", () => {
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        onTransferTodo={onTransferTodo}
      />
    );

    const span = container.querySelector("span");

    expect(span.textContent).toBe("Aprender React");
  });

  test("Debe de tener la clase toDoItem--realizado si el todo esta realizado", () => {
    const todo = {
      id: 1,
      done: true,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        onTransferTodo={onTransferTodo}
      />
    );

    const li = container.querySelector("li");

    expect(li.classList.contains("toDoItem--realizado")).toBe(true);
  });

  test("No debe de tener la clase toDoItem--realizado si el todo no esta realizado", () => {
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        onTransferTodo={onTransferTodo}
      />
    );

    const li = container.querySelector("li");

    expect(li.classList.contains("toDoItem--realizado")).toBe(false);
  });
});
