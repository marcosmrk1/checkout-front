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
      <div className="flex   gap-3 w-full ">
        <Button onClick={handleBack} variant="outline" className="w-1/2" size="lg">
          <ArrowLeft className="h-5 w-4 mr-2" />
          Voltar ao Catálogo
        </Button>
        <Button onClick={handleConfirm} className="w-1/2" size="lg">
          <Check className="h-5 w-4 mr-2" />
          Confirmar Pedido
        </Button>
      </div>
    </Card>
  )
}

export { ConfirmOrder }
