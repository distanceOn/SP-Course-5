export default function ContainAuthor(props) {
  return (
    <div className="track-play__author">
      <a className="track-play__author-link" href={props.href}>
        {props.name}
      </a>
    </div>
  )
}
