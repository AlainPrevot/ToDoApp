import { fireEvent, render } from "@testing-library/react";
import { ToDoOptionsButton } from "../../../src/ToDoApp/components";

/* eslint-disable no-undef */
describe("Pruebas en <ToDoOptionsButton/>", () => {
  Object.defineProperty(window, "location", {
    value: {
      pathname: "/day",
    },
    writable: true,
  });
  test("Debe de hacer match con el Snapshot", () => {
    const name = "week";
    const onTransferTodo = jest.fn();
    const path = "/week";
    const { container } = render(
      <ToDoOptionsButton
        name={name}
        onTransferTodo={onTransferTodo}
        path={path}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe de dibujar el button si el pathname es diferente al path", () => {
    const name = "week";
    const onTransferTodo = jest.fn();
    const path = "/week";
    const { container } = render(
      <ToDoOptionsButton
        name={name}
        onTransferTodo={onTransferTodo}
        path={path}
      />
    );

    const button = container.querySelector("button");

    expect(button).not.toBeNull();
  });

  test("No debe de dibujar el button si el pathname es igual al path", () => {
    const name = "day";
    const onTransferTodo = jest.fn();
    const path = "/day";
    const { container } = render(
      <ToDoOptionsButton
        name={name}
        onTransferTodo={onTransferTodo}
        path={path}
      />
    );

    const button = container.querySelector("button");

    expect(button).toBeNull();
  });

  test("Debe de llamar a la funcion onTransferTodo", () => {
    const name = "week";
    const onTransferTodo = jest.fn();
    const path = "/week";
    const { container } = render(
      <ToDoOptionsButton
        name={name}
        onTransferTodo={onTransferTodo}
        path={path}
      />
    );

    const button = container.querySelector("button");

    fireEvent.click(button);

    expect(onTransferTodo).toHaveBeenCalledTimes(1);
  });
});
