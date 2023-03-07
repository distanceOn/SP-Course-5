import Controls from './Controls/player_controls'
import Play from './Play/play'

export default function BarPlayer() {
  return (
    <div className="bar__player player">
      <Controls />
      <Play />
    </div>
  )
}
