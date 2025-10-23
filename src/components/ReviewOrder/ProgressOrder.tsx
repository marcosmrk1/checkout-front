'use client'

import { Check, MapPin, Package, CreditCard, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TimeBuy } from '@/components/ReviewOrder/Cart/TimeBuy'
import { OrderReview } from '@/components/ReviewOrder/Cart/OrderReview'
import { UserReadingCard } from '@/components/ReviewOrder/Cart/UserReading'
import { ConfirmOrder } from '@/components/ReviewOrder/Cart/ConfirmOrder'
import { PixMethodPayment } from '@/components/ReviewOrder/PaymentMethod/Pix'
import { Card } from '@/components/ui/card'
import { PaymentMethodSelector } from '@/components/ReviewOrder/PaymentMethod/MethodSelect'
import { ReviewCompletRequestCart } from '@/components/ReviewOrder/Cart/ReviewCompletRequest'

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

interface CheckoutStepperProps {
  currentStep?: number
}
const showreviewScreen = (currenteStep: number) => {
  switch (currenteStep) {
    case 1:
      return <ReviewCompletRequestCart />
    case 2:
      return <PaymentMethodSelector />
  }
}
const ProgressOrderStep = ({ currentStep = 1 }: CheckoutStepperProps) => {
  return (
    <div className="w-full py-8">
      <div className="relative flex items-start justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-col items-center flex-1">
            {/* Step Circle */}
            <div
              className={cn(
                'relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all z-10',
                currentStep >= step.id
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'bg-background border-muted-foreground/30 text-muted-foreground',
              )}
            >
              {currentStep > step.id ? <Check className="h-5 w-5" /> : step.icon}
            </div>

            {/* Step Info */}
            <div className="mt-3 text-center">
              <p
                className={cn(
                  'text-sm font-semibold',
                  currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {step.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1 max-w-[120px]">
                {step.description}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'absolute top-6 h-0.5 -z-0',
                  currentStep > step.id ? 'bg-primary' : 'bg-muted-foreground/30',
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
