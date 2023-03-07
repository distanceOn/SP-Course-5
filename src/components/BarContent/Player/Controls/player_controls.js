import ControlsNext from './controls_next'
import ControlsPlay from './controls_play'
import ControlsPrev from './controls_prev'
import ControlsRepeat from './controls_repeat'
import ControlsShuffle from './controls_shuffle'

export default function Controls() {
  return (
    <div className="player__controls">
      <ControlsPrev />
      <ControlsPlay />
      <ControlsNext />
      <ControlsRepeat />
      <ControlsShuffle />
    </div>
  )
}
