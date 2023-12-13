/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { DayPage } from "../../../src/ToDoApp/pages/DayPage";

describe("Pruebas en <DayPage/>", () => {
  Object.defineProperty(window, "location", {
    value: {
      pathname: "/day",
    },
    writable: true,
  });

  test("Debe de hacer match con el Snapshot", () => {
    const { container } = render(<DayPage />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrarse correctamente", () => {
    const { container } = render(<DayPage />);

    expect(container.querySelector(".ToDoContentListAdd")).toBeTruthy();
    expect(container.querySelector(".toDoDate")).toBeTruthy();
  });
});
