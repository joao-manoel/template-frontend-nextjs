import { ReactNode } from 'react'

interface AsideNavSectionProps {
  children: ReactNode
}

export function AsideNavSection({ children }: AsideNavSectionProps) {
  return (
    <nav className="w-full">
      <ul className="flex flex-1 flex-col gap-2">{children}</ul>
    </nav>
  )
}
