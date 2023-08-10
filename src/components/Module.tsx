import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'
import { useAppSelector } from '../store'
import { useDispatch } from 'react-redux'
import { play } from '../store/slices/player'

interface ModuleProps {
  title: string
  lessonsAmount: number
  moduleIndex: number
}

export function Module({ lessonsAmount, moduleIndex, title }: ModuleProps) {
  const dispatch = useDispatch()

  const lessons = useAppSelector((state) => {
    return state.player.course.modules[moduleIndex].lessons
  })

  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    return {
      currentLessonIndex,
      currentModuleIndex,
    }
  })

  return (
    <Collapsible.Root defaultOpen={moduleIndex === 0} className="group">
      <div>
        <Collapsible.Trigger className="flex items-center text-left bg-zinc-800 p-4 w-full">
          <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center font-bold">
            {moduleIndex + 1}
          </div>

          <div className="flex flex-col gap-1 ml-5">
            <strong>{title}</strong>
            <span className="text-sm text-zinc-400">{lessonsAmount} aulas</span>
          </div>

          <ChevronDown className="ml-auto group-data-[state=open]:rotate-180 transition-transform" />
        </Collapsible.Trigger>

        <Collapsible.Content>
          <nav className="flex flex-col p-6 gap-4">
            {lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                lessonIndex === currentLessonIndex &&
                moduleIndex === currentModuleIndex

              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                  isCurrent={isCurrent}
                />
              )
            })}
          </nav>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  )
}
