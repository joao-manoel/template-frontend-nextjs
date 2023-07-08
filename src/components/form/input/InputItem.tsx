import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'

interface InputItemProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  error?: FieldError
  ref: string
  control: Control<any>
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputItemProps> = (
  { name, control, error = undefined, ...inputRest }: InputItemProps,
  ref,
) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field: { ref, ...rest } }) => (
        <input
          className="bg-transparent w-full 
          text-black dark:text-gray-300
          outline-0
          px-1 py-1
          group-focus:bg-red-100
          "
          {...inputRest}
          {...rest}
        />
      )}
    />
  )
}

export const InputItem = forwardRef(Input)
