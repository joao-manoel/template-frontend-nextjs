'use client'
import { useCan } from '@/hooks/useCan'
import { ReactNode } from 'react'

interface CanProps {
  children: ReactNode
  permissions?: string[]
  roles?: string[]
  to?: string
}

export function Can({ children, permissions, roles, to }: CanProps) {
  const userCanSeeComponent = useCan({ permissions, roles })

  if (!userCanSeeComponent) {
    if (to) {
      // return redirect(to)
    }
    return null
  }

  return <>{children}</>
}
