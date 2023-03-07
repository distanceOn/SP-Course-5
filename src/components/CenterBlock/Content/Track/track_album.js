export default function TrackAlbum(props) {
  return (
    <div className="track__album">
      <a className="track__album-link" href={props.href}>
        {props.name}
      </a>
    </div>
  )
}
