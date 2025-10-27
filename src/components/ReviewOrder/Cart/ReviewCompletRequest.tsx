import { NextStepButtons } from '@/components/ReviewOrder/NextStepButtons'
import { OrderReview } from '@/components/ReviewOrder/Cart/OrderReview'
import { OrderSummary } from '@/components/ReviewOrder/Cart/OrderSummary'
import { UserReadingCard } from '@/components/Shared/UserReading'

const ReviewCompletRequestCart = () => {
  return (
    <div className="container grid grid-cols-12 gap-4  ">
      <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
        <OrderReview />
      </div>
      <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
        <UserReadingCard />
        <OrderSummary />
        <NextStepButtons backLabel="Voltar ao carrinho" />
      </div>
    </div>
  )
}
export { ReviewCompletRequestCart }
