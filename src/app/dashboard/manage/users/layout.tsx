import { Can } from '@/components/can'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Can permissions={['view_users']}>{children}</Can>
}
