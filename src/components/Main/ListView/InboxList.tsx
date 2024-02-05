import { FC } from "react";
import { SortableList } from "./SortableList";
import { TodoItem } from "../TodoItem";

export const InboxList: FC = () => {
  return (
    <SortableList type="inbox">
      <TodoItem />
    </SortableList>
  );
};
