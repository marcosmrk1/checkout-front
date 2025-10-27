'use client'
import {
  URL_CONFIRMED_STEP,
  URL_KART_STEP,
  URL_PAYMENT_STEP,
  URL_PROGRESS_ORDER,
} from '@/@URLQueries/uprogressOrderStep'

import { Check, MapPin, Package, Router } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PaymentMethodSelector } from '@/components/ReviewOrder/PaymentMethod/MethodSelect'
import { ReviewCompletRequestCart } from '@/components/ReviewOrder/Cart/ReviewCompletRequest'
import { CheckAllMethodsCheck } from '@/components/ReviewOrder/CheckoutConfirmed/CheckAllMethodsCheck'
import { GenericLoading } from '@/components/Generic/Loading'
import { ORDER_REVIEW } from '@/@interface/api/ICart'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useGetAllCartProducts from '@/api/service/hooks/cart/get/useGetAllCartProducts'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { defaultStyleButton } from '@/utils/constantsStyleDefault/Button'

interface Step {
  title: string
  description: string
  icon: React.ReactNode
  route: string
}

const steps: Step[] = [
  {
    title: 'Carrinho',
    description: 'Visualize o carrinho completo',
    icon: <MapPin className="h-5 w-5" />,
    route: URL_KART_STEP,
  },
  {
    title: 'Metodo de Pagamento',
    description: 'Selecione o metodo de pagamento',
    icon: <Package className="h-5 w-5" />,
    route: URL_PAYMENT_STEP,
  },
  {
    title: 'Pedido confirmado',
    description: 'Confirme o pedido',
    icon: <Package className="h-5 w-5" />,
    route: URL_CONFIRMED_STEP,
  },
]

const ProgressOrderStep = () => {
  const { data, loading } = useGetAllCartProducts()
  const searchParams = useSearchParams()
  if (loading) return <GenericLoading />
  const router = useRouter()
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

  if (data && data.itens.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] gap-4 rounded-lg shadow p-8 mt-8">
        <span className="text-3xl">🛒</span>
        <h2 className="text-xl font-bold ">Ops! Seu carrinho está vazio</h2>
        <p className="text-center">
          Parece que você ainda não adicionou nenhum item ao carrinho.
        </p>
        <Button onClick={() => router.push('/catalog')} className={defaultStyleButton}>
          Voltar ao catálogo
        </Button>
      </div>
    )
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
              {activeStepIndex > index ? (
                <Check className="h-5 w-5" />
              ) : step.route === URL_CONFIRMED_STEP &&
                data?.orderReview === ORDER_REVIEW.CONFIRMED_ORDER ? (
                <Check className="h-5 w-5 " />
              ) : (
                step.icon
              )}
            </div>

            <div className="mt-3 text-center">
              <p
                className={cn(
                  'text-sm font-semibold',
                  activeStepIndex >= index ? 'text-foreground' : 'text-muted',
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
