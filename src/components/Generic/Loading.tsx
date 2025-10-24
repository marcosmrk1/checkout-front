import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface LoadingProps {
  requestFn: () => Promise<any>
  loadingMessage?: string
  loading: boolean
}

const GenericLoading = ({
  requestFn,
  loadingMessage = 'Carregando...',
}: LoadingProps) => {
  const [loading, setLoading] = useState(false)

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <span className="animate-spin h-8 w-8 mb-2 border-4 border-primary border-t-transparent rounded-full" />
        <span>{loadingMessage}</span>
      </div>
    )
  }
}

export { GenericLoading }
