'use client'

import { cn } from 'cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { navLinks } from '@/data/links'

type NavMenuProps = ComponentProps<typeof NavigationMenu>

const NavMenu = ({ orientation, ...props }: NavMenuProps) => {
  const pathname = usePathname()

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList
        data-orientation={orientation}
        className="gap-2 self-start data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start"
      >
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.title}>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'gap-2 border border-transparent text-white text-xl duration-500 hover:border-primary/30 hover:bg-transparent hover:text-primary hover:shadow-md focus:bg-transparent',
                pathname === link.href
                  ? 'bg-black/10 text-primary hover:bg-black/40'
                  : ''
              )}
              render={<Link href={link.href} />}
            >
              <link.icon className="size-5 shrink-0" />
              {link.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu
