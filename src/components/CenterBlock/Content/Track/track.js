import TrackAlbum from './track_album'
import TrackAuthor from './track_author'
import TrackTime from './track_time'
import TrackTitle from './track_title'

export default function Track(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <TrackTitle
          href={props.hrefTitle}
          name={props.nameTitle}
          postscript={props.postscript}
        />
        <TrackAuthor href={props.hrefAuthor} name={props.nameAuthor} />
        <TrackAlbum href={props.hrefAlbum} name={props.nameAlbum} />
        <TrackTime time={props.time} />
      </div>
    </div>
  )
}
