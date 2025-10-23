import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeProvider } from 'next-themes'
import { AppSideBar } from '@/components/Menu/AppSideBar'
import { NavBarHeader } from '@/components/Menu/NavBar'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function RootLayoutPrivate({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={cn(
        geistSans.variable,
        geistMono.variable,
        'bg-accent-foreground,bg-background text-foreground min-h-screen ',
      )}
    >
      <SidebarProvider>
        <AppSideBar />
        <main className="w-full ">
          <div className="top-0 z-40 w-full border-b ">
            <NavBarHeader />
          </div>
          <div className="p-1">
            <SidebarTrigger />
            <div className="container mx-auto px-3 ">{children}</div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
