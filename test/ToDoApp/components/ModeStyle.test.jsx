/* eslint-disable no-undef */

import { render } from "@testing-library/react";
import { ModeStyle } from "../../../src/ToDoApp/components/ModeStyle";

describe("Pruebas en ModeStyle", () => {
  const onMode = jest.fn();
  test("El componente hace match con el Snapshot", () => {
    const { container } = render(<ModeStyle onMode={onMode} />);
    expect(container).toMatchSnapshot();
  });

  test("Al presionar los LABEL se ejecuta el evento del input", () => {
    const { container } = render(<ModeStyle onMode={onMode} />);
    const modeDark = container.getElementsByClassName("modeDark")[0];
    const modeLight = container.getElementsByClassName("modeLight")[0];
    modeDark.click();
    modeLight.click();
    expect(onMode).toHaveBeenCalledTimes(2);
  });
  test("El checkbox funciona correctamente", () => {
    const { container } = render(<ModeStyle onMode={onMode} />);
    const input = container.getElementsByClassName("mode")[0];
    expect(input.checked).toBe(false);
    input.click();
    expect(input.checked).toBe(true);
  });
});
