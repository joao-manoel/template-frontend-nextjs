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
        py-3 hover:bg-white hover:text-black
       rounded-lg border-[1px] border-zinc-600
        flex justify-center items-center gap-2
        transition ease-in-out delay-75
        ${loading ? 'bg-white text-black' : 'text-white'}
      `}
      disabled={loading}
    >
      {children}
    </button>
  )
}
