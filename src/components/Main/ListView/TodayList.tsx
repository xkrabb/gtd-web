import { FC } from "react";
import { useTodoStore } from "../../../store/useTodosStore";
import { TodoItem } from "../TodoItem";

export const TodayList: FC = () => {
  const todos = useTodoStore((st) =>
    st.today.map((id) => {
      return st.todos[id];
    }),
  );
  return todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });
};
