import { Todo } from "../services/dto/Todo";
import { useSettingStore } from "../store/useSettingStore";
import { useTodoStore } from "../store/useTodosStore";

export const useAddTodo = () => {
  const menuKey = useSettingStore((st) => st.menuKey);
  const { getState } = useTodoStore;
  const addTodo = () => {
    const newTodo = new Todo(menuKey);
    newTodo.title = "test";
    getState().addTodo(newTodo);
  };
  return addTodo;
};
