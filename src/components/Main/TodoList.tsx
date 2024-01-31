import { FC } from "react";
import { useTodoStore } from "../../store/useTodosStore";
import { useSettingStore } from "../../store/useSettingStore";
import { TodoItem } from "./TodoItem";

export const TodoList: FC = () => {
  const todos = useTodoStore((st) => st.todos);
  const menuKey = useSettingStore((st) => st.menuKey);
  const filteredTodos = todos.filter((it) => it.category === menuKey);
  return (
    <>
      {filteredTodos.map((todo) => {
        return <TodoItem key={todo.id.toString()} todo={todo} />;
      })}
    </>
  );
};
