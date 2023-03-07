import CenterBlock from '../CenterBlock/centerBlock'
import Nav from '../Nav/nav'
import Sidebar from '../Sidebar/sidebar'

export default function Main() {
  return (
    <div className="main">
      <Nav />
      <CenterBlock />
      <Sidebar />
    </div>
  )
}
