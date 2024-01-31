import { FC } from "react";
import { BottomMenu } from "./BottomMenu";
import { GroupTitle } from "./GroupTitle";
import { TodoList } from "./TodoList";

export const Main: FC = () => {
  return (
    <div className=" h-full flex flex-col justify-between">
      <GroupTitle />
      <TodoList />
      <BottomMenu />
    </div>
  );
};
