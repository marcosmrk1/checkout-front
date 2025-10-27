'use client'

import { METHOD_PAYMENT, ORDER_REVIEW } from '@/@interface/api/ICart'
import { URL_FORCED_ERROR, URL_FORCED_ERRO_PIX } from '@/@URLQueries/UforcedError'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Check } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  URL_PROGRESS_ORDER,
  URL_KART_STEP,
  URL_PAYMENT_STEP,
  URL_CONFIRMED_STEP,
} from '@/@URLQueries/uprogressOrderStep'
import { GenericLoading } from '@/components/Generic/Loading'
import { use, useEffect, useState } from 'react'
import { getCreditCardInfo } from '@/utils/localStorage/CreditCard'
import { ShowGenericToast } from '@/components/Generic/Toast'
import usePatchMethodPayment from '@/api/hooks/cart/patch/usePatchMethodPayment'
import useGetCreditCard from '@/api/hooks/creditCart/useGet/useGetCreditCard'

interface ButtonProps {
  backLabel?: string

  methodPayment?: METHOD_PAYMENT
}

const NextStepButtons = ({
  backLabel = 'Voltar ao cátalogo',
  methodPayment,
}: ButtonProps) => {
  const { handleChangeMethodPayment, loading } = usePatchMethodPayment()
  const { data, loading: loadingCardCredit } = useGetCreditCard()
  const router = useRouter()
  const searchParams = useSearchParams()
  const progressOrder = searchParams.get(URL_PROGRESS_ORDER)
  const routeActualPayment = progressOrder === URL_PAYMENT_STEP
  const routeActualKart = progressOrder === URL_KART_STEP
  const handleBackToPayment = () => {
    if (routeActualKart) {
      router.push(`/catalog`)
    }
    if (routeActualPayment) {
      router.push(`/review-order?${URL_PROGRESS_ORDER}=${URL_KART_STEP}`)
    }
  }

  const confirmeOrder = async () => {
    const canContinue = creditCartMethodRules()
    if (!canContinue) return

    if (routeActualKart) {
      router.push(`/review-order?${URL_PROGRESS_ORDER}=${URL_PAYMENT_STEP}`)
      return
    }

    if (!methodPayment && routeActualPayment) {
      ShowGenericToast({
        type: 'error',
        message: 'Selecione um método de pagamento para continuar.',
      })
      return
    }
    if (methodPayment && routeActualPayment) {
      await handleChangeMethodPayment(methodPayment)
      if (loading) return <GenericLoading />
      if (methodPayment === METHOD_PAYMENT.PIX) {
        router.push(
          `/review-order?${URL_PROGRESS_ORDER}=${URL_CONFIRMED_STEP}&${URL_FORCED_ERROR}=${URL_FORCED_ERRO_PIX}`,
        )
        return
      }
      router.push(`/review-order?${URL_PROGRESS_ORDER}=${URL_CONFIRMED_STEP}`)
    }
  }

  const creditCartMethodRules = () => {
    if (
      progressOrder === URL_PAYMENT_STEP &&
      methodPayment === METHOD_PAYMENT.CREDIT_CARD
    ) {
      if (!data?.last4Number) {
        ShowGenericToast({
          type: 'error',
          message:
            'Nenhuma informação de cartão de crédito encontrada. Por favor, adicione um cartão para continuar.',
        })
        return false
      }
      if (data?.last4Number) {
        router.push(`/review-order?${URL_PROGRESS_ORDER}=${URL_CONFIRMED_STEP}`)
      }
    }
    return true
  }

  if (loadingCardCredit) {
    return <GenericLoading loadingMessage="Carregando informações do usuário" />
  }
  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent">
      <div className="flex   gap-3 w-full ">
        <Button
          onClick={handleBackToPayment}
          variant="outline"
          className="w-1/2"
          size="lg"
        >
          <ArrowLeft className="h-5 w-4 mr-2" />
          {backLabel}
        </Button>
        <Button onClick={confirmeOrder} className="w-1/2" size="lg">
          <Check className="h-5 w-4 mr-2" />
          Confirmar Pedido
        </Button>
      </div>
    </Card>
  )
}

export { NextStepButtons }
