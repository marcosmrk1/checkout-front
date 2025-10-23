import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from 'next/font/google'
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={cn(geistSans.variable, geistMono.variable)}>{children}</div>
}
