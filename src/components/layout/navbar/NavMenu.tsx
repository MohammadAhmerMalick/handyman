'use client'

import { cn } from 'cn'
import { useTranslations } from 'next-intl'
import type { ComponentProps } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { navLinks } from '@/data/links'
import { Link, usePathname } from '@/i18n/navigation'

type NavMenuProps = ComponentProps<typeof NavigationMenu> & {
  onNavigate?: () => void
}

const NavMenu = ({
  className,
  onNavigate,
  orientation,
  ...props
}: NavMenuProps) => {
  const pathname = usePathname()
  const t = useTranslations('Nav')
  const isVertical = orientation === 'vertical'

  return (
    <NavigationMenu
      className={cn(isVertical && 'w-full max-w-none flex-none', className)}
      {...props}
    >
      <NavigationMenuList
        data-orientation={orientation}
        className={cn(
          'gap-2 self-start',
          isVertical && 'w-full flex-col items-stretch justify-start gap-1'
        )}
      >
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== '/' && pathname.startsWith(`${link.href}/`))

          return (
            <NavigationMenuItem
              className={cn(isVertical && 'w-full')}
              key={link.href}
            >
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'gap-2.5 border border-transparent duration-300 focus:bg-transparent',
                  isVertical
                    ? 'h-12 w-full justify-start rounded-xl px-3 text-base text-white hover:border-transparent hover:bg-white/10 hover:text-primary hover:shadow-none'
                    : 'text-white text-xl hover:border-primary/30 hover:bg-transparent hover:text-primary hover:shadow-md',
                  isActive &&
                    (isVertical
                      ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'
                      : 'border border-primary/20 bg-primary/25 text-primary')
                )}
                render={<Link href={link.href} onClick={onNavigate} />}
              >
                {isVertical ? (
                  <span
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-lg',
                      isActive
                        ? 'bg-primary-foreground/15 text-primary-foreground'
                        : 'bg-primary/15 text-primary'
                    )}
                  >
                    <link.icon className="size-4" />
                  </span>
                ) : (
                  <link.icon className="size-5 shrink-0" />
                )}
                {link.id ? t(link.id) : link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu
