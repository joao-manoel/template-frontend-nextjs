'use client'
import { useAuthContext } from '@/contexts/AuthContext'
import { validateUserPermissions } from '@/utils/validateUserPermission'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  const { user } = useAuthContext()
  let hasPermission = false

  if (user) {
    hasPermission = validateUserPermissions({
      user,
      permissions: ['view_dashboard'],
    })
  } else {
    hasPermission = false
  }

  if (!hasPermission) {
    return <h1>Não Tem permissao</h1>
  }

  return <>{children}</>
}
