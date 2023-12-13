import { render } from "@testing-library/react";
import { ToDoOptionsDropdown } from "../../../src/ToDoApp/components";

/* eslint-disable no-undef */
describe("Pruebas en <ToDoOptionsDropdown/>", () => {
  const ElementId = 1;
  test("Debe de hacer match con el Snapshot", () => {
    const { container } = render(<ToDoOptionsDropdown ElementId={ElementId} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de dibujarse correctamente", () => {
    const { container } = render(<ToDoOptionsDropdown ElementId={ElementId} />);

    expect(container.querySelector(".ToDoOptionsDropdown__box")).toBeTruthy();

    expect(
      container.querySelectorAll(".ToDoOptionsDropdown__box--icons").length
    ).toBe(3);
  });
});
