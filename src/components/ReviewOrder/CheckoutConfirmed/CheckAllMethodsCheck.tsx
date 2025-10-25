'use client'
import { METHOD_PAYMENT } from '@/@interface/api/ICart'
import { URL_CONFIRMED_STEP, URL_PROGRESS_ORDER } from '@/@URLQueries/progressOrderStep'
import { useGetAllCartProducts } from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { GenericLoading } from '@/components/Generic/Loading'
import { PaymenteCreditCard } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymenteCreditCard'
import { PaymentPix } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentPix'
import { PaymentSlip } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentSlip'

const CheckAllMethodsCheck = () => {
  const { data, loading } = useGetAllCartProducts()
  if (loading) return <GenericLoading />
  switch (data?.metodPayment) {
    case METHOD_PAYMENT.PAYMENT_SLIP:
      return <PaymentSlip />
    case METHOD_PAYMENT.CREDIT_CARD:
      return <PaymenteCreditCard />
    case METHOD_PAYMENT.PIX:
      return <PaymentPix />
    default:
  }
}
export { CheckAllMethodsCheck }
