'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { SidebarItem } from '@/types'

interface SidebarProps {
  items: SidebarItem[]
  className?: string
  collapsed?: boolean
}

interface SidebarItemProps {
  item: SidebarItem
  isActive?: boolean
  collapsed?: boolean
}

const SidebarItemComponent = ({ item, isActive, collapsed }: SidebarItemProps) => {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
        isActive 
          ? 'bg-white/10 text-white' 
          : 'text-white/70 hover:bg-white/5 hover:text-white',
        collapsed && 'justify-center px-2'
      )}
    >
      <Icon className={cn('h-5 w-5 flex-shrink-0', collapsed && 'h-6 w-6')} />
      {!collapsed && (
        <>
          <span className="truncate">{item.label}</span>
          {item.badge && (
            <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-xs">
              {item.badge}
            </span>
          )}
        </>
      )}
    </Link>
  )
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ items, className, collapsed = false }, ref) => {
    const pathname = usePathname()

    return (
      <div
        ref={ref}
        className={cn(
          'flex h-full flex-col bg-gradient-to-b from-indigo-900 to-indigo-800 text-white transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
          className
        )}
      >
        {/* Logo/Brand */}
        <div className={cn(
          'flex items-center border-b border-white/10 p-4',
          collapsed ? 'justify-center' : 'gap-3'
        )}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-indigo-900 font-bold">
            Q
          </div>
          {!collapsed && (
            <span className="text-lg font-semibold">invoice</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {items.map((item) => (
            <SidebarItemComponent
              key={item.id}
              item={item}
              isActive={pathname === item.href}
              collapsed={collapsed}
            />
          ))}
        </nav>

        {/* Progress Bar */}
        {!collapsed && (
          <div className="border-t border-white/10 p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Invoice Available</span>
                <span className="text-white">73%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" />
              </div>
              <p className="text-xs text-white/50">2.100 Used</p>
            </div>
          </div>
        )}
      </div>
    )
  }
)
Sidebar.displayName = 'Sidebar'

export { Sidebar }
export type { SidebarProps }








