'use client'

import { useState } from 'react'
import { QrCode, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PaymentMethodItem } from '@/components/ReviewOrder/PaymentMethod/PaymenteMethod'

const PixMethodPayment = () => {
  return (
    <PaymentMethodItem
      description="O pagamento via Pix é rápido e seguro.
       Após a confirmação do pedido, você receberá um 
       código QR ou chave Pix para efetuar o 
       pagamento diretamente do seu aplicativo bancário.
        A compensação é instantânea, permitindo que seu pedido 
        seja processado imediatamente."
      icon={QrCode}
      title="Pix"
      defaultOpen={false}
      Children={<></>}
    />
  )
}

export { PixMethodPayment }
