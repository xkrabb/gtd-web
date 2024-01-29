import { Button } from "antd"
import { PlusOutlined, SettingOutlined } from '@ant-design/icons'

export const BottomMenu = () => {
  return <div className="h-8 border-t border-solid border-gray-300 flex justify-between items-center px-2">
    <Button size="small" icon={<PlusOutlined />} type="text">新建列表</Button>
    <Button size="small" icon={<SettingOutlined />} type="text"></Button>
  </div>
}