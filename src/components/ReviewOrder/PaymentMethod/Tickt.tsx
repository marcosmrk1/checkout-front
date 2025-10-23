'use client'

import { useState } from 'react'
import { Receipt, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PaymentMethodItem } from '@/components/ReviewOrder/PaymentMethod/PaymenteMethod'

const TicketMethodPayment = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <PaymentMethodItem
      description="O pagamento via boleto bancário é uma opção prática e segura. Após a
    geração do boleto, você poderá pagá-lo em bancos, lotéricas ou via internet banking.
    O prazo para compensação é de até 3 dias úteis, após o qual seu pedido será processado."
      icon={Receipt}
      title="Boleto Bancário"
      defaultOpen={false}
      Children={<></>}
    />
  )
}

export { TicketMethodPayment }
