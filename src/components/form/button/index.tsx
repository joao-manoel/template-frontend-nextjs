import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="
      bg-black dark:bg-white py-3 hover:bg-zinc-900 dark:hover:bg-zinc-200
      text-white dark:text-black  rounded-lg
      flex justify-center items-center gap-2
      "
    >
      {children}
    </button>
  )
}
