import ContainAlbum from './contain_album'
import ContainAuthor from './contain_author'
import ContainImg from './contain_img'

export default function PlayContain() {
  return (
    <div className="track-play__contain">
      <ContainImg />
      <ContainAuthor href="http://" name="Ты та..." />
      <ContainAlbum href="http://" name="Баста" />
    </div>
  )
}
