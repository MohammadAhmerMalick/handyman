'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

type NavMenuProps = ComponentProps<typeof NavigationMenu>

const NavMenu = ({ orientation, ...props }: NavMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList
      data-orientation={orientation}
      className="self-start data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start"
    >
      <NavigationMenuItem>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          render={<Link href="#" />}
        >
          Home
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          render={<Link href="#" />}
        >
          Blog
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          render={<Link href="#" />}
        >
          About
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          render={<Link href="#" />}
        >
          Contact Us
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

export default NavMenu
