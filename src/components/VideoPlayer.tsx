import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '../store/slices/player'

export function VideoPlayer() {
  const dispatch = useDispatch()

  const { currentLesson } = useCurrentLesson()

  function handleEndeVideo() {
    dispatch(next())
  }
  return (
    <div className="bg-zinc-950 w-full aspect-video">
      <ReactPlayer
        onEnded={handleEndeVideo}
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
