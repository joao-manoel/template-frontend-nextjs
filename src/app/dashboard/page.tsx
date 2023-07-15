'use client'

import { Can } from '@/components/can'
import { useAuthContext } from '@/contexts/AuthContext'
import { capitalizeFirstLetter } from '@/utils/capitalize'
import Link from 'next/link'
import { FaUsersCog } from 'react-icons/fa'
import { LuSettings } from 'react-icons/lu'
import { PiSignOutBold } from 'react-icons/pi'
import { RxDashboard } from 'react-icons/rx'
import { SiSecurityscorecard } from 'react-icons/si'

export default function Dashboard() {
  const { user, signOut } = useAuthContext()

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside
          className=" w-16 sm:w-64 transition ease-in-out delay-75
          bg-[#FEFEFE] dark:bg-zinc-950 shadow-md py-4 px-2 sm:p-6
          flex flex-col
          "
        >
          <header>
            <Link
              href="/"
              className="flex justify-center gap-2 items-center text-2xl font-black"
            >
              <RxDashboard className="text-3xl sm:text-2xl" />
              <h1 className="hidden sm:block">Dashboard</h1>
            </Link>
          </header>
          <div className="flex flex-col justify-between h-full w-ful mt-24">
            <nav className="w-full">
              <ul className="flex flex-1 flex-col gap-2">
                <Can permissions={['manage_users']}>
                  <li
                    className="
                      px-3 py-2 
                    hover:bg-slate-100 dark:hover:bg-zinc-900 
                      transition ease-in-out delay-75
                      font-medium rounded-md cursor-pointer
                      flex flex-col sm:flex-row items-center gap-2 
                    "
                  >
                    <FaUsersCog className="text-2xl sm:text-base" />
                    <span className="hidden sm:block">Usuarios</span>
                  </li>
                </Can>
                <Can permissions={['manage_roles']}>
                  <li
                    className="px-3 py-2 
                  hover:bg-slate-100 dark:hover:bg-zinc-900 
                    transition ease-in-out delay-75
                    font-medium rounded-md cursor-pointer
                    flex items-center gap-2 flex-col sm:flex-row
                  "
                  >
                    <SiSecurityscorecard className="text-2xl sm:text-base" />
                    <span className="hidden sm:block">Cargos</span>
                  </li>
                </Can>
              </ul>
            </nav>

            <nav>
              <ul>
                <li
                  className="px-3 py-2 
                hover:bg-slate-100 dark:hover:bg-zinc-900 
                  transition ease-in-out delay-75
                  font-medium rounded-md cursor-pointer
                  flex items-center gap-2 flex-col sm:flex-row
                "
                >
                  <LuSettings className="text-2xl sm:text-base" />
                  <span className="hidden sm:block">Configuração</span>
                </li>
                <li
                  className="
                  px-3 py-2 
                hover:bg-slate-100 dark:hover:bg-zinc-900 
                  transition ease-in-out delay-75
                  font-medium rounded-md cursor-pointer
                  flex items-center gap-2 flex-col sm:flex-row
                "
                  onClick={signOut}
                >
                  <PiSignOutBold className="text-2xl sm:text-base" />
                  <span className="hidden sm:block">Sair</span>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="flex-1">
          <header className="flex px-11 py-6 items-center">
            <section className="flex-1">
              <span className="font-semibold text-sm">
                Hi, {capitalizeFirstLetter(user?.username)},
              </span>
              <h3 className="text-4xl font-semibold">Bem vindo 👋</h3>
            </section>
            <section className="flex gap-2">
              <button className="text-2xl group  bg-white dark:bg-zinc-900 p-2 rounded-md shadow-md">
                <LuSettings className="transition ease-in-out delay-100 group-hover:rotate-90" />
              </button>
            </section>
          </header>
        </main>
      </div>
      {/** }
      <footer className="bg-zinc-200 p-6 border-t border-zinc-100">
        footer
      </footer>
  { */}
    </div>
  )
}
