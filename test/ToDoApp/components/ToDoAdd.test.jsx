import { fireEvent, render } from "@testing-library/react";
import { ToDoAdd } from "../../../src/ToDoApp/components/ToDoAdd";

/* eslint-disable no-undef */
describe("Pruebas en <ToDoAdd/>", () => {
  test("Debe de hacer math con el Snapshot", () => {
    const onNewTodo = jest.fn();
    const { container } = render(<ToDoAdd onNewTodo={onNewTodo} />);
    expect(container).toMatchSnapshot();
  });

  test("No debe de llamar onNewTodo si el input esta vacio", () => {
    const onNewTodo = jest.fn();
    const { container } = render(<ToDoAdd onNewTodo={onNewTodo} />);
    const form = container.querySelector("form");
    form.submit();
    expect(onNewTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar a la funcion onNewTodo y enviar el todo", () => {
    const onNewTodo = jest.fn();
    const { container } = render(<ToDoAdd onNewTodo={onNewTodo} />);

    const input = container.querySelector("input");

    const form = container.querySelector("form");

    fireEvent.change(input, { target: { value: "Aprender React" } });

    expect(input.value).toBe("Aprender React");

    fireEvent.submit(form);

    expect(onNewTodo).toHaveBeenCalledTimes(1);

    expect(onNewTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      done: false,
      description: "Aprender React",
    });
  });

  test("Debe de vaciar el input despues de enviar el todo", () => {
    const onNewTodo = jest.fn();
    const { container } = render(<ToDoAdd onNewTodo={onNewTodo} />);

    const input = container.querySelector("input");

    const form = container.querySelector("form");

    fireEvent.change(input, { target: { value: "Aprender React" } });

    fireEvent.submit(form);

    expect(input.value).toBe("");
  });

  test("Debe de enviar el todo al ejecutar el evento onClick en el button", () => {
    const onNewTodo = jest.fn();
    const { container } = render(<ToDoAdd onNewTodo={onNewTodo} />);

    const input = container.querySelector("input");

    const button = container.querySelector("button");

    fireEvent.change(input, { target: { value: "Aprender React" } });

    fireEvent.click(button);

    expect(onNewTodo).toHaveBeenCalledTimes(1);
  });
});
