'use client'

import { Check, MapPin, Package } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PaymentMethodSelector } from '@/components/ReviewOrder/PaymentMethod/MethodSelect'
import { ReviewCompletRequestCart } from '@/components/ReviewOrder/Cart/ReviewCompletRequest'
import { CheckAllMethodsCheck } from '@/components/ReviewOrder/CheckoutConfirmed/CheckAllMethodsCheck'
import { GenericLoading } from '@/components/Generic/Loading'
import { useGetAllCartProducts } from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import { ORDER_REVIEW } from '@/@interface/api/ICart'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Carrinho',
    description: 'Add your address here',
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    id: 2,
    title: 'Metodo de Pagamento',
    description: 'Set your preferred shipping method',
    icon: <Package className="h-5 w-5" />,
  },
  {
    id: 3,
    title: 'Pedido confirmado',
    description: 'Set your preferred shipping method',
    icon: <Package className="h-5 w-5" />,
  },
]

const showreviewScreen = (currenteStep: number) => {
  switch (currenteStep) {
    case 1:
      return <ReviewCompletRequestCart />
    case 2:
      return <PaymentMethodSelector />
    case 3:
      return <CheckAllMethodsCheck />
  }
}
const ProgressOrderStep = () => {
  const { data } = useGetAllCartProducts()
  if (!data) return <GenericLoading />

  let currentStep = 1
  switch (data.orderReview) {
    case ORDER_REVIEW.REVIEW_CART:
      currentStep = 1
      break
    case ORDER_REVIEW.METHOD_PAYMENT:
      currentStep = 2
      break
    case ORDER_REVIEW.CONFIRM_ORDER:
      currentStep = 3
      break
    default:
      currentStep = 1
  }

  return (
    <div className="w-full py-8">
      <div className="relative flex items-start justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-col items-center flex-1">
            <div
              className={
                'relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all z-10 ' +
                (currentStep >= step.id
                  ? 'bg-primary border-primary '
                  : 'bg-background ')
              }
            >
              {currentStep > step.id ? <Check className="h-5 w-5" /> : step.icon}
            </div>

            <div className="mt-3 text-center">
              <p
                className={cn(
                  'text-sm font-semibold',
                  currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {step.title}
              </p>
              <p className="text-xs  mt-1 max-w-[120px]">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <div
                className={cn(
                  'absolute top-6 h-0.5 ',
                  currentStep > step.id ? 'bg-primary' : 'bg-muted',
                )}
                style={{
                  left: 'calc(50% + 24px)',
                  right: 'calc(-50% + 24px)',
                }}
              />
            )}
          </div>
        ))}
      </div>
      {showreviewScreen(currentStep)}
    </div>
  )
}

export { ProgressOrderStep }
