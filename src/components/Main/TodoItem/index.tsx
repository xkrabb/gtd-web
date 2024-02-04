import { FC } from "react";
import { Todo } from "../../../services/dto";

export const TodoItem: FC<{ todo?: Todo }> = ({ todo }) => {
  if (!todo) return null;

  return (
    <div>
      {todo.id} = {todo.title}
    </div>
  );
};
