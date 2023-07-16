import { AsideHeader } from './AsideHeader'
import { AsideNavButton } from './AsideNavButton'
import { AsideNavItem } from './AsideNavItem'
import { AsideNavRoot } from './AsideNavRoot'
import { AsideNavSection } from './AsideNavSection'
import { AsideRoot } from './AsideRoot'

export const Aside = {
  Root: AsideRoot,
  Header: AsideHeader,
  Nav: {
    Root: AsideNavRoot,
    Section: AsideNavSection,
    Item: AsideNavItem,
    Button: AsideNavButton,
  },
}
