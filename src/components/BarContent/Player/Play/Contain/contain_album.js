export default function ContainAlbum(props) {
  return (
    <div className="track-play__album">
      <a className="track-play__album-link" href={props.href}>
        {props.name}
      </a>
    </div>
  )
}
