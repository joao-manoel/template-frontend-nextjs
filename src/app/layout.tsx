import { AuthProvider } from '@/contexts/AuthContext'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { ThemeProvider } from '@/contexts/ThemeContext'
import './assets/css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rscore',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider initialTheme="dark">
        <html lang="en">
          <body
            className={`${inter.className} bg-white dark:bg-black text-black dark:text-white h-screen`}
            suppressHydrationWarning={true}
          >
            {children}
          </body>
        </html>
      </ThemeProvider>
    </AuthProvider>
  )
}
