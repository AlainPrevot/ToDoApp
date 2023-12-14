/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { ToDoDate } from "../../../src/ToDoApp/components";

describe("Pruebas en <ToDoDate/>", () => {
  test("Debe de hacer match con el Snapshot", () => {
    const { container } = render(<ToDoDate />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la fecha de hoy si el pathname es /day", () => {
    Object.defineProperty(window, "location", {
      value: {
        pathname: "/ToDoApp/day",
      },
      writable: true,
    });

    const { container } = render(<ToDoDate />);
    const titulo = container.querySelector("h2");
    const subtitulo = container.querySelector("h6");

    const today = new Date();
    const day = today.toLocaleString("en-US", { weekday: "long" });
    const month = today.toLocaleString("en-US", { month: "long" });
    const dayNumber = today.toLocaleString("en-US", { day: "numeric" });
    const year = today.toLocaleString("en-US", { year: "numeric" });

    expect(day).toBe(titulo.textContent);
    expect(`${month.slice(0, 3)} ${dayNumber}, ${year}`).toBe(
      subtitulo.textContent
    );
  });

  test("Debe de mostrar la semana actual si el pathname es /week", () => {
    Object.defineProperty(window, "location", {
      value: {
        pathname: "/ToDoApp/week",
      },
      writable: true,
    });

    const { container } = render(<ToDoDate />);
    const titulo = container.querySelector("h2");
    const subtitulo = container.querySelector("h6");

    const today = new Date();
    const week = Math.ceil(today.getDate() / 7);
    const month = today.toLocaleString("en-US", { month: "long" });
    const dayNumber = today.toLocaleString("en-US", { day: "numeric" });
    const year = today.toLocaleString("en-US", { year: "numeric" });

    expect(`${week}° Week`).toBe(titulo.textContent);
    expect(`${month.slice(0, 3)} ${dayNumber}, ${year}`).toBe(
      subtitulo.textContent
    );
  });

  test("Debe de mostrar el mes actual si el pathname es /month", () => {
    Object.defineProperty(window, "location", {
      value: {
        pathname: "/ToDoApp/month",
      },
      writable: true,
    });

    const { container } = render(<ToDoDate />);
    const titulo = container.querySelector("h2");
    const subtitulo = container.querySelector("h6");

    const today = new Date();
    const month = today.toLocaleString("en-US", { month: "long" });
    const day = today.toLocaleString("en-US", { weekday: "long" });
    const dayNumber = today.toLocaleString("en-US", { day: "numeric" });
    const year = today.toLocaleString("en-US", { year: "numeric" });

    expect(month).toBe(titulo.textContent);
    expect(`${day} ${dayNumber}, ${year}`).toBe(subtitulo.textContent);
  });

  test("Debe de mostrar el año actual si el pathname es /year", () => {
    Object.defineProperty(window, "location", {
      value: {
        pathname: "/ToDoApp/year",
      },
      writable: true,
    });

    const { container } = render(<ToDoDate />);
    const titulo = container.querySelector("h2");
    const subtitulo = container.querySelector("h6");

    const today = new Date();
    const year = today.toLocaleString("en-US", { year: "numeric" });
    const month = today.toLocaleString("en-US", { month: "long" });
    const day = today.toLocaleString("en-US", { weekday: "long" });
    const dayNumber = today.toLocaleString("en-US", { day: "numeric" });

    expect(year).toBe(titulo.textContent);
    expect(`${month.slice(0, 3)} ${day} ${dayNumber}`).toBe(
      subtitulo.textContent
    );
  });
});
