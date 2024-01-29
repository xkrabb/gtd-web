import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'




type State = {
  menuKey: string;
}

type Actions = {
  toggleTodo: (todoId: string) => void
}

export const useSettingStore = create<State & Actions>()(
  immer(((set) => ({
    menuKey: 'inbox',
    toggleTodo: (todoId: string) =>
      set((st) => {
        // st.todos
        // state.todos[todoId].done = !state.todos[todoId].done
      }),
  }))
  )
)