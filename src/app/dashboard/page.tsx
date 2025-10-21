import { AppSidebar } from '@/components/AppSidebar'
import { ThemeToggle } from '@/components/theme-toggle'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <ThemeToggle />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg bg-card text-card-foreground">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-muted-foreground">
              Este é um exemplo de card usando as cores do tema.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card text-card-foreground">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p className="text-muted-foreground">
              As cores mudam automaticamente no modo escuro.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card text-card-foreground">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p className="text-muted-foreground">
              O Sidebar usa as variáveis de cor definidas.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
