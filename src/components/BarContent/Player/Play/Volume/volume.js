import VolumeImg from './volume_img'
import VolumeProgress from './volume_progress'

export default function Volume() {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <VolumeImg />
        <VolumeProgress />
      </div>
    </div>
  )
}
