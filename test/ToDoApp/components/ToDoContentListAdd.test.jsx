/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { ToDoContentListAdd } from "../../../src/ToDoApp/components";
describe("Pruebas en <ToDoContentListAdd/>", () => {
  test("Debe de hacer match con el Snapshot", () => {
    const { container } = render(<ToDoContentListAdd />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de dibujarse un formulario", () => {
    const { getByPlaceholderText } = render(<ToDoContentListAdd />);
    expect(getByPlaceholderText("Add your next task...")).toBeTruthy();
  });
  test("Debe de dibujarse toDoList", () => {
    const { container } = render(<ToDoContentListAdd />);
    expect(container.querySelector(".toDoList")).toBeTruthy();
  });
});
