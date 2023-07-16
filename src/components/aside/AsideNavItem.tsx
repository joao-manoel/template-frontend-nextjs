import Link from 'next/link'
import { ElementType, LiHTMLAttributes } from 'react'
import { Can } from '../can'

interface AsideNavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  title: string
  icon: ElementType
  href?: string
  permissions?: string[]
  roles?: string[]
}

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  title: string
  icon: ElementType
  href?: string
}

const Item = ({ title, href, icon: Icon, ...rest }: ItemProps) => {
  return (
    <Link href={`${href || ''}`}>
      <li
        {...rest}
        className={`
          px-3 py-2 relative
          hover:bg-slate-100 dark:hover:bg-zinc-900 
          transition ease-in-out delay-75
          font-medium rounded-md cursor-pointer
          flex gap-2 items-center
          flex-row group-data-[collapse=true]:flex-col
          group-data-[collapse=true]:text-2xl text-base
        `}
      >
        <Icon />
        <span
          className="
            block group-data-[collapse=true]:hidden
          "
        >
          {title}
        </span>
        {/* }
        <section
          className="
            absolute text-sm
            hidden group-data-[collapse=true]:group-hover:block
          text-white px-4 py-2
            left-10 top-0
          "
        >
          <span>{title}</span>
        </section>
  { */}
      </li>
    </Link>
  )
}

export function AsideNavItem({
  title,
  icon: Icon,
  href,
  permissions,
  roles,
  ...rest
}: AsideNavItemProps) {
  if (permissions || roles) {
    return (
      <Can permissions={permissions} roles={roles}>
        <Item title={title} href={href} icon={Icon} {...rest} />
      </Can>
    )
  }

  return <Item title={title} href={href} icon={Icon} {...rest} />
}
