import Dislike from './likedis_dislike'
import Like from './likedis_like'

export default function LikeDis() {
  return (
    <div className="track-play__like-dis">
      <Like />
      <Dislike />
    </div>
  )
}
