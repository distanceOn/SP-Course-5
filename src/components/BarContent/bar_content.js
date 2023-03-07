import BarPlayerBlock from './Player/bar_player-block'

export default function BarContent() {
  return (
    <div className="bar__content">
      <div className="bar__player-progress" />
      <BarPlayerBlock />
    </div>
  )
}
