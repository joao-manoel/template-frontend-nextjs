import { Can } from '@/components/can/can'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Can permissions={['view_dashboard']} to="/unauthorized">
      {children}
    </Can>
  )
}
