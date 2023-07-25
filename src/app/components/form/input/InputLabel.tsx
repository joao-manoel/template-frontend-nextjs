import { ElementType, LabelHTMLAttributes } from 'react'

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  icon?: ElementType
  text?: string
}

export function InputLabel({ text, icon: Icon, ...rest }: InputLabelProps) {
  return (
    <label
      className="w-11 flex justify-center px-2 py-2 items-center "
      {...rest}
    >
      {Icon ? (
        <Icon className="text-zinc-400 text-1xl" />
      ) : text ? (
        <p>{text}</p>
      ) : null}
    </label>
  )
}
