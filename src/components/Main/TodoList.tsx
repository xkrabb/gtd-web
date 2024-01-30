import { FC } from "react";
import { useTodoStore } from "../../store/useTodosStore";
import { useSettingStore } from "../../store/useSettingStore";

export const TodoList: FC = () => {
  const todos = useTodoStore(st => st.todos);
  const menuKey = useSettingStore(st => st.menuKey);
  const filteredTodos = todos.filter(it => it.category === menuKey);
  return <>{
    filteredTodos.map(todo => {
      return <p key={todo.id.toString()}>{todo.title}</p>
    })
  }</>
}