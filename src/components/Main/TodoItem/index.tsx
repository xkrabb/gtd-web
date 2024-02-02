import { FC } from "react";
import { Todo } from "../../../services/dto";

export const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <div>
      {todo.id} = {todo.title}
    </div>
  );
};
