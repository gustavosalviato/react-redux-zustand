import { Video } from "lucide-react";

interface LessonProps {
  title: string
  duration: string
}

export function Lesson({ title, duration }: LessonProps) {
  return (
    <button className='flex items-center gap-2'>
      <Video size={16} />
      <strong className='text-sm'>{title}</strong>
      <span className='ml-auto text-sm font-mono'>{duration}</span>
    </button>
  )
}