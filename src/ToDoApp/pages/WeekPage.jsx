import { ToDoContentListAdd } from "../components/ToDoContentListAdd";
import { ToDoDate } from "../components/ToDoDate";

export const WeekPage = () => {
  return (
    <>
      <ToDoDate />
      <hr />

      <ToDoContentListAdd />
    </>
  );
};
