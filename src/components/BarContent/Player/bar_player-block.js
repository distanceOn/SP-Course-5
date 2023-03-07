import BarPlayer from './bar_player'
import Volume from './Play/Volume/volume'

export default function BarPlayerBlock() {
  return (
    <div className="bar__player-block">
      <BarPlayer />
      <Volume />
    </div>
  )
}
