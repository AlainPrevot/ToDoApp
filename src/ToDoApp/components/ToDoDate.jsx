import { useDate } from "../hooks";
import "../../sass/components/ToDoDate.sass";

export const ToDoDate = () => {
  // eslint-disable-next-line no-unused-vars
  const { day, dayNumber, week, month, year } = useDate();

  // Dependiendo de la ruta, se muestra una fecha u otra
  switch (location.pathname) {
    case "/ToDoApp/day":
      return (
        <div className="toDoDate">
          <h2>{day}</h2>
          <h6>
            {month.slice(0, 3)} {dayNumber}, {year}
          </h6>
        </div>
      );

    case "/ToDoApp/week":
      return (
        <div className="toDoDate">
          <h2>{week}° Week</h2>
          <h6>
            {month.slice(0, 3)} {dayNumber}, {year}
          </h6>
        </div>
      );

    case "/ToDoApp/month":
      return (
        <div className="toDoDate">
          <h2>{month}</h2>
          <h6>
            {day} {dayNumber}, {year}
          </h6>
        </div>
      );

    case "/ToDoApp/year":
      return (
        <div className="toDoDate">
          <h2>{year}</h2>
          <h6>
            {month.slice(0, 3)} {day} {dayNumber}
          </h6>
        </div>
      );
  }
};
