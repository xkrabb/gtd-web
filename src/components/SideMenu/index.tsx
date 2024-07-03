import { BottomMenu } from "./BottomMenu";
import { Inbox } from "./Inbox";
import { StableCategory } from "./StableCategory";

export const SideMenu = () => {
  return (
    <div className="bg-gray-50 h-full flex flex-col justify-between">
      <div className="overflow-y-auto">
        <Inbox />
        {/* <StableCategory /> */}
      </div>
      <BottomMenu />
    </div>
  );
};
