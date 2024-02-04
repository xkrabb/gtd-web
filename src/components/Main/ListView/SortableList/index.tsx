import React, { FC, ReactElement, useState } from "react";
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
import { useTodoStore } from "../../../../store/useTodosStore";
import { TodoItem } from "../../TodoItem";
import { SortableItem } from "./SortableItem";
import { CategoryProp } from "../../../../services/dto/types";

export const SortableList: FC<{
  children: ReactElement;
  type: Exclude<CategoryProp, "plan">;
}> = ({ type, children }) => {
  const [activeId, setActiveId] = useState<string | number | null>(null);
  const todoIds = useTodoStore((st) => st[type]);
  const todoMap = useTodoStore((st) => st.todos);
  const currentTodos = todoIds.map((id) => todoMap[id]);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    setActiveId(active.id);
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = todoIds.indexOf(`${active.id}`);
      const newIndex = todoIds.indexOf(`${over.id}`);

      const newIds = arrayMove(todoIds, oldIndex, newIndex);
      useTodoStore.setState({ [type]: newIds });
    }
    setActiveId(null);
  };
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <SortableContext items={todoIds} strategy={verticalListSortingStrategy}>
        {currentTodos.map((todo) => {
          return (
            <SortableItem key={todo.id} id={todo.id}>
              <>{React.cloneElement(children, { todo })}</>
            </SortableItem>
          );
        })}
      </SortableContext>
      <DragOverlay>
        {activeId ? <TodoItem todo={todoMap[activeId]} /> : null}
      </DragOverlay>
    </DndContext>
  );
};
