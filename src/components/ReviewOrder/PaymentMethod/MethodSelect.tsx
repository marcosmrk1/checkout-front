'use client'

import { OrderSummary } from '@/components/ReviewOrder/Cart/OrderSummary'
import { UserReadingCard } from '@/components/Shared/UserReading'
import { PaymentMethod } from '@/components/ReviewOrder/PaymentMethod/PaymenteMethod'
import { usePatchOrderReviewCart } from '@/api/service/hooks/cart/patch/usePatchOrderReview'
import { METHOD_PAYMENT, ORDER_REVIEW } from '@/@interface/api/ICart'
import { useState } from 'react'
import { NextStepButtons } from '@/components/ReviewOrder/NextStepButtons'

const PaymentMethodSelector = () => {
  const [methodPayment, setMethodPayment] = useState('' as METHOD_PAYMENT)
  return (
    <div className="container grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4">Selecione o Método de Pagamento</h2>
        <PaymentMethod
          methodPayment={methodPayment}
          setMethodPayment={setMethodPayment}
        />
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
        <div className="hidden lg:block h-11" />
        <UserReadingCard />
        <OrderSummary refresh={0} />
        <NextStepButtons methodPayment={methodPayment} />
      </div>
    </div>
  )
}

export { PaymentMethodSelector }
