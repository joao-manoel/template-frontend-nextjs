'use client'

import { Alert } from '@/components/alert'
import { Button } from '@/components/form/button'
import { Input } from '@/components/form/input'
import { useAuthContext } from '@/contexts/AuthContext'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AiOutlineMail } from 'react-icons/ai'
import { CgSpinner } from 'react-icons/cg'
import { FaSignInAlt } from 'react-icons/fa'
import { RiLockPasswordLine } from 'react-icons/ri'
import { z } from 'zod'

const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z.string().min(6, 'A senha precisa de no minimo 6 caracteres'),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  })

  const { signIn, errorMessage, isLoading } = useAuthContext()

  const handleFormSignIn = (data: any) => {
    signIn(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form
        onSubmit={handleSubmit(handleFormSignIn)}
        className="
          md:w-11/12 w-4/5 max-w-sm h-2/6 px-4 py-7
          flex flex-col gap-5
          shadow-2xl rounded-md
        "
      >
        <Alert message={errorMessage} />
        <Input.Root error={errors.email?.message}>
          <Input.Label htmlFor="email" icon={AiOutlineMail} />
          <Input.Input
            control={control}
            id="email"
            type="email"
            placeholder="Digite seu email"
            autoComplete="off"
            {...register('email')}
          />
        </Input.Root>

        <Input.Root error={errors.password?.message}>
          <Input.Label htmlFor="password" icon={RiLockPasswordLine} />
          <Input.Input
            control={control}
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register('password')}
          />
        </Input.Root>

        <Button type="submit" loading={isLoading}>
          {isLoading ? <CgSpinner className="animate-spin" /> : <FaSignInAlt />}{' '}
          Sign in
        </Button>
      </form>
    </main>
  )
}
