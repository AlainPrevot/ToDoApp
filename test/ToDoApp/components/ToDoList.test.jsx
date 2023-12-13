/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { ToDoList } from "../../../src/ToDoApp/components";

describe("Pruebas en <ToDoList/>", () => {
  test("Debe de hacer match con el Snapshot", () => {
    const todos = [
      {
        id: 1,
        done: false,
        description: "Aprender React",
      },
    ];
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        onTransferTodo={onTransferTodo}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe de dibujar un componente por cada todo", () => {
    const todos = [
      {
        id: 1,
        done: false,
        description: "Aprender React",
      },
      {
        id: 2,
        done: false,
        description: "Aprender React Native",
      },
    ];
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    const onTransferTodo = jest.fn();
    const { container } = render(
      <ToDoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        onTransferTodo={onTransferTodo}
      />
    );

    const list = container.querySelector("ul");

    expect(list.children.length).toBe(todos.length);
  });
});
