import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeProvider } from 'next-themes'
import { AppSideBar } from '@/components/Menu/AppSideBar'

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
        'min-h-screen bg-background text-foreground font-sans antialiased',
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AppSideBar />
          <main className="p-4">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  )
}
