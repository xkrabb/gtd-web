import { Menu, MenuProps } from "antd"
import { FC } from "react"
import { useSettingStore } from "../../store/useSettingStore"

export const MenuRender: FC<{ items: MenuProps['items'] }> = ({ items }) => {

  const current = useSettingStore(st => st.menuKey)
  const onClick: MenuProps['onClick'] = (e) => {
    useSettingStore.setState({ menuKey: e.key })
  }
  return <Menu className="mt-1 bg-transparent" onClick={onClick} selectedKeys={[current]} items={items} />
}