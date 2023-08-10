import { MessageCircle } from 'lucide-react'

export function Header() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-1 flex-col gap-1">
        <h1 className="font-bold text-2xl">Fundamentos do Redux</h1>
        <span className="text-sm text-zinc-400">Módulo sei lá</span>
      </div>

      <button className="bg-indigo-500 rounded px-3 py-2 font-medium flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-indigo-600">
        <MessageCircle size={18} />
        Deixar feedback
      </button>
    </div>
  )
}
