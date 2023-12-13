import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoNav } from "../../../src/ToDoApp/components";
import { MemoryRouter } from "react-router-dom";

/* eslint-disable no-undef */
describe("Pruebas en <ToDoNav/>", () => {
  test("Debe de hacer match con el Snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <ToDoNav />;
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar WeekPage si se hace click en el link", () => {
    render(
      <MemoryRouter>
        <ToDoNav />;
      </MemoryRouter>
    );

    const weekNav = screen.getByText("Week");

    fireEvent.click(weekNav);

    expect(weekNav.classList.contains("active")).toBe(true);
  });

  test("Debe de mostrar MonthPage si se hace click en el link", () => {
    render(
      <MemoryRouter>
        <ToDoNav />;
      </MemoryRouter>
    );

    const monthNav = screen.getByText("Month");

    fireEvent.click(monthNav);

    expect(monthNav.classList.contains("active")).toBe(true);
  });

  test("Debe de mostrar YearPage si se hace click en el link", () => {
    render(
      <MemoryRouter>
        <ToDoNav />;
      </MemoryRouter>
    );

    const yearNav = screen.getByText("Year");

    fireEvent.click(yearNav);

    expect(yearNav.classList.contains("active")).toBe(true);
  });
});
