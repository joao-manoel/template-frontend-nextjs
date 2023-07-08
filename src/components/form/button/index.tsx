import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="bg-cyan-500 py-2 text-white hover:bg-cyan-400">
      {children}
    </button>
  )
}
