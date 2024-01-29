import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware'
import { get, set, del } from 'idb-keyval'
import { Todo } from '../services/dto/todo'

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name)
  },
}


type State = {
  todos: Todo[];
}

type Actions = {
  toggleTodo: (todoId: string) => void
}

export const useTodoStore = create<State & Actions>()(
  persist(immer(((set) => ({
    todos: [],
    toggleTodo: (todoId: string) =>
      set((st) => {
        // st.todos
        // state.todos[todoId].done = !state.todos[todoId].done
      }),
  }))), {
    name: 'todos',
    storage: createJSONStorage(() => storage)
  }),
)