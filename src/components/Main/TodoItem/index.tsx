import { FC, MouseEventHandler, useEffect, useRef } from "react";
import { Button, Input, InputRef, Tag } from "antd";
import { Todo } from "../../../services/dto";
import { useTodoStore } from "../../../store/useTodosStore";

export const TodoItem: FC<{ todo?: Todo }> = ({ todo }) => {
  const inputRef = useRef<InputRef>(null);
  const { getState } = useTodoStore;

  const toggleEditing = (bool: boolean) => {
    if (!todo) return;

    getState().updateTodo(todo.id, { ...todo, isEditing: bool });
    if (bool) {
      // next render will show input tag
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };
  const valueChange = (type: "title" | "detail", value: string) => {
    if (!todo) return;

    getState().updateTodo(todo.id, { ...todo, [type]: value });
  };

  useEffect(() => {
    if (!todo?.isEditing) return;

    const toggleEditing = () => {
      console.log('====', todo);

      if (!todo) return;
      getState().updateTodo(todo.id, { ...todo, isEditing: false });

    };

    window.addEventListener('click', toggleEditing)
    return () => window.removeEventListener('click', toggleEditing)
  }, [todo?.isEditing])

  const itemClick: MouseEventHandler<HTMLDivElement> = (ev) => {
    console.log('item click', todo);

    if (todo?.isEditing) {
      ev.stopPropagation();
    }
  }

  if (!todo) return null;

  return (
    <div onClick={itemClick}>
      {todo.isEditing ? (
        <div className="bg-white">
          <Input
            ref={inputRef}
            value={todo.title}
            variant="borderless"
            placeholder="标题"
            onPressEnter={() => toggleEditing(false)}
            onChange={(ev) => valueChange("title", ev.target.value)}
          />
          <Input.TextArea
            variant="borderless"
            placeholder="备注"
            value={todo.detail}
            rows={3}
            style={{ resize: "none" }}
            onChange={(ev) => valueChange("detail", ev.target.value)}
          />
          <div className="flex justify-between">
            <div>
              <Tag>标签</Tag>
            </div>
            <div>
              <Button>日历</Button>
              <Button>子任务</Button>
              <Button>标签</Button>
            </div>
          </div>
        </div>
      ) : (
        <span onDoubleClick={() => toggleEditing(true)}>{todo.title}</span>
      )}
    </div>
  );
};
