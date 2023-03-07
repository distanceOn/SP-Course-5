import Playlist from './content_playlist'
import ContentTitles from './content_titles'

export default function Content() {
  return (
    <div className="centerblock__content">
      <ContentTitles />
      <Playlist />
    </div>
  )
}
