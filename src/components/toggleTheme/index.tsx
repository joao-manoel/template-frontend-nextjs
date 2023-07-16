'use client'
import { useThemeContext } from '@/contexts/ThemeContext'

export function ToggleTheme() {
  const { theme, setTheme } = useThemeContext()

  return (
    <button
      className={`
        bg-black text-white p-3 rounded-md dark:bg-white dark: dark:text-black
      `}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Mudar para {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
