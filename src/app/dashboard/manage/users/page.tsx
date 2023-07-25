'use client'
import { useQuery } from 'react-query'

import { Can } from '@/app/components/can'
import { api } from '@/services/apiClient'
import { capitalizeFirstLetter } from '@/utils/capitalize'
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import { FiUserPlus } from 'react-icons/fi'

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

  return (
    <main className="py-6 mt-20 w-full">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold">Usuários</h1>
        <button
          className="
          bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-800
            py-2 px-4 flex gap-2 items-center
            rounded-md shadow-sm hover:shadow-md transition-all
          "
        >
          <FiUserPlus />
          <span>Cadastrar novo usuário</span>
        </button>
      </header>
      <section className="overflow-auto mt-8 rounded-lg shadow-md scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <span>OPS! error inesperado</span>
        ) : (
          <table className="w-full">
            <thead
              className="
                bg-white dark:bg-zinc-950 border-b-2 border-zinc-500 dark:border-zinc-900
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
            <tbody className="divide-y divide-gray-300 dark:divide-zinc-900">
              {data?.users.map((user) => (
                <tr
                  className="bg-slate-200 dark:bg-zinc-950"
                  key={user.username}
                >
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-200">
                    {capitalizeFirstLetter(user.username)}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="p-3 text-xs text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {user.roles.length > 0 ? (
                      user.roles.map((role) => (
                        <span
                          className={`
                          ${
                            role.name === 'admin'
                              ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-500'
                              : role.name === 'support'
                              ? 'bg-blue-300 text-blue-800 dark:bg-blue-500 dark:text-white'
                              : ''
                          }
                          bg-opacity-30
                          text-[8px] p-1.5 font-medium uppercase
                          rounded-lg tracking-wider
                        `}
                          key={role.name}
                        >
                          {role.description}
                        </span>
                      ))
                    ) : (
                      <span
                        className={`
                          bg-black text-white bg-opacity-30
                          text-[8px] p-1.5 font-medium uppercase 
                          rounded-lg tracking-wider 
                        `}
                      >
                        User
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-sm text-white flex gap-2 whitespace-nowrap">
                    <Can permissions={['edit_users']}>
                      <button className="py-2 px-3 bg-blue-500 rounded-md flex gap-2 items-center">
                        <AiFillEdit />
                        <span>Editar</span>
                      </button>
                    </Can>
                    <Can permissions={['delete_users']}>
                      <button className="py-2 px-3 bg-red-500 text-white rounded-md flex gap-2 items-center">
                        <AiOutlineDelete />
                        <span>Delete</span>
                      </button>
                    </Can>
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
