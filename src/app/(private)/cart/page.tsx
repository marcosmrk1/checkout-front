import { ConfirmOrder } from '@/components/Cart/confirmOrder'
import { OrderReview } from '@/components/Cart/OrderReview'
import { TimeBuy } from '@/components/Cart/TimeBuy'
import { UserReadingCard } from '@/components/Cart/userReading'

export default function Home() {
  return (
    <div className="container grid grid-cols-12 gap-4  ">
      <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
        <TimeBuy />
        <OrderReview />
      </div>
      <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
        <UserReadingCard />
        <ConfirmOrder />
      </div>
    </div>
  )
}
