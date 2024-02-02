import { FC, useState } from "react";
import { useTodoStore } from "../../../store/useTodosStore";
import { TodoItem } from "../TodoItem";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Button } from "antd";
import { SortableItem } from "./SortableItem";

export const InboxList: FC = () => {
  const [activeTodo, setActiveTodo] = useState(null);
  const todoIds = useTodoStore((st) => st.inbox);
  const todos = useTodoStore((st) =>
    st.inbox.map((id) => {
      return st.todos[id];
    }),
  );
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    console.log(active);

    setActiveTodo(active.data);
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = todoIds.indexOf(active.id);
      const newIndex = todoIds.indexOf(over.id);

      const newIds = arrayMove(todoIds, oldIndex, newIndex);
      useTodoStore.setState({ inbox: newIds });
    }
    setActiveTodo(null);
  };
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <SortableContext items={todoIds} strategy={verticalListSortingStrategy}>
        {todos.map((todo) => {
          return (
            <SortableItem key={todo.id} id={todo.id}>
              <TodoItem todo={todo} />
            </SortableItem>
          );
        })}
      </SortableContext>
      <DragOverlay>
        {Boolean(activeTodo) ? <TodoItem todo={activeTodo} /> : null}
      </DragOverlay>
    </DndContext>
  );
};
