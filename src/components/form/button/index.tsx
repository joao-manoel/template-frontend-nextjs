import { ButtonHTMLAttributes, ReactNode } from 'react'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  loading?: boolean
}

export function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`
        py-3 hover:bg-blue-600
      text-white rounded-lg border-[1px] border-zinc-600
        flex justify-center items-center gap-2
        transition ease-in-out delay-75
        ${loading ? 'text-gray-800' : ''}
        disabled:hover:bg-transparent
      `}
      disabled={loading}
    >
      {children}
    </button>
  )
}
