import { ReactNode } from 'react'

interface AsideNavRootProps {
  children: ReactNode
}

export function AsideNavRoot({ children }: AsideNavRootProps) {
  return (
    <div className="flex flex-col justify-between h-full w-ful mt-24">
      {children}
    </div>
  )
}
