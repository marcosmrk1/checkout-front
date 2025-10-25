'use client'
import { URL_CONFIRMED_STEP, URL_PROGRESS_ORDER } from '@/@URLQueries/progressOrderStep'
import { useGetAllCartProducts } from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { PaymenteCreditCard } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymenteCreditCard'
import { PaymentPix } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentPix'
import { PaymentSlip } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentSlip'
import { useSearchParams } from 'next/navigation'

const CheckAllMethodsCheck = () => {
  const searchParams = useSearchParams()
  const params = searchParams.get(URL_PROGRESS_ORDER)
  const refreshPage = params === URL_CONFIRMED_STEP ? 1 : 0
  const { data } = useGetAllCartProducts(refreshPage)
  console.log(data)
  return (
    <div>
      <PaymentSlip />
      <PaymenteCreditCard />
      <PaymentPix />
    </div>
  )
}
export { CheckAllMethodsCheck }
