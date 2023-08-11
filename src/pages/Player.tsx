import { useEffect } from 'react'
import { Header } from '../components/Header'
import { VideoPlayer } from '../components/VideoPlayer'
import { Module } from '../components/Module'
import { useAppSelector } from '../store'
import { useCurrentLesson, start } from '../store/slices/player'
import { api } from '../lib/axios'
import { useDispatch } from 'react-redux'

export function Player() {
  const dispatch = useDispatch()
  const modules = useAppSelector((state) => {
    return state.player.course?.modules
  })

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    api.get('/courses/1').then((response) => {
      dispatch(start(response.data))
    })
  }, [])

  useEffect(() => {
    window.document.title = `Assistindo: ${currentLesson?.title}`
  }, [currentLesson])

  return (
    <div className="h-screen flex justify-center items-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <Header />

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex flex-1">
            <VideoPlayer />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 h-[600px] overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900">
            {modules &&
              modules.map((module, moduleIndex) => {
                return (
                  <Module
                    key={module.id}
                    lessonsAmount={modules.length}
                    moduleIndex={moduleIndex}
                    title={module.title}
                  />
                )
              })}
          </aside>
        </main>
      </div>
    </div>
  )
}
