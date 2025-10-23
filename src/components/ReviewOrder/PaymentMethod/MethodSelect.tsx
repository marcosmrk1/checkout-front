'use client'

import { PixMethodPayment } from './Pix'
import { CreditCardMethodPayment } from './CreditCard'
import { TicketMethodPayment } from '@/components/ReviewOrder/PaymentMethod/Tickt'
import { OrderSummary } from '@/components/ReviewOrder/Cart/OrderSummary'
import { ConfirmOrder } from '@/components/ReviewOrder/Cart/ConfirmOrder'
import { UserReadingCard } from '@/components/Shared/UserReading'

const PaymentMethodSelector = () => {
  return (
    <div className="container grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4">Selecione o Método de Pagamento</h2>
        <PixMethodPayment />
        <CreditCardMethodPayment />
        <TicketMethodPayment />
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
        <div className="hidden lg:block h-11" />
        <UserReadingCard />
        <OrderSummary />
        <ConfirmOrder />
      </div>
    </div>
  )
}

export { PaymentMethodSelector }
