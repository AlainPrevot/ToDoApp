import "../../sass/components/ToDoOpciones.sass";
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const ToDoOpciones = ({ todo, onDeleteTodo }) => {
  const prueba = (id) => {
    if (document.getElementById(id).classList.contains("visible")) {
      document.getElementById(id).classList.remove("visible");
    } else {
      document.getElementById(id).classList.add("visible");
    }
  };

  return (
    <div className="toDoOpciones menu">
      <div onClick={() => prueba(todo.id)} className="menu opcionesContainer">
        <div className="opciones menu "></div>
        <div className="opciones menu"></div>
        <div className="opciones menu"></div>
      </div>

      {/* cambiar el div que uso como boton por un input radio */}
      {/* de esa forma solo podra estar seleccionado uno */}

      <div className="ul1 menu" id={todo.id}>
        <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>

        <span className="span2">Transferir</span>
        <ul className="ul2 toDoOpciones__li--direcciones">
          <li className="li2">
            <button>Dia</button>
          </li>
          <li className="li2">
            <button>Semana</button>
          </li>
          <li className="li2">
            <button>Mes</button>
          </li>
          <li className="li2">
            <button>Año</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
