import { FC } from "react";
import { Input } from "antd";
import { Todo } from "../../services/dto/todo";

export const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  return todo.isEditing ? (
    <div>
      <Input.TextArea
        value={todo.title}
        onBlur={() => (todo.isEditing = false)}
      />
    </div>
  ) : (
    <div>Todo {todo.title}</div>
  );
};
