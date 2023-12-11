/* eslint-disable no-undef */

import { ModeStyle } from "../../../src/ToDoApp/components/ModeStyle";

describe("Pruebas en ModeStyle", () => {
  test("El componente fue editado", () => {
    const { container } = render(<ModeStyle />);
    expect(container).toMatchSnapshot();
  });
});
