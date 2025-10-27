'use client'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from '@/components/Menu/ThemeSwitcher'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { MENU_ITENS_ROUTES } from '@/routes'

const AppSideBar = () => {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              alt="Logo CN Shopping"
              src="/images/logo.png"
              className="h-12 w-12 rounded-lg border border-gray-200 shadow-md object-cover transition-transform duration-200 hover:scale-105 hover:shadow-lg bg-white"
            />
            <span className="font-semibold"> CN Shopping</span>
          </div>
          <ThemeSwitcher />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENU_ITENS_ROUTES.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={
                          isActive
                            ? 'bg-primary/10 text-primary font-bold rounded transition-colors'
                            : 'transition-colors'
                        }
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
export { AppSideBar }
