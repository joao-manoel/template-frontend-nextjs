'use client'

import { useAuthContext } from '@/contexts/AuthContext'
import { validateUserPermissions } from '@/utils/validateUserPermission'

type useCanParams = {
  permissions?: string[]
  roles?: string[]
}

export const useCan = ({
  permissions = [],
  roles = [],
}: useCanParams): boolean => {
  const { user, isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    return false
  }

  const userHasValidPermissions = validateUserPermissions({
    user,
    roles,
    permissions,
  })

  return userHasValidPermissions
}
