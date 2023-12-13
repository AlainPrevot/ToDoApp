/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { ToDoRoutes } from "../../../src/ToDoApp/routes/ToDoRoutes";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <ToDoRoutes/>", () => {
  test("Debe de hacer match con el Snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <ToDoRoutes />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar DayPage por defecto", () => {
    render(
      <MemoryRouter>
        <ToDoRoutes />;
      </MemoryRouter>
    );

    const dayNav = screen.getByText("Day");

    expect(dayNav.classList.contains("active")).toBe(true);
  });

  test("Debe de mostrar WeekPage", () => {
    render(
      <MemoryRouter initialEntries={["/week"]}>
        <ToDoRoutes />;
      </MemoryRouter>
    );

    const weekNav = screen.getByText("Week");

    expect(weekNav.classList.contains("active")).toBe(true);
  });

  test("Debe de mostrar MonthPage", () => {
    render(
      <MemoryRouter initialEntries={["/month"]}>
        <ToDoRoutes />;
      </MemoryRouter>
    );

    const monthNav = screen.getByText("Month");

    expect(monthNav.classList.contains("active")).toBe(true);
  });

  test("Debe de mostrar YearPage", () => {
    render(
      <MemoryRouter initialEntries={["/year"]}>
        <ToDoRoutes />;
      </MemoryRouter>
    );

    const yearNav = screen.getByText("Year");

    expect(yearNav.classList.contains("active")).toBe(true);
  });
});
