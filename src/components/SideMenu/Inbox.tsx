import { MenuProps } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { MenuRender } from "./MenuRender";
import { stableCategoryTitleMap as titleMap } from "../../until/const";

const items: MenuProps["items"] = [
  { label: titleMap.inbox, key: "inbox", icon: <MailOutlined /> },
];

export const Inbox = () => {
  return <MenuRender items={items} />;
};
