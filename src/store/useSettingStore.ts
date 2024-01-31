import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { CategoryProp } from "../services/dto/types";

type State = {
  menuKey: CategoryProp; // 当前分组key
  todoId: string; // 当前todoId
};

type Actions = {
  toggleTodo: () => void;
};

export const useSettingStore = create<State & Actions>()(
  immer((set) => ({
    menuKey: "today",
    todoId: "",
    toggleTodo: () =>
      set((st) => {
        st.todoId = "1";
      }),
  })),
);
