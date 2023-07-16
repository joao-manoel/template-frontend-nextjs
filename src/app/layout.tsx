import { AuthProvider } from '@/contexts/AuthContext'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import './assets/css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rscore',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
