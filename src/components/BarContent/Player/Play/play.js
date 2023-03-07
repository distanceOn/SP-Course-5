import PlayContain from './Contain/play_contain'
import LikeDis from './LikeDis/play_likedis'

export default function Play() {
  return (
    <div className="player__track-play track-play">
      <PlayContain />
      <LikeDis />
    </div>
  )
}
