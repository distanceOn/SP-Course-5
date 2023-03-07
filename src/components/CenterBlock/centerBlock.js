import CenterBlockH2 from './centerBlock_h2'
import Content from './Content/centerBlock_content'
import Filter from './Filter/centerBlock_filter'
import Search from './Search/search'

export default function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <CenterBlockH2 />
      <Filter />
      <Content />
    </div>
  )
}
