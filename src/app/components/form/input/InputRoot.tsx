import { ReactNode } from 'react'
import { BiError } from 'react-icons/bi'

interface InputRootProps {
  children: ReactNode
  error?: string | undefined
}
export default function InputRoot({ children, error }: InputRootProps) {
  return (
    <>
      <div
        className={`
          w-full border-[1px] dark:border-[1px] ${
            error ? 'border-red-600' : 'border-transparent dark:border-zinc-900'
          }
        bg-white dark:bg-zinc-950
          rounded-md flex gap-0
        `}
      >
        {children}
      </div>
      {error && (
        <span className="-mt-4 font-light text-sm text-red-600 flex gap-1 items-center">
          <BiError />
          {error}
        </span>
      )}
    </>
  )
}
