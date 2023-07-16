'use client'
import { api } from '@/services/apiClient'
import { capitalizeFirstLetter } from '@/utils/capitalize'
import { FiUserPlus } from 'react-icons/fi'
import { useQuery } from 'react-query'

type PermissionsType = {
  name: string
  description: string
}

type RolesType = {
  name: string
  description: string
  permissions: PermissionsType[]
}

type UsersType = {
  id: string
  username: string
  email: string
  roles: RolesType[]
}

type UsersResponseData = {
  total: number
  totalPage: number
  users: UsersType[]
}

export default function Users() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await api.get('/users?skip=0&take=12')

    return response.data.data as UsersResponseData
  })

  console.log(data)

  return (
    <main className="py-6 mt-20 h-full">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold">Usuários</h1>
        <button
          className="
          bg-slate-200 
            py-2 px-4 flex gap-2 items-center
            rounded-md shadow-sm hover:shadow-md transition-all
          "
        >
          <FiUserPlus />
          <span>Cadastrar novo usuário</span>
        </button>
      </header>
      <section className="mt-8 overflow-auto rounded-lg shadow-md">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <span>OPS! error inesperado</span>
        ) : (
          <table className="w-full">
            <thead
              className="
                bg-white border-b-2 border-gray-200 
                "
            >
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Username
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  E-mail
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Cargos
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {data?.users.map((user) => (
                <tr className="bg-slate-200" key={user.username}>
                  <td className="p-3 text-sm text-gray-700">
                    {capitalizeFirstLetter(user.username)}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="p-3 text-xs text-gray-700 whitespace-nowrap">
                    {user.roles.map((role) => (
                      <span
                        className={`
                        ${
                          role.name === 'admin'
                            ? 'bg-yellow-200 text-yellow-800'
                            : role.name === 'support'
                            ? 'bg-blue-300 text-blue-800'
                            : ''
                        }
                         bg-opacity-30
                          p-1.5 font-medium uppercase rounded-lg
                          tracking-wider
                        `}
                        key={role.name}
                      >
                        {role.description}
                      </span>
                    ))}
                  </td>
                  <td className="p-3 text-sm text-white flex gap-2 whitespace-nowrap">
                    <button className="p-1 bg-blue-500 rounded-sm">
                      Editar
                    </button>
                    <button className="p-1 bg-red-500 rounded-sm">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  )
}
