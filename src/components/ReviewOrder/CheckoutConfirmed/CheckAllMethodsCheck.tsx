'use client'
import { METHOD_PAYMENT, ORDER_REVIEW } from '@/@interface/api/ICart'
import { URL_CONFIRMED_STEP, URL_PROGRESS_ORDER } from '@/@URLQueries/progressOrderStep'
import { useGetAllCartProducts } from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { GenericLoading } from '@/components/Generic/Loading'
import { PaymenteCreditCard } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymenteCreditCard'
import { PaymentPix } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentPix'
import { PaymentSlip } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentSlip'
import { TimeBuy } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/TimeBuy'
import OrderExpired from '@/components/ReviewOrder/statusFinalOrder/expired'
import { useState } from 'react'

const CheckAllMethodsCheck = () => {
  const [refresh, setRefresh] = useState(0)
  const [expired, setExpired] = useState(false)
  const { data, loading } = useGetAllCartProducts(refresh)
  if (loading) return <GenericLoading />
  if (expired || data?.orderReview === ORDER_REVIEW.EXPIRED_ORDER) {
    return <OrderExpired />
  }
  switch (data?.metodPayment) {
    case METHOD_PAYMENT.PAYMENT_SLIP:
      return (
        <div>
          <TimeBuy setRefresh={setRefresh} setExpired={setExpired} />
          <PaymentSlip />
        </div>
      )
    case METHOD_PAYMENT.CREDIT_CARD:
      return (
        <div>
          <TimeBuy setRefresh={setRefresh} setExpired={setExpired} />
          <PaymenteCreditCard />
        </div>
      )
    case METHOD_PAYMENT.PIX:
      return (
        <div>
          <TimeBuy setRefresh={setRefresh} setExpired={setExpired} />
          <PaymentPix />
        </div>
      )
    default:
      return null
  }
}
export { CheckAllMethodsCheck }
