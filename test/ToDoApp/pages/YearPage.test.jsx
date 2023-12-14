/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { YearPage } from "../../../src/ToDoApp/pages/YearPage";

describe("Pruebas en <DayPage/>", () => {
  Object.defineProperty(window, "location", {
    value: {
      pathname: "/ToDoApp/day",
    },
    writable: true,
  });

  test("Debe de hacer match con el Snapshot", () => {
    const { container } = render(<YearPage />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrarse correctamente", () => {
    const { container } = render(<YearPage />);

    expect(container.querySelector(".ToDoContentListAdd")).toBeTruthy();
    expect(container.querySelector(".toDoDate")).toBeTruthy();
  });
});
