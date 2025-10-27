'use client'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const GenericError = () => {
  const router = useRouter()
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 py-12">
      <AlertTriangle className="w-16 h-16 text-red-500" />
      <h2 className="text-2xl font-bold text-red-600">Ocorreu um erro!</h2>
      <p className="text-base text-muted-foreground">
        Algo deu errado. Tente novamente.
      </p>
      <Button
        style={{ backgroundColor: '#ef4444', color: '#fff' }}
        onClick={() => router.refresh()}
        className="mt-2 hover:bg-red-600"
      >
        Tentar novamente
      </Button>
    </div>
  )
}

export default GenericError
