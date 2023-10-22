import { useDate } from "../hooks/useDate";
import "../../sass/components/ToDoDate.sass";

export const ToDoDate = () => {
  // eslint-disable-next-line no-unused-vars
  const { day, dayNumber, month, year } = useDate();

  return (
    <div className="toDoDate">
      {/* <h2>{day}</h2> */}
      <h2>Lunes</h2>
      <h6>
        {month} {dayNumber}, {year}
      </h6>
    </div>
  );
};
