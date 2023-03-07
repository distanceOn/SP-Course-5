import SidebarBlock from './Block/sidebar_block'
import Personal from './Personal/sidebar_personal'

export default function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <Personal />
      <SidebarBlock />
    </div>
  )
}
