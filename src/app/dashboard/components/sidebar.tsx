import { Aside } from '@/components/aside'
import { useAuthContext } from '@/contexts/AuthContext'
import { FaUsersCog } from 'react-icons/fa'
import { LuSettings } from 'react-icons/lu'
import { PiSignOutBold } from 'react-icons/pi'
import { RxDashboard } from 'react-icons/rx'
import { SiSecurityscorecard } from 'react-icons/si'

interface SidebarProps {
  isCollapse: boolean
}

export function Sidebar({ isCollapse }: SidebarProps) {
  const { signOut } = useAuthContext()

  return (
    <Aside.Root isCollapse={isCollapse}>
      <Aside.Header>
        <RxDashboard className={`${isCollapse ? 'text-3xl' : 'text-2xl'}`} />
        <h1 className={`${isCollapse ? 'hidden' : 'block'}`}>Dashboard</h1>
      </Aside.Header>
      <Aside.Nav.Root>
        <Aside.Nav.Section data-collapse={isCollapse}>
          <Aside.Nav.Item
            href="/dashboard/manage/users"
            title="Usuarios"
            icon={FaUsersCog}
            permissions={['manage_users']}
          />
          <Aside.Nav.Item
            href="/dashboard/manage/roles"
            title="Cargos"
            icon={SiSecurityscorecard}
            permissions={['manage_roles']}
          />
        </Aside.Nav.Section>
        <Aside.Nav.Section data-collapse={isCollapse}>
          <Aside.Nav.Item
            href="/dashboard/settings/profile"
            title="Configuração"
            icon={LuSettings}
          />
          <Aside.Nav.Button
            title="Sair"
            icon={PiSignOutBold}
            onClick={signOut}
          />
        </Aside.Nav.Section>
      </Aside.Nav.Root>
    </Aside.Root>
  )
}
