'use client'
import {
  URL_CONFIRMED_STEP,
  URL_KART_STEP,
  URL_PAYMENT_STEP,
  URL_PROGRESS_ORDER,
} from '@/@URLQueries/progressOrderStep'

import { Check, MapPin, Package } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PaymentMethodSelector } from '@/components/ReviewOrder/PaymentMethod/MethodSelect'
import { ReviewCompletRequestCart } from '@/components/ReviewOrder/Cart/ReviewCompletRequest'
import { CheckAllMethodsCheck } from '@/components/ReviewOrder/CheckoutConfirmed/CheckAllMethodsCheck'
import { GenericLoading } from '@/components/Generic/Loading'
import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import useGetAllCartProducts from '@/api/service/hooks/cart/get/useGetAllCartProducts'

interface Step {
  title: string
  description: string
  icon: React.ReactNode
  route: string
}

const steps: Step[] = [
  {
    title: 'Carrinho',
    description: 'Add your address here',
    icon: <MapPin className="h-5 w-5" />,
    route: URL_KART_STEP,
  },
  {
    title: 'Metodo de Pagamento',
    description: 'Set your preferred shipping method',
    icon: <Package className="h-5 w-5" />,
    route: URL_PAYMENT_STEP,
  },
  {
    title: 'Pedido confirmado',
    description: 'Set your preferred shipping method',
    icon: <Package className="h-5 w-5" />,
    route: URL_CONFIRMED_STEP,
  },
]

const ProgressOrderStep = () => {
  const [refresh, setRefresh] = useState(0)
  const { data } = useGetAllCartProducts()
  const searchParams = useSearchParams()
  if (!data) return <GenericLoading />

  const stepParam = searchParams.get(URL_PROGRESS_ORDER) || URL_KART_STEP
  const activeStepIndex = steps.findIndex((s) => s.route === stepParam)

  const renderStepComponent = () => {
    if (stepParam === URL_KART_STEP) {
      return <ReviewCompletRequestCart />
    }
    if (stepParam === URL_PAYMENT_STEP) {
      return <PaymentMethodSelector />
    }
    if (stepParam === URL_CONFIRMED_STEP) {
      return <CheckAllMethodsCheck />
    }
    return null
  }

  return (
    <div className="w-full py-8">
      <div className="relative flex items-start justify-between">
        {steps.map((step, index) => (
          <div key={step.route} className="relative flex flex-col items-center flex-1">
            <div
              className={
                'relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all z-10 ' +
                (activeStepIndex >= index
                  ? 'bg-primary border-primary '
                  : 'bg-background ')
              }
            >
              {activeStepIndex > index ? <Check className="h-5 w-5" /> : step.icon}
            </div>

            <div className="mt-3 text-center">
              <p
                className={cn(
                  'text-sm font-semibold',
                  activeStepIndex >= index ? 'text-foreground' : 'text-muted-foreground',
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
                  activeStepIndex > index ? 'bg-primary' : 'bg-muted',
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
      {renderStepComponent()}
    </div>
  )
}

export { ProgressOrderStep }
