import { MessageCircle, ChevronDown, Video } from 'lucide-react'
import ReactPlayer from 'react-player'


export function Player() {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-center">
          {/* Header */}

          <div className="flex flex-1 flex-col gap-1">
            <h1 className="font-bold text-2xl">Fundamentos do Redux</h1>
            <span className="text-sm text-zinc-400">Módulo sei lá</span>
          </div>

          <button className="bg-indigo-500 rounded px-3 py-2 font-medium flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-indigo-600">
            <MessageCircle size={18} />
            Deixar feedback</button>
        </div>

        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>
          <div className='flex flex-1'>
            <div className='bg-zinc-950 w-full aspect-video'>
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=bEvmVwyW0vg"
              />
            </div>
          </div>

          <aside className='w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 h-[600px] overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900'>
            <div>
              <button className='flex items-center text-left bg-zinc-800 p-4 w-full'>

                <div className='w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center font-bold'>
                  1
                </div>

                <div className='flex flex-col gap-1 ml-5'>
                  <strong>A base do Redux</strong>
                  <span className='text-sm text-zinc-400'>12 aulas</span>
                </div>

                <ChevronDown className='ml-auto' />
              </button>

              <nav className='flex flex-col p-6 gap-4'>
                <button className='flex items-center gap-2'>
                  <Video size={16} />
                  <strong className='text-sm'>UI do módulos</strong>
                  <span className='ml-auto text-sm font-mono'>03:00</span>
                </button>
              </nav>
            </div>
            <div>
              <button className='flex items-center text-left bg-zinc-800 p-4 w-full'>

                <div className='w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center font-bold'>
                  1
                </div>

                <div className='flex flex-col gap-1 ml-5'>
                  <strong>A base do Redux</strong>
                  <span className='text-sm text-zinc-400'>12 aulas</span>
                </div>

                <ChevronDown className='ml-auto' />
              </button>

              <nav className='flex flex-col p-6 gap-4'>
                <button className='flex items-center gap-2'>
                  <Video size={16} />
                  <strong className='text-sm'>UI do módulos</strong>
                  <span className='ml-auto text-sm font-mono'>03:00</span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}