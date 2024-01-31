import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { get, set, del } from "idb-keyval";
import { Todo } from "../services/dto/todo";

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};

type State = {
  todos: Todo[];
};

type Actions = {
  addTodo: (todo: Todo) => void;
};

export const useTodoStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      todos: [],
      addTodo: (todo) =>
        set((st) => {
          st.todos = [...get().todos, todo];
        }),
    })),
    {
      name: "todos",
      storage: createJSONStorage(() => storage),
    },
  ),
);
