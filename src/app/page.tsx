'use client'
import { Button } from '@/components/form/button'
import { Input } from '@/components/form/input'
import { useAuthContext } from '@/contexts/AuthContext'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

export default function Login() {
  const { register, handleSubmit, control } = useForm()

  const { signIn, errorMessage } = useAuthContext()

  const handleSubmitFormSignIn = (data: any) => {
    signIn(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form
        onSubmit={handleSubmit(handleSubmitFormSignIn)}
        className="
          md:w-11/12 w-4/5 max-w-sm h-2/6 px-4 py-7
          flex flex-col gap-5
          shadow-2xl border-2 border-gray-300 dark:border-gray-900 rounded-md
        "
      >
        <header className="flex justify-center">
          <Image src="images/icon-logo.svg" alt="Logo" width={50} height={50} />
        </header>
        <div className="flex justify-center text-red-400">
          {errorMessage && <span>{errorMessage}</span>}
        </div>
        <Input.Root>
          <Input.Label htmlFor="email" icon={AiOutlineMail} />
          <Input.Input
            control={control}
            id="email"
            type="email"
            placeholder="Digite seu email"
            {...register('email')}
          />
        </Input.Root>

        <Input.Root>
          <Input.Label htmlFor="password" icon={RiLockPasswordLine} />
          <Input.Input
            control={control}
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register('password')}
          />
        </Input.Root>

        <Button type="submit">Acessar</Button>
      </form>
    </main>
  )
}
