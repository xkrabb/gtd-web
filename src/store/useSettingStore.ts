import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'




type State = {
  menuKey: string; // 当前分组key
  todoId: string;// 当前todoId
}

type Actions = {
  toggleTodo: () => void
}

export const useSettingStore = create<State & Actions>()(
  immer(((set) => ({
    menuKey: 'inbox',
    todoId: '',
    toggleTodo: () =>
      set((st) => {
        st.todoId = '1'
      }),
  }))
  )
)