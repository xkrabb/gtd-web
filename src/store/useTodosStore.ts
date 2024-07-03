import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { get, set, del } from "idb-keyval";
import { Area, Todo } from "../services/dto";

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
  todos: Record<string, Todo>;
  inbox: string[]; // 收件箱todoId
  today: string[];
  plan: string[];
  upcoming: string[];
  someday: string[];
  areas: Area[];
};

type Actions = {
  addTodo: (todo: Todo) => void;
  updateTodo: (id: string, todo: Todo) => void;
  moveTodo: (from: string, to: string) => void;
};

export const useTodoStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      todos: {},
      inbox: [],
      today: [],
      plan: [],
      upcoming: [],
      someday: [],
      areas: [],
      addTodo: (todo) => {
        set((st) => {
          st.todos[todo.id] = todo;
          const prevIds = get()[todo.category];
          st[todo.category] = [...prevIds, todo.id];
        });
      },
      updateTodo: (id, todo) => {
        set((st) => {
          st.todos[id] = todo;
        });
      },
      moveTodo: () => {},
    })),
    {
      name: "todos",
      storage: createJSONStorage(() => storage),
    },
  ),
);
