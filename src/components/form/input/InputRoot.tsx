import { ReactNode } from 'react'

interface InputRootProps {
  children: ReactNode
}
export default function InputRoot({ children }: InputRootProps) {
  return (
    <div
      className="w-full 
    bg-white dark:bg-gray-800
      rounded-md flex
      group 
    "
    >
      {children}
    </div>
  )
}
