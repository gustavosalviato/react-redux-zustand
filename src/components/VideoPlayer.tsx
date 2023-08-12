import ReactPlayer from 'react-player'
import { next, useCurrentLesson } from '../store/slices/player'
import { useAppDispatch, useAppSelector } from '../store'
import { Loader } from 'lucide-react'

export function VideoPlayer() {
  const isLoading = useAppSelector((state) => state.player.isLoading)
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
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          onEnded={handleEndeVideo}
          width="100%"
          height="100%"
          controls
          url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        />
      )}
    </div>
  )
}
