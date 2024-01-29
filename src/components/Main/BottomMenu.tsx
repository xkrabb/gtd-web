import { FC, ReactNode } from "react"
import { Button } from "antd"
import { PlusOutlined, ScheduleOutlined, BlockOutlined, SearchOutlined } from '@ant-design/icons'


const UIButton: FC<{ icon: ReactNode; onClick: () => void }> = ({ icon, onClick }) => {
  return <Button style={{ width: 100 }} size="small" icon={icon} type="text" onClick={onClick} />
}

export const BottomMenu: FC = () => {
  const onAddTodo = () => { }
  const onSchedule = () => { }
  const onMoveGroup = () => { }
  const onSearch = () => { }
  return <div className="h-8 border-t border-solid border-gray-300 flex justify-center items-center px-2">
    <UIButton icon={<PlusOutlined />} onClick={onAddTodo} />
    <UIButton icon={<ScheduleOutlined />} onClick={onSchedule} />
    <UIButton icon={<BlockOutlined />} onClick={onMoveGroup} />
    <UIButton icon={<SearchOutlined />} onClick={onSearch} />
  </div>
}