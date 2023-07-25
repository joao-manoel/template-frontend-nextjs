'use client'
import { Can } from '@/app/components/can/'
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
        <div className="flex flex-col h-full overflow-hidden">
          <section className="flex flex-1 h-full">
            <Sidebar isCollapse={isCollapse} />
            <MainWrapper handleCollapseNav={handleCollapseNav}>
              {children}
            </MainWrapper>
          </section>
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
