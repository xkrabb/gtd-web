import { FC } from "react";
import { BottomMenu } from "./BottomMenu";
import { GroupTitle } from "./GroupTitle";
import { ListView } from "./ListView";

export const Main: FC = () => {
  return (
    <div className=" h-full flex flex-col justify-between">
      <GroupTitle />
      <ListView />
      <BottomMenu />
    </div>
  );
};
