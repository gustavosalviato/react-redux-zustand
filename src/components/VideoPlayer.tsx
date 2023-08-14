import ReactPlayer from 'react-player'
import { Loader } from 'lucide-react'
import { useCurrentLesson, useStore } from '../zustand-store'

export function VideoPlayer() {
  const { isLoading, next } = useStore((state) => {
    return {
      next: state.next,
      isLoading: state.isLoading,
    }
  })

  const { currentLesson } = useCurrentLesson()

  if (!currentLesson) {
    return null
  }

  function handleEndeVideo() {
    next()
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
