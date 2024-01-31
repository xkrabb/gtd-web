import { MenuProps } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { MenuRender } from "./MenuRender";
import { stableCategoryTitleMap as titleMap } from "../../until/const";

const items: MenuProps["items"] = [
  { label: titleMap.today, key: "today", icon: <MailOutlined /> },
  { label: titleMap.plan, key: "plan", icon: <MailOutlined /> },
  { label: titleMap.anytime, key: "anytime", icon: <MailOutlined /> },
  { label: titleMap.someday, key: "someday", icon: <MailOutlined /> },
];

export const StableCategory = () => {
  return <MenuRender items={items} />;
};
