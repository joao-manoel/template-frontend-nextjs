import { ReactNode } from 'react'

interface AsideRootProps {
  children: ReactNode
  isCollapse: boolean
}

export function AsideRoot({ children, isCollapse }: AsideRootProps) {
  return (
    <aside
      data-collapse={isCollapse}
      className={`
        w-64 data-[collapse='true']:w-24 h-full
        transition ease-in-out delay-75
        bg-[#FEFEFE] dark:bg-zinc-950 shadow-md 
        py-10 px-2 data-[collapse='true']:px-6 
        flex flex-col group
      `}
    >
      {children}
    </aside>
  )
}
