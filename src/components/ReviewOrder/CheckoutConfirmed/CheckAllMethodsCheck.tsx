'use client'
import { METHOD_PAYMENT, ORDER_REVIEW } from '@/@interface/api/ICart'
import { URL_CONFIRMED_STEP, URL_PROGRESS_ORDER } from '@/@URLQueries/uprogressOrderStep'
import useDeleteCart from '@/api/hooks/cart/del/useDeleteCart'
import useGetAllCartProducts from '@/api/hooks/cart/get/useGetAllCartProducts'
import { GenericLoading } from '@/components/Generic/Loading'
import { PaymenteCreditCard } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymenteCreditCard'
import { PaymentPix } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentPix'
import { PaymentSlip } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentSlip'
import { TimeBuy } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/TimeBuy'
import OrderConfirmed from '@/components/ReviewOrder/statusFinalOrder/Confirmed'
import { OrderExpired } from '@/components/ReviewOrder/statusFinalOrder/Expired'
import { OrderFailed } from '@/components/ReviewOrder/statusFinalOrder/Failed'
import { deleteCart } from '@/utils/localStorage/Cart'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const CheckAllMethodsCheck = () => {
  const [expired, setExpired] = useState(false)
  const [counter, setCounter] = useState(6)
  const { data, loading } = useGetAllCartProducts()
  const { handleDelete, loading: loadingDeleteCard } = useDeleteCart()
  const router = useRouter()

  useEffect(() => {
    if (data?.orderReview === ORDER_REVIEW.CONFIRMED_ORDER) {
      if (counter === 0) {
        const deleteAndRedirect = async () => {
          await handleDelete()
          router.push('/catalog')
        }
        deleteAndRedirect()
      }
      if (counter > 0) {
        const timer = setTimeout(() => setCounter(counter - 1), 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [data?.orderReview, counter, handleDelete, router])

  if (loading) return <GenericLoading />
  if (loadingDeleteCard) return <GenericLoading />
  if (expired || data?.orderReview === ORDER_REVIEW.EXPIRED_ORDER) {
    return <OrderExpired />
  }
  if (data?.orderReview === ORDER_REVIEW.CONFIRMED_ORDER) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <OrderConfirmed />
        <span className="text-sm text-gray-500">
          Você será redirecionado para o catálogo em {counter} segundo
          {counter !== 1 ? 's' : ''}...
        </span>
      </div>
    )
  }
  if (data?.orderReview === ORDER_REVIEW.FAILED) {
    return <OrderFailed />
  }
  switch (data?.metodPayment) {
    case METHOD_PAYMENT.PAYMENT_SLIP:
      return (
        <div>
          <TimeBuy setExpired={setExpired} />
          <PaymentSlip />
        </div>
      )
    case METHOD_PAYMENT.CREDIT_CARD:
      return (
        <div>
          <TimeBuy setExpired={setExpired} />
          <PaymenteCreditCard />
        </div>
      )
    case METHOD_PAYMENT.PIX:
      return (
        <div>
          <TimeBuy setExpired={setExpired} />
          <PaymentPix />
        </div>
      )
    default:
      return null
  }
}
export { CheckAllMethodsCheck }
