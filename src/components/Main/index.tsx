import { FC } from "react";
import { BottomMenu } from "./BottomMenu";
import { GroupTitle } from "./GroupTitle";

export const Main: FC = () => {
  return <div className=" h-full flex flex-col justify-between">
    <GroupTitle />
    <div>detail</div>
    <BottomMenu />
  </div>
}