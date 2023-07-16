import Link from 'next/link'
import { ReactNode } from 'react'

interface AsideHeaderProps {
  children: ReactNode
}

export function AsideHeader({ children }: AsideHeaderProps) {
  return (
    <header>
      <Link
        href="/"
        className="
          flex flex-row gap-2 items-center group-data-[collapse='true']:flex-col 
          text-2xl font-black px-2
        "
      >
        {children}
      </Link>
    </header>
  )
}
