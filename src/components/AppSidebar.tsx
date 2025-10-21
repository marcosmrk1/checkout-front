'use client'

import { Home, Settings, Users, FileText } from 'lucide-react'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
} from '@/components/ui/sidebar'

export function AppSidebar() {
  return (
    <Sidebar className="w-64">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold">N</span>
          </div>
          <span className="font-semibold text-lg">Nome da Empresa</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <div className="space-y-1">
          <SidebarItem active>
            <Home className="w-4 h-4" />
            <span>Início</span>
          </SidebarItem>
          <SidebarItem>
            <Users className="w-4 h-4" />
            <span>Usuários</span>
          </SidebarItem>
          <SidebarItem>
            <FileText className="w-4 h-4" />
            <span>Documentos</span>
          </SidebarItem>
          <SidebarItem>
            <Settings className="w-4 h-4" />
            <span>Configurações</span>
          </SidebarItem>
        </div>
      </SidebarContent>

      <SidebarFooter>
        <div className="text-xs text-sidebar-foreground/70">© 2025 Nome da Empresa</div>
      </SidebarFooter>
    </Sidebar>
  )
}
