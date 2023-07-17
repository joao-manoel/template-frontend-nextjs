import { useAuthContext } from '@/contexts/AuthContext'
import { capitalizeFirstLetter } from '@/utils/capitalize'
import { ReactNode } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { LuSettings } from 'react-icons/lu'

interface MainWrapperProps {
  children: ReactNode
  handleCollapseNav: () => void
}

export function MainWrapper({ children, handleCollapseNav }: MainWrapperProps) {
  const { user } = useAuthContext()
  return (
    <main
      className="
        w-full h-full
        flex flex-col flex-1
        pl-11 pr-11 pxl py-6
        overflow-auto
      "
    >
      <header className="flex items-center ">
        <section className="flex-1 flex gap-8">
          <button className="text-4xl" onClick={handleCollapseNav}>
            <GiHamburgerMenu />
          </button>
          <div>
            <span className="font-semibold text-sm">
              Olá, {capitalizeFirstLetter(user?.username)}
            </span>
            <h3 className="text-4xl font-semibold">Bem vindo 👋</h3>
          </div>
        </section>
        <section className="flex gap-2">
          <button className="text-2xl group bg-white dark:bg-zinc-900 p-2 rounded-md shadow-md">
            <LuSettings className="transition ease-in-out delay-100 group-hover:rotate-90" />
          </button>
        </section>
      </header>
      <div>{children}</div>
    </main>
  )
}
