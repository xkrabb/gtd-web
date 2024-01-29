import { useSettingStore } from "../../store/useSettingStore"
import { stableCategoryTitleMap } from "../../until/const"



export const GroupTitle = () => {
  const currentGroupKey = useSettingStore(st => st.menuKey)
  const stableCategoryTitle = stableCategoryTitleMap[currentGroupKey]

  return <h3>
    {stableCategoryTitle}
  </h3>
}