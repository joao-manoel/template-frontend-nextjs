type userProps = {
  roles: {
    name: string
    permissions: {
      name: string
    }[]
  }[]
}

type validadeUserPermissionProps = {
  user: userProps
  roles?: string[]
  permissions?: string[]
}

export function validateUserPermissions({
  user,
  roles,
  permissions,
}: validadeUserPermissionProps): boolean {
  if (user) {
    // verifica se tem a role
    if (roles) {
      const hasRole = user.roles.filter((role) => roles.includes(role.name))

      if (hasRole.length >= 1) {
        return true
      }

      return false
    }
    // verifica se tem permissao
    if (permissions) {
      const userPermissions = user.roles
        .flatMap((role) => role.permissions)
        .map((permission) => permission.name)
      const hasPermissions = permissions.every((permission) =>
        userPermissions.includes(permission),
      )

      if (hasPermissions) {
        return true
      }
      return false
    }
    return false
  }

  return false
}
