import { FC } from "react";
import { TodoItem } from "../TodoItem";

import { SortableList } from "./SortableList";

export const InboxList: FC = () => {
  return (
    <SortableList type="inbox">
      <TodoItem />
    </SortableList>
  );
};
