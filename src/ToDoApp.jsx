import { AppRouter } from "./router/AppRouter";
import "./ToDoApp/event/handleAddEventListener";

export const ToDoApp = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};
