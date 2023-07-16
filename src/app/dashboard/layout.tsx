'use client'
import { Can } from '@/components/can/'
import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MainWrapper } from './components/mainWrapper'
import { Sidebar } from './components/sidebar'

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isCollapse, setIsCollapse] = useState<boolean>(true)

  const handleCollapseNav = () => {
    setIsCollapse(!isCollapse)
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Can permissions={['view_dashboard']} to="/unauthorized">
        <div className="h-screen flex flex-col">
          <div className="flex flex-1">
            <Sidebar isCollapse={isCollapse} />
            <MainWrapper handleCollapseNav={handleCollapseNav}>
              {children}
            </MainWrapper>
          </div>
          {/** }
        <footer className="bg-zinc-200 p-6 border-t border-zinc-100">
          footer
        </footer>
        { */}
        </div>
      </Can>
    </QueryClientProvider>
  )
}
