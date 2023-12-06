import "../../sass/components/ToDoOptionsDropdown.sass";
// eslint-disable-next-line react/prop-types
export const ToDoOptionsDropdown = ({ ElementId }) => {
  //Coloca la clase visible en el elemento que se le pasa como parametro
  const toggleVisibility = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    if (element.classList.contains("visible")) {
      element.classList.remove("visible");
    } else {
      hideAllMenus();
      element.classList.add("visible");
    }
  };
  //Elimina la clase visible de todos los elementos con la clase menu
  const hideAllMenus = () => {
    const elements = document.querySelectorAll(".menu");
    elements.forEach((element) => {
      element.classList.remove("visible");
    });
  };

  return (
    <div
      onClick={() => toggleVisibility(ElementId)}
      className="ToDoOptionsDropdown__box menu"
    >
      <div className="ToDoOptionsDropdown__box--icons menu"></div>
      <div className="ToDoOptionsDropdown__box--icons menu"></div>
      <div className="ToDoOptionsDropdown__box--icons menu"></div>
    </div>
  );
};
