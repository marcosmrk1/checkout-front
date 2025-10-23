'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Check } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ConfirmOrder = () => {
  const router = useRouter()

  const handleConfirm = () => {
    // Aqui você pode adicionar a lógica de confirmação do pedido
    console.log('Pedido confirmado!')
    // Exemplo: router.push('/success')
  }

  const handleBack = () => {
    router.push('/catalog')
  }

  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent">
      <div className="flex flex-col gap-3">
        <Button onClick={handleConfirm} className="w-full" size="lg">
          <Check className="h-5 w-5 mr-2" />
          Confirmar Pedido
        </Button>

        <Button onClick={handleBack} variant="outline" className="w-full" size="lg">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar ao Catálogo
        </Button>
      </div>
    </Card>
  )
}

export { ConfirmOrder }
