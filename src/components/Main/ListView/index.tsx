import { FC } from "react";
import { useSettingStore } from "../../../store/useSettingStore";
import { InboxList } from "./InboxList";
import { TodayList } from "./TodayList";

export const ListView: FC = () => {
  const menuKey = useSettingStore((st) => st.menuKey);

  switch (menuKey) {
    case "inbox":
      return <InboxList />;
    case "today":
      return <TodayList />;
    default:
      return <>未实现的列表</>;
  }
};
