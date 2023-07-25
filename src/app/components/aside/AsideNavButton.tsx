import { ElementType, LiHTMLAttributes } from 'react'

interface AsideNavButtonProps extends LiHTMLAttributes<HTMLLIElement> {
  title: string
  icon: ElementType
}

export function AsideNavButton({
  title,
  icon: Icon,
  ...rest
}: AsideNavButtonProps) {
  return (
    <li
      {...rest}
      className="
          px-3 py-2 
          hover:bg-slate-100 dark:hover:bg-zinc-900 
          transition ease-in-out delay-75
          font-medium rounded-md cursor-pointer
          flex items-center gap-2 flex-row group-data-[collapse=true]:flex-col
          group-data-[collapse=true]:text-2xl text-base group
        "
    >
      <Icon />
      <span className="block group-data-[collapse=true]:hidden">{title}</span>
    </li>
  )
}
