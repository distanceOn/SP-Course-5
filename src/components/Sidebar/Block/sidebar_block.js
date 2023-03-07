import SidebarItem from './sidebar_item'
import DayList1 from './playlist01.png'
import DayList2 from './playlist02.png'
import DayList3 from './playlist03.png'

export default function SidebarBlock() {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <SidebarItem href="#" src={DayList1} alt="day`s playlist" />
        <SidebarItem href="#" src={DayList2} alt="day`s playlist" />{' '}
        <SidebarItem href="#" src={DayList3} alt="day`s playlist" />
      </div>
    </div>
  )
}
