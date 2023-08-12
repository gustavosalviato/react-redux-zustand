import ReactPlayer from 'react-player'
import { next, useCurrentLesson } from '../store/slices/player'
import { useAppDispatch } from '../store'

export function VideoPlayer() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useCurrentLesson()

  if (!currentLesson) {
    return null
  }

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
