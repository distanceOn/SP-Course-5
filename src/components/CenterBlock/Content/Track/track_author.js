export default function TrackAuthor(props) {
  return (
    <div className="track__author">
      <a className="track__author-link" href={props.href}>
        {props.name}
      </a>
    </div>
  )
}
