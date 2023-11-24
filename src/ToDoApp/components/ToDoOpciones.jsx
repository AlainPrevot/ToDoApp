import "../../sass/components/ToDoOpciones.sass";
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const ToDoOpciones = ({ todo, onDeleteTodo }) => {
  return (
    // <ul className="toDoOpciones">
    //   <li className="toDoOpciones__li--direcciones">
    //     <span>Enviar a:</span>
    //     <button className="prueba">Semana</button>
    //     <button>Mes</button>
    //     <button>Año</button>
    //   </li>
    //   <li className="toDoOpciones__li--eliminar">
    //     <button onClick={() => onDeleteTodo(todo.id)}>Eliminar</button>
    //   </li>
    // </ul>

    <ul className="primer_ul">
      {/* <span>span</span> */}
      <label htmlFor="nana">span</label>
      <input type="text" id="nana" />

      <ul className="segundo_ul">
        <span>transferir</span>
        <li>
          <button>Dia</button>
        </li>
        <li>
          <button>Semana</button>
        </li>
        <li>
          <button>Mes</button>
        </li>
        <li>
          <button>Año</button>
        </li>
      </ul>
      <li className="ul_li">
        <button>Eliminar </button>
      </li>
    </ul>
  );
};
