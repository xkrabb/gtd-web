import { FC } from "react";
import { Todo } from "../../services/dto/todo";

export const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  return <>Todo {todo.title}</>;
};
