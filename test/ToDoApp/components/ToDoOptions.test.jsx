import { fireEvent, render } from "@testing-library/react";
import { ToDoOptions } from "../../../src/ToDoApp/components";

/* eslint-disable no-undef */
describe("Pruebas en <ToDoOptions/>", () => {
  test("Debe de hacer match con el Snapshot", () => {
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoOptions
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onTransferTodo={onTransferTodo}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe de dibujar el button", () => {
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoOptions
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onTransferTodo={onTransferTodo}
      />
    );

    const button = container.querySelector("button");

    expect(button).not.toBeNull();
  });

  test("Debe de llamar a la funcion onDeleteTodo y enviar el id del todo", () => {
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoOptions
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onTransferTodo={onTransferTodo}
      />
    );

    const button = container.querySelector("button");

    button.click();

    expect(onDeleteTodo).toHaveBeenCalledTimes(1);
  });

  test("Debe de agregar la clase visible al div que contenga la clase menu", () => {
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoOptions
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onTransferTodo={onTransferTodo}
      />
    );

    const button = container.querySelector(".ToDoOptionsDropdown__box");

    fireEvent.click(button);

    const menu = container.querySelector(".toDoOptions__box");

    expect(menu.classList.contains("visible")).toBe(true);
  });

  test("debe de eliminar la clase visible del div si ya la contiene", () => {
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoOptions
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onTransferTodo={onTransferTodo}
      />
    );

    const button = container.querySelector(".ToDoOptionsDropdown__box");

    fireEvent.click(button);

    const menu = container.querySelector(".toDoOptions__box");

    fireEvent.click(button);

    expect(menu.classList.contains("visible")).toBe(false);
  });

  test("Debe de dibujarse un ToDoOptionsButton por cada elemento del array, menos el que tenga el mismo path", () => {
    Object.defineProperty(window, "location", {
      value: {
        pathname: "/day",
      },
      writable: true,
    });
    const todo = {
      id: 1,
      done: false,
      description: "Aprender React",
    };
    const onDeleteTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const array = ["Day", "Week", "Month", "Year"];
    const { container } = render(
      <ToDoOptions
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onTransferTodo={onTransferTodo}
        array={array}
      />
    );

    const buttons = container.querySelectorAll(".ToDoOptionsButton");

    expect(buttons.length).toBe(3);
  });
});
