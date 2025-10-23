'use client'

import { PixMethodPayment } from './Pix'
import { CreditCardMethodPayment } from './CreditCard'
import { TicketMethodPayment } from '@/components/ReviewOrder/PaymentMethod/Tickt'

const PaymentMethodSelector = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Selecione o Método de Pagamento</h2>
      <PixMethodPayment />
      <CreditCardMethodPayment />
      <TicketMethodPayment />
    </div>
  )
}

export { PaymentMethodSelector }
