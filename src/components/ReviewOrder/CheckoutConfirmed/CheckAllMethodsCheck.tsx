import { PaymenteCreditCard } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymenteCreditCard'
import { PaymentPix } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentPix'
import { PaymentSlip } from '@/components/ReviewOrder/CheckoutConfirmed/PaymentCheck/PaymentSlip'

const CheckAllMethodsCheck = () => {
  return (
    <div>
      <PaymentSlip />
      <PaymenteCreditCard />
      <PaymentPix />
    </div>
  )
}
export { CheckAllMethodsCheck }
