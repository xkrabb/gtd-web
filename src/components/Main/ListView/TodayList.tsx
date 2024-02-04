import { FC } from "react";
import { TodoItem } from "../TodoItem";
import { SortableList } from "./SortableList";

export const TodayList: FC = () => {
  return (
    <SortableList type="today">
      <TodoItem />
    </SortableList>
  );
};
