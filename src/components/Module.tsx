import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface ModuleProps {
  title: string
  lessonsAmount: number
  moduleIndex: number
}

export function Module({ lessonsAmount, moduleIndex, title }: ModuleProps) {
  return (
    <Collapsible.Root>
      <div>
        <Collapsible.Trigger className='flex items-center text-left bg-zinc-800 p-4 w-full'>

          <div className='w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center font-bold'>
            {moduleIndex + 1}
          </div>

          <div className='flex flex-col gap-1 ml-5'>
            <strong>{title}</strong>
            <span className='text-sm text-zinc-400'>{lessonsAmount} aulas</span>
          </div>

          <ChevronDown className='ml-auto' />
        </Collapsible.Trigger>

        <Collapsible.Content>
          <nav className='flex flex-col p-6 gap-4'>
            <Lesson title="Teste" duration="03:00" />
            <Lesson title="Teste" duration="03:00" />
            <Lesson title="Teste" duration="03:00" />
            <Lesson title="Teste" duration="03:00" />
          </nav>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  )
}