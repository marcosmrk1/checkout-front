'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

const Sidebar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex h-full flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border',
        className,
      )}
      {...props}
    />
  ),
)
Sidebar.displayName = 'Sidebar'

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-2 p-4 border-b border-sidebar-border',
      className,
    )}
    {...props}
  />
))
SidebarHeader.displayName = 'SidebarHeader'

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex-1 overflow-y-auto p-4', className)} {...props} />
))
SidebarContent.displayName = 'SidebarContent'

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-4 border-t border-sidebar-border', className)}
    {...props}
  />
))
SidebarFooter.displayName = 'SidebarFooter'

const SidebarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean
  }
>(({ className, active, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
      'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      active && 'bg-sidebar-primary text-sidebar-primary-foreground',
      className,
    )}
    {...props}
  />
))
SidebarItem.displayName = 'SidebarItem'

export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarItem }
