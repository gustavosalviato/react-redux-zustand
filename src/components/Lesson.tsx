import { PlayCircle, Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  onPlay: () => void
  isCurrent?: boolean
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      data-active={isCurrent}
      disabled={isCurrent}
      onClick={onPlay}
      className="flex items-center gap-2 data-[active=true]:text-emerald-500 enabled:hover:text-zinc-400 disabled:cursor-not-allowed"
    >
      {isCurrent ? (
        <PlayCircle size={16} className="text-emerald-500" />
      ) : (
        <Video size={16} />
      )}
      <span className="text-sm duration-300 transition-colors">{title}</span>
      <span className="ml-auto text-sm font-mono">{duration}</span>
    </button>
  )
}
