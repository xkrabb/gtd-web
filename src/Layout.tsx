import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import { Main } from './components/Main'
import { SideMenu } from './components/SideMenu'

function Layout() {


  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={30} minSize={20}>
        <SideMenu />
      </Panel>
      <PanelResizeHandle className="w-1 bg-slate-400" />
      <Panel minSize={30}>
        <Main />
      </Panel>
    </PanelGroup>
  )
}

export default Layout
