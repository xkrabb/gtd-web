import { BottomMenu } from "./BottomMenu";
import { Inbox } from "./Inbox";
import { StableCategory } from "./StableCategory";

export const SideMenu = () => {
  return (
    <div className="bg-[#f5f6f8] h-full flex flex-col justify-between">
      <div className="overflow-y-auto">
        <Inbox />
        <StableCategory />
      </div>
      <BottomMenu />
    </div>
  );
};
