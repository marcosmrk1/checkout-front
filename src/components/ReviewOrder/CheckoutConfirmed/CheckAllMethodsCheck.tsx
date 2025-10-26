'use client'
import { METHOD_PAYMENT, ORDER_REVIEW } from '@/@interface/api/ICart'
import { URL_CONFIRMED_STEP, URL_PROGRESS_ORDER } from '@/@URLQueries/progressOrderStep'
import { useGetAllCartProducts } from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { GenericLoading } from '@/components/Generic/Loading'
import { PaymenteCreditCard } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymenteCreditCard'
import { PaymentPix } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentPix'
import { PaymentSlip } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentSlip'
import { TimeBuy } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/TimeBuy'
import OrderConfirmed from '@/components/ReviewOrder/statusFinalOrder/Confirmed'
import { OrderExpired } from '@/components/ReviewOrder/statusFinalOrder/Expired'
import { useEffect, useState } from 'react'

const CheckAllMethodsCheck = () => {
  const [refresh, setRefresh] = useState(0)
  const [expired, setExpired] = useState(false)
  const { data, loading } = useGetAllCartProducts(refresh)

  if (loading) return <GenericLoading />

  if (expired || data?.orderReview === ORDER_REVIEW.EXPIRED_ORDER) {
    return <OrderExpired />
  }
  if (data?.orderReview === ORDER_REVIEW.CONFIRMED_ORDER) {
    return <OrderConfirmed />
  }
  switch (data?.metodPayment) {
    case METHOD_PAYMENT.PAYMENT_SLIP:
      return (
        <div>
          <TimeBuy setExpired={setExpired} />
          <PaymentSlip setRefresh={setRefresh} />
        </div>
      )
    case METHOD_PAYMENT.CREDIT_CARD:
      return (
        <div>
          <TimeBuy setExpired={setExpired} />
          <PaymenteCreditCard setRefresh={setRefresh} />
        </div>
      )
    case METHOD_PAYMENT.PIX:
      return (
        <div>
          <TimeBuy setExpired={setExpired} />
          <PaymentPix setRefresh={setRefresh} />
        </div>
      )
    default:
      return null
  }
}
export { CheckAllMethodsCheck }
